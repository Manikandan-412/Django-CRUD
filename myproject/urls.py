from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('',include('myapp.urls')),
    path('api/',include('myapp.urls')),
    path('admin/', admin.site.urls),
]