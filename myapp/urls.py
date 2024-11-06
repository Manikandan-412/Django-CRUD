# myapp/urls.py
from django.urls import path
from .views import BookList, BookDetail,PersonDetail,PersonList
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('books/', BookList.as_view(), name='book-list'),
    path('books/<int:pk>/', BookDetail.as_view(), name='book-detail'),
    path('person/', PersonList.as_view(), name='person-list'),
    path('person/<int:pk>/', PersonDetail.as_view(), name='person-detail'),
]