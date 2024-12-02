from django.db import models

# Create your models here.

class Categoria(models.Model):
    nome = models.Charfield(max_length = 100)
    ordem = models.IntegerField()

    def __str__(self):
        return self.nome