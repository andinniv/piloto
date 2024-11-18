from django.shortcuts import render

# Create your views here.
from django .http import HttpResponse

def index(request):
    return render(request,'index.html')

def sobre(request):
    return render(request,'sobre.html')
def contato(request):
    return render(request,'contato.html')
def ajuda(request):
    return render(request,'ajuda.html')
def exibir_item(request,id):
    return render(request,'exibir_item.html',{'id':id})
def perfil(request,usuario):
    return render(request, 'perfil.html', {'usuario': usuario})
def cadweb(request):
    return render(request,'cadweb.html',)
def dia_da_semana(request, numero):
    dias = {
        1: 'Segunda-feira',
        2: 'Terça-feira',
        3: 'Quarta-feira',
        4: 'Quinta-feira',
        5: 'Sexta-feira',
        6: 'Sábado',
        7: 'Domingo'
    }
    dia = dias[numero]
    return render(request, 'dia_da_semana.html', {'numero': numero, 'dia': dia})