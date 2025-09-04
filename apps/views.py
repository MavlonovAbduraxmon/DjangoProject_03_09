from django.views.generic import TemplateView, ListView, DetailView

from apps.models import Product


class ProductListView(ListView):
    queryset = Product.objects.all()
    template_name = 'apps/products/product-list.html'
    context_object_name = 'products'
    paginate_by = 35

class ProductDetailView(DetailView):
    queryset = Product.objects.all()
    template_name = 'apps/products/product-details.html'
    context_object_name = 'products'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['latest_product'] = Product.objects.all()[:3]
        return context