from django.urls import path
from . import views

urlpatterns = [
    path('overview', views.overview, name="overview"),
    path('add_product', views.add_product, name="add_product"),
    path('product_details/<int:id>/', views.product_details, name="product_details"),
    path('add_category', views.add_category, name="add_category"),
    path('category_details/<int:id>', views.category_details, name="category_details"),
    path('customers', views.customers, name="customers"),
    path('orders_dashboard', views.orders_dashboard, name="orders_dashboard"),
    path('authentication', views.authentication, name="authentication"),
    path('logout', views.vlogout, name="logout"),
]


