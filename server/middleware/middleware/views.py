from django.http import HttpResponse
import base64

def main_view(request):
    image_data = ""
    with open(request.image, "rb") as image_file:
        image_data = base64.b64encode(image_file.read()).decode('utf-8')
    return HttpResponse(image_data)