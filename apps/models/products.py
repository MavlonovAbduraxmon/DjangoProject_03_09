from django.db.models import CharField, FloatField, TextField, ForeignKey, CASCADE, ImageField

from apps.models.base import UUIDBaseModel, CreatedBaseModel


class Product(UUIDBaseModel, CreatedBaseModel):
    name = CharField(max_length=255)
    price = FloatField()
    discount_price = FloatField(blank=True, null=True)
    # slug = SlugField(unique=True, editable=False)
    description = TextField()

    class Meta:
        ordering = ['-created_at']

    # def save(self, force_insert=False, force_update= False, using=None, update_fields=None):
    #     self.slug = slugify(self.name)
    #     super().save(force_insert, force_update, using, update_fields)


    def __str__(self):
        return self.name

    @property
    def image_count(self):
        return self.images.count()


    @property
    def first_image(self):
        image = self.images.first()
        if image:
            return image.image.url
        return None

class ProductImage(UUIDBaseModel):
    product = ForeignKey('apps.Product', CASCADE, related_name='images')
    image = ImageField(upload_to='images/%Y/%m/%d')





