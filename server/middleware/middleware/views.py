from django.http import HttpResponse
from django.http import JsonResponse
import base64



def main_view(request):
    image_data = ""
    # with open(request.POST.get('image'), "rb") as image_file:
    #     image_data = base64.b64encode(image_file.read()).decode('utf-8')
    return JsonResponse({1: request.POST.get('image'), 2: 'HEHE'})