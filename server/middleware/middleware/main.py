import base64
import requests
import PIL
from PIL import Image
from io import BytesIO
import io
from torch import autocast
import torch
from diffusers import StableDiffusionInpaintPipeline as StableDiffusionInpaintPipeline

def download_image(url):
    response = requests.get(url)
    return PIL.Image.open(BytesIO(response.content)).convert("RGB")


# Currently takes in image url. transform into image in function
def spatial_diffusion_inpainting(TOKEN,scenario,image):
    # Determine Prompts
    if scenario == "Water":
        prompt_1 = "rain,wind, dark skies, flooding, no people"
        prompt_2 = "flooding,water, thunder storm,hurricane, destruction, no people"
        prompt_3 = "flooding everywhere,water, thunder storm,heavy intense rain, hurricane conditions, destruction, disastor, completec chaos, no people"
        prompt_4 = "extreme flooding and damge, destroyed infrastrucure, severe flooding, houses destroyed, building destroyed, destruction, flooding everywhere, houses blown away, chaos, dark skies, thunder storms, dark clouds"
    elif scenario == "Fire":
        prompt_1 = "smoke in sky, building on fire,flame, destruction,no people"
        prompt_2 = "fire destroying buildings, smoke in sky, no people, fire, buildings on fire, flame, building and infrustucture on fire"
        prompt_3 = "smoke in sky, no people, fire, building and infrustucture on fire, distruction, disastor, fire everywhere, chaos"
        prompt_4 = "smoke in sky, no people, fire, building and infrustucture on fire, distruction, disastor, fire everywhere, chaos, burnt, black, charcoal, flames, wildfire"
    elif scenario == "Desert":
        prompt_1 = "drougts, deserts, no water, fire, more sand, no people"
        prompt_2 = "fire destroying buildings, smoke in sky, no people, fire, buildings on fire, flame, building and infrustucture on fire, no people"
        prompt_3 = "sand everwhere, drought, no water, deserted no people, dry and arid,fire destroying buildings, smoke in sky, no people, fire, buildings on fire, flame, building and infrustucture on fire, no people"
        prompt_4 = "sand everwhere, drought, no water, deserted no people, dry and arid,fire destroying buildings, smoke in sky, no people, fire, buildings on fire, flame, building and infrustucture on fire, no people, post apoctalyptic, end of the world"
    prompt_list = [prompt_1,prompt_2,prompt_3,prompt_4]
    intensity = [0.15,0.3,0.5,0.55]
    
    #Mask
    mask_url = "https://www.landfx.com/images/docs/kb/installation-errors/4019/blank%20welcome.PNG"
    #init_image = download_image(image).resize((512, 512))
    init_image = PIL.Image.open(BytesIO(base64.b64decode(image))).convert("RGB").resize((512, 512))
    mask_image = download_image(mask_url).resize((512, 512))
    
    
    device = "cuda"
    pipe = StableDiffusionInpaintPipeline.from_pretrained(
        "CompVis/stable-diffusion-v1-4",
        revision="fp16", 
        torch_dtype=torch.float16,
        use_auth_token=TOKEN,
    ).to(device)
    
    
    images_list = []
    for i in range(len(prompt_list)):
      with autocast("cuda"):
          image = pipe(prompt= prompt_list[i], init_image=init_image, mask_image=mask_image, strength=intensity[i])
          images_list.append(image)
        
    return images_list

