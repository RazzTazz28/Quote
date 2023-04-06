from django.urls import path
from . import views

urlpatterns = [
    path('comments_url/', views.add_comment, name='comments_url'),
    path('delete_comment_url/', views.delete_comment, name='delete_comment_url'),
]

