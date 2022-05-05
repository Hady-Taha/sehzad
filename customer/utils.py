from customer.models import Customer


def customer_or_device(request):
    device = request.COOKIES.get('device')
    if Customer.objects.filter(device=device).exists():
        customer=Customer.objects.get(device=device)
    else:
        customer = Customer.objects.create(device=device)
    return customer
