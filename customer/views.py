from django.shortcuts import render
from store.models import Order
from .models import Customer
from django.contrib.auth.decorators import login_required
from .utils import customer_or_device
# Create your views here.


# @login_required
def orders(request):
    customer = Customer.objects.get(id=customer_or_device(request).id)
    orders = Order.objects.filter(customer=customer).order_by("-created")
    # orders = Order.objects.raw(f"SELECT * FROM store_order WHERE customer_id={request.user.customer.id} ORDER BY status='تم التوصيل'")
    context = {
        'title': 'orders',
        "orders": orders,
        "user_customer":customer,
    }
    return render(request, 'customer/orders.html', context)
