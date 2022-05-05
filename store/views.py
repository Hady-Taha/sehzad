from django.shortcuts import render,get_object_or_404,redirect
from django.contrib import messages
from django.template.loader import render_to_string
from .models import Category, Cart, Product, Order, PromoCode
from customer.forms import EditCustomer
from customer.utils import customer_or_device
from django.http.response import JsonResponse
from .serializers import CartSerializer
from customer.models import Customer,Region
import requests
import telegram

# Create your views here.
def home(request):
    categories= Category.objects.all()
    cart = Cart.objects.filter(customer=customer_or_device(request), order=False)
    
    #عشان طنط تضيف في السلة او تزود
    if "add" in request.POST:
        product = get_object_or_404(Product, id=request.POST.get("productId"))
        get, create = Cart.objects.get_or_create(customer=customer_or_device(request), product=product,order=False)
        if get:
            get.quantity = float(request.POST.get("quantity"))
            get.save()
        
        return JsonResponse({"data": CartSerializer(get).data, "inCart": create, "total": round(get.get_total_price, 2),"cartCount":cart.count()}, safe=False)

    #عشان ينقص عنصر في السلة
    elif "mins" in request.POST:
        product =  get_object_or_404(Product, id=request.POST.get("productId"))
        get = get_object_or_404(Cart, customer=customer_or_device(request), product=product, order=False)
        get.quantity = float(request.POST.get("quantity"))
        get.save()
        #لو الكمية بصفر بيمسح العنصر من السلة
        if float(request.POST.get("quantity")) <= 0 :get.delete()
        return JsonResponse({"data": CartSerializer(get).data, "total": round(get.get_total_price, 2), "cartCount": cart.count()}, safe=False)

    #بيمسح العنصر من السلة
    elif "deletCart" in request.POST:
        product = Product.objects.get(id=request.POST.get("productId"))
        get = Cart.objects.get(customer=customer_or_device(request), product=product, order=False)
        get.delete()
        return JsonResponse({"data": CartSerializer(get).data, "total": round(get.get_total_price, 2), "cartCount": cart.count()}, safe=False)

    
    context={
        "title": "Şehzad",
        "categories":categories,
        "cart":cart,
    }
    
    return render(request, "store/index.html",context)


# @login_required(login_url="/accounts/signup")
def checkout(request):
    user_customer = Customer.objects.get(id=customer_or_device(request).id)
    price=None
    code=None
    token="5003630205:AAHehak3AlarZUJsw9qaZQkonMgQR71OjqQ"
    chat_id = [1645895789]
    form = EditCustomer(instance=user_customer, request=request)
    items = Cart.objects.filter(customer=user_customer, order=False)
    if items.count() == 0:return redirect("home")
    if "checkout" in request.POST:
        form = EditCustomer(request.POST or None,instance=user_customer, request=request)
        if form.is_valid():
            form.save()
            create = Order.objects.create(customer=user_customer, )
            for i in items:
                create.cart.add(i)
                i.order=True
                i.save()
                i.product.count_order+=1
                i.product.save()
            create.price = create.get_price+user_customer.region.price
            create.save()
            if "codeing" in request.POST and PromoCode.objects.filter(code=request.POST.get("codeing")).exists() and PromoCode.objects.get(code=request.POST.get("codeing")).counter > 0:
                code =PromoCode.objects.get(code=request.POST.get("codeing"))
                total = create.get_price
                dis = code.decrease
                NewPrice = total - total * dis / 100 + request.user.customer.region.price
                price = round(NewPrice, 2) 
                create.price = price 
                create.discount=True
                create.save()
                code.counter-=1
                code.save()
            htmlText = render_to_string( 'store/telegramText.html',{'create': create, 'code': code})
            bot = telegram.Bot(token=token)
            for i in chat_id:
                bot.send_message(
                    chat_id=f'{i}', text=htmlText, parse_mode=telegram.ParseMode.HTML)
            messages.success(
                request, 'لقد تمت عملية الشراء بنجاح سوف يتم الاتصال بك في اقرب وقت شكرا لاستخدامك فودك')
        
            return redirect("orders")

    #لاظهار السعر بعد الخصم
    if "PromoCode" in request.POST:
        code = get_object_or_404(PromoCode, code=request.POST.get("poromoText"))
        if code  and code.counter > 0:
            total = items[0].get_total_price
            NewPrice = total - total * code.decrease / 100 + user_customer.region.price
            price = round(NewPrice, 2) 
            return JsonResponse({"price":NewPrice,},safe=False)
        else:
            price=items[0].get_total_price
            message=False
            return JsonResponse({"price":price,"message":message,},safe=False)
    
    if "id_region" in request.POST:
        return JsonResponse({"region_price": Region.objects.get(id=request.POST.get("id_region")).price, "price": items[0].get_total_price}, safe=False)


    context = {
        'title': 'الدفع',
        "form":form,
        "price":price,
        "user_customer":user_customer,
        
    }
    return render(request,'store/checkout.html',context)