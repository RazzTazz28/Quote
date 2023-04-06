from django.urls import path
from . import views

urlpatterns = [
    path('', views.story, name='story'),
    path('quote_url/', views.quote, name='quote'),
    path('quotes_url/', views.quotes, name='quotes')
]
