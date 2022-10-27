from django.http import HttpResponse
from django.http import JsonResponse
import base64


def load_image(name,format):
    with open(name+"."+format, "rb") as img_file:
        my_string = "data:image/"+format+";base64,"+ base64.b64encode(img_file.read()).decode('utf-8')
    return my_string


img1 = load_image("hurricaneSandy-1","jpg")
img2 = load_image("akyOc","png") 
img3 = load_image("img3","jpg")

#print( base64.b64encode(img3.read()).decode('utf-8'))

def main_view(request):
    image_data = ""
    # with open(request.POST.get('image'), "rb") as image_file:
    #     image_data = base64.b64encode(image_file.read()).decode('utf-8')
    return JsonResponse({1: [img1,img2,img3], 2: 'HEHE'})