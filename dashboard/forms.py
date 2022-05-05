from django import forms
from store.models import Product,Category
from customer.models import Region

class ProductForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = ("title","category","price","discount","start","stock")

class CategoryForm(forms.ModelForm):

    class Meta:
        model = Category
        fields = ('title',)


class RegionForm(forms.ModelForm):
    class Meta:
        model = Region
        fields = ('region', "price",)

