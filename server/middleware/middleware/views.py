from django.http import HttpResponse
from django.http import JsonResponse
import base64
import PIL
from PIL import Image
from io import BytesIO
import io
from middleware.main import spatial_diffusion_inpainting


def load_image(name,format):
    with open(name+"."+format, "rb") as img_file:
        my_string = "data:image/"+format+";base64,"+ base64.b64encode(img_file.read()).decode('utf-8')
    return my_string

def format_img(image,format):
    buffered = BytesIO()
    image.save(buffered, format="JPEG")
    my_string = "data:image/"+format+";base64,"+ base64.b64encode(buffered.getvalue()).decode('utf-8')
    return my_string

def ll(name):
    with open(name, "rb") as img_file:
         my_string =  base64.b64encode(img_file.read())
    return my_string

# img1 = load_image("hurricaneSandy-1","jpg")
# img2 = load_image("akyOc","png") 
# img3 = load_image("img3","jpg")

#request.POST.get('Scenario')
# request.POST.get('Image')

def main_view(request):
    img1 = request.POST.get('Image')
    img_list = spatial_diffusion_inpainting('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', 'Fire', img1)
    return JsonResponse({1: [format_img(img_list[0][0][0], 'PNG'), format_img(img_list[1][0][0], 'PNG'), format_img(img_list[2][0][0], 'PNG'), format_img(img_list[3][0][0], 'PNG')], 2: 'HEHE'})
    # image_data = ""
    # img_list = spatial_diffusion_inpainting('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', request.POST.get('Scenario'), request.POST.get('Image'))
    # return JsonResponse({1: [img_list[0][0][0],img_list[1][0][0],img_list[2][0][0],img_list[3][0][0]], 2: 'HEHE'})
    # return JsonResponse({1: [request.POST.get('Image'),img1, img2, img3], 2: 'HEHE'})
