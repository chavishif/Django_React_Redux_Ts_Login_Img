from . import views
from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('index/',views.index ),
    path('private/',views.private ),
    path('product/', views.ProductView.as_view()),
    path('product/<pk>', views.ProductView.as_view()),
    path('gallery/', views.GalleryView.as_view()),
    path('gallery/<pk>', views.GalleryView.as_view()),
    path('login/', views.MyTokenObtainPairView.as_view()),

]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
