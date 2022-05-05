from django.shortcuts import render,get_object_or_404,redirect
from store.models import Product,Category,Cart,Order
from .forms import ProductForm, CategoryForm,RegionForm
from customer.models import Customer,Region
from django.db.models import Count,Sum,Max
from django.db.models import Q
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.decorators import login_required
# Create your views here.


@login_required(login_url="authentication")
def overview(request):
    products = Product.objects.all().order_by("category")
    topProduct = Product.objects.all().order_by("-count_order")
    
    if "change_stock" in request.POST:
        chanege_stock=Product.objects.get(id=request.POST.get("product_id"))
        if chanege_stock.stock:
            chanege_stock.stock=False
            chanege_stock.save()
        else:
            chanege_stock.stock=True
            chanege_stock.save()
        
    context={
        "title": "Şehzad-Dashboard",
        "products":products,
        "topProduct":topProduct,
        
    }
    return render(request, 'dashboard/overview.html',context)


@login_required(login_url="authentication")
def add_product(request):
    form = ProductForm()
    if request.method == "POST":
        newProduct = ProductForm(request.POST)
        if newProduct.is_valid():
            newProduct.save()
            return redirect("overview")
    context = {
        "title": "Şehzad-add product",
        "form": form,

    }
    return render(request, 'dashboard/add_product.html', context)


@login_required(login_url="authentication")
def product_details(request,id):
    product=get_object_or_404(Product,id=id)
    if "update" in request.POST:
        form = ProductForm(request.POST, instance=product)
        if form.is_valid():
            form.save()

    if "delete" in request.POST:
        product.delete()
        return redirect("overview")
        
    else:
        form = ProductForm( instance=product)
    context = {
        "title": "Şehzad-product details",
        "product": product,
        "form":form,
    }
    return render(request, 'dashboard/product_details.html',context)


@login_required(login_url="authentication")
def add_category(request):
    form = CategoryForm()
    if request.method == "POST":
        newCategory = CategoryForm(request.POST)
        if newCategory.is_valid():
            newCategory.save()
            return redirect("overview")
    context = {
        "title": "Şehzad-add product",
        "form": form,

    }
    return render(request, 'dashboard/add_category.html', context)
    

@login_required(login_url="authentication")
def category_details(request, id):
    category = get_object_or_404(Category, id=id)
    if "update" in request.POST:
        form = CategoryForm(request.POST, instance=category)
        if form.is_valid():
            form.save()

    elif "delete" in request.POST:
        category.delete()
        return redirect("overview")
    
    else:
        form = CategoryForm(instance=category)
    context = {
        "title": "Şehzad-category details",
        "category": category,
        "form":form,
        
    }
    return render(request, 'dashboard/category_details.html',context)


@login_required(login_url="authentication")
def customers(request):
    customer = Customer.objects.filter(~Q(region=None))
    form = RegionForm()
    regions=Region.objects.all()
    if "add_region" in request.POST:
        newRegion = RegionForm(request.POST)
        if newRegion.is_valid():
            newRegion.save()
    elif "delete_region" in request.POST:
        region = Region.objects.get(id=request.POST.get("id_region"))
        region.delete()
        return redirect("customers")
    context = {
        "title": "Foodk-customers",
        "customer":customer,
        "form": form,
        "regions":regions,
    }
    return render(request, 'dashboard/customers.html',context)



@login_required(login_url="authentication")
def orders_dashboard(request):
    orders = Order.objects.all().order_by("-created")
    if "change_status" in request.POST:
        order=Order.objects.get(id=request.POST.get("id_order"))
        order.status = request.POST.get("order_status")
        order.save()
    context = {
        'title': 'orders',
        "orders": orders,
    }
    return render(request, 'dashboard/orders_dashboard.html', context)


def authentication(request):
    if request.user.is_authenticated:
        return redirect('/')
    form = AuthenticationForm()
    if request.method == 'POST':
        form = AuthenticationForm(request=request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                
                login(request, user)
                return redirect('overview')
    else:
        form = AuthenticationForm()
    context = {
        'title': 'الدخول',
        'form': form,
    }
    return render(request, 'dashboard/authentication.html', context)


def vlogout(request):
    logout(request)
    context = {
        'title': 'خروج',
    }
    return render(request, 'dashboard/logout.html', context)


# orders = Order.objects.raw(f"SELECT * FROM store_order WHERE customer_id={request.user.customer.id} ORDER BY status='تم التوصيل'")
# ci = Region.objects.all().annotate(rg=Count("customer")).order_by("-rg")
# cp = Product.objects.filter(cart__items__in=order).annotate(rg=Count("cart__product")).order_by("-rg")