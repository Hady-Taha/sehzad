# Generated by Django 4.0.1 on 2022-01-17 23:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('customer', '0003_alter_customer_region'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customer',
            name='region',
        ),
    ]