from django.http import HttpResponse
from django.http import JsonResponse
import base64
from middleware.main import spatial_diffusion_inpainting

def main_view(request):
    image_data = ""
    #change with request.POST.get('Token') when implemented
    #return JsonResponse(spatial_diffusion_inpainting('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', request.POST.get('Scenario'), request.POST.get('Image')))
    img_list = spatial_diffusion_inpainting('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', request.POST.get('Scenario'), request.POST.get('Image'))
    return JsonResponse({'img1': img_list[0][0][0], 'img1': img_list[0][0][1], 'img1': img_list[0][0][2]})