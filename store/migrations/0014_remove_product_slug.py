# Generated by Django 4.0.1 on 2022-05-04 14:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0013_remove_product_description_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='slug',
        ),
    ]
