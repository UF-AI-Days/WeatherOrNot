from django.http import HttpResponse
from django.http import JsonResponse
import base64
from middleware.main import spatial_diffusion_inpainting


# def load_image(name,format):
#     with open(name+"."+format, "rb") as img_file:
#         my_string = "data:image/"+format+";base64,"+ base64.b64encode(img_file.read()).decode('utf-8')
#     return my_string


# img1 = load_image("hurricaneSandy-1","jpg")
# img2 = load_image("akyOc","png") 
# img3 = load_image("img3","jpg")

def main_view(request):
    image_data = ""
    img_list = spatial_diffusion_inpainting('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', request.POST.get('Scenario'), request.POST.get('Image'))
    return JsonResponse({1: [img_list[0][0][0],img_list[1][0][0],img_list[2][0][0]],img_list[3][0][0] 2: 'HEHE'})
