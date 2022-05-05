from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Order
from django.template.loader import render_to_string
import requests

