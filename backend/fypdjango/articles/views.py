from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.

def testingReact(request):
    return HttpResponse("Testing page")
#  return render(request,'testpage.html')
