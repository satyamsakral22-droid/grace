import urllib.request
import os
import io
from PIL import Image, ImageChops

CLIENTS = [
  {"id": "hpcl", "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl3wyQfn7wf_0AmiTRro_a2lKzE-jiZindvEg0DH6YRg&s=10"},
  {"id": "upcl", "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL31HTMwn9lG-yW-CLg9dFKabC-RMevGTu2U2ai9l2ZA&s=10"},
  {"id": "pepsico", "url": "https://crystalpng.com/wp-content/uploads/2025/10/new-pepsico-logo.png"},
  {"id": "lnt", "url": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Larsen%26Toubro_logo.svg/1280px-Larsen%26Toubro_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail"},
  {"id": "dial", "url": "https://www.airport-suppliers.com/wp-content/uploads/2020/01/Delhi-Airport-HP-PR-Logo.jpg"},
  {"id": "apdcl", "url": "https://img-cdn.publive.online/fit-in/1200x675/filters:format(webp)/saur-energy/media/post_attachments/2022/09/news-37.jpg"},
  {"id": "sapura", "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/SapuraEnergy_Logo_Official.svg/1280px-SapuraEnergy_Logo_Official.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20200427115449"},
  {"id": "tajsats", "url": "https://media.licdn.com/dms/image/v2/C4E0BAQFX9JFKqXrzSg/company-logo_200_200/company-logo_200_200/0/1630638874526?e=2147483647&v=beta&t=2WJxOrEAB1pNUaHy_72hZNTTsCdhDxuY4q3oGi4bRnI"},
  {"id": "mankind", "url": "https://i0.wp.com/spicyip.com/wp-content/uploads/2025/08/image-34.png?resize=1024%2C560&ssl=1"},
  {"id": "westside", "url": "https://cdn.shopify.com/s/files/1/0266/6276/4597/files/w-logo_e0719a8f-d1a8-4983-acd6-9133023296d3.png?v=1784185748"},
  {"id": "modi", "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRKc2EwjMULNnmFQD_N-SBUAgipO6bU-1QrC8VtVxhWg&s=10"},
  {"id": "companycheck", "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlOPFxIXyP7roMAPFuF99AeSAfP3rOiVjz6G5zWpnXr_jgy2OxueNsKJoi&s=10"},
  {"id": "starcement", "url": "https://media.licdn.com/dms/image/v2/C560BAQE4zfLqHEp0lg/company-logo_200_200/company-logo_200_200/0/1651485938252/starcement_logo?e=2147483647&v=beta&t=ipC0DQgtDMryBwaB22esLD3gvBNhithFZa0fkflNzbg"},
  {"id": "emaar", "url": "https://1000logos.net/wp-content/uploads/2020/09/Emaar-Properties-Logo-1.png"},
  {"id": "omaxe", "url": "https://www.omaxe.com/media/images/15736259983%20(2).jpg"},
  {"id": "gardenia", "url": "https://media.licdn.com/dms/image/v2/C4E0BAQE8f5q8mYGzQg/company-logo_200_200/company-logo_200_200/0/1645040811745?e=2147483647&v=beta&t=x2ZNRYXVFhj9wV6eFlPTdLXdmcNiuCpELD52H-__fas"},
  {"id": "sikka", "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQrIm_uYcFdhHfNf1o_6aLsyTUBtF7FUbcHs4UlnxcsxB33WFNUqdy0Vo&s=10"},
  {"id": "maxblis", "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqt5CbPR76yNvqGtD6l1xlI2uRSqlom-r4FuPio4Q4J26Ua7xOMVXHT4g&s=10"},
  {"id": "hrc", "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNIQcYS0xiYZX5pPokmgpLBIqa6KuOU1cvDOCCXBtqOx3VB3JxGCG-5Jk&s=10"},
  {"id": "skg", "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRby__LNE15excdSTSMOj6Q1n7HwxVW3ETdnJEjmM5Um6IDrk2yh-0McH2n&s=10"},
  {"id": "prateek", "url": "https://prateekgroup.com/wp-content/uploads/2026/05/Prateek_group_Logo-removebg-preview-1.png"},
  {"id": "newtech", "url": "https://lagalaxia.co.in/wp-content/uploads/2025/12/WhatsApp-Image-2025-11-30-at-5.36.33-PM.jpeg"},
  {"id": "sparsh", "url": "https://www.sparshglobalschool.com/images/infobox-logo.png"}
]

PARTNERS = [
  {"id": "schneider", "url": "https://www.se.com/dam-assets/2hgFSDSuWfHGU9uzMz3I-g/FoPovHKlWpMiU0341m8gZQ/BUILDER.IO%7CSquare/se_logo_social_shared_image_004_BUILDER.IOSquare.webp"},
  {"id": "abb", "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjLrQ2d00E3MO625nNtjbLdAQ4GbEaFUvEXu83AcN4T8hZ8Wm2OEefPUSg&s=10"},
  {"id": "siemens", "url": "https://cdn.openlm.com/wp-content/uploads/2026/03/Siemens-Logo.png"},
  {"id": "havells", "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAaYAO_aDTPmv_azclFrzApbuSqEYdTl3kwkZ9QyL-H5ottT7zjyGQfBo&s=10"},
  {"id": "legrand", "url": "https://prakashelectrical.com/wp-content/uploads/2021/08/1280px-Logo_Legrand_SA.svg.png"},
  {"id": "polycab", "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-vIFZxfMI9FrJ_ZoqeBtDeG-P0ZCWswK42R6iRvJKVw&s=10"},
  {"id": "lnt_sg", "url": "https://5.imimg.com/data5/SELLER/Default/2023/12/370523274/UK/XA/NB/48913722/l-and-t-switchgears-500x500.jpg"},
  {"id": "eaton", "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpsCFJ2cl0YsCTuO-A_HlRZQzLf3a-rIZt2TWsEHUESYGm04yI19f6mAw&s=10"}
]

os.makedirs("public/logos/clients", exist_ok=True)
os.makedirs("public/logos/partners", exist_ok=True)

def trim_image(im):
    # Convert to RGBA
    im = im.convert("RGBA")
    
    # Check corners to determine background color
    corners = [im.getpixel((0, 0)), im.getpixel((im.width - 1, 0)), im.getpixel((0, im.height - 1)), im.getpixel((im.width - 1, im.height - 1))]
    
    # Check if mostly transparent
    if all(c[3] < 10 for c in corners):
        # Trim transparent background
        alpha = im.split()[-1]
        bbox = alpha.getbbox()
        if bbox:
            w, h = im.size
            l, t, r, b = bbox
            pad = 8
            l = max(0, l - pad)
            t = max(0, t - pad)
            r = min(w, r + pad)
            b = min(h, b + pad)
            return im.crop((l, t, r, b))
        return im

    # Check if white or near-white background
    is_white_bg = all(c[0] > 235 and c[1] > 235 and c[2] > 235 for c in corners)
    if is_white_bg:
        # Create difference with white image
        bg = Image.new("RGB", im.size, (255, 255, 255))
        diff = ImageChops.difference(im.convert("RGB"), bg)
        # Threshold diff
        diff = ImageChops.add(diff, diff, 2.0, -10)
        bbox = diff.getbbox()
        if bbox:
            w, h = im.size
            l, t, r, b = bbox
            pad = 8
            l = max(0, l - pad)
            t = max(0, t - pad)
            r = min(w, r + pad)
            b = min(h, b + pad)
            # Make background transparent
            cropped = im.crop((l, t, r, b))
            # make near white pixels transparent
            datas = cropped.getdata()
            new_data = []
            for item in datas:
                if item[0] > 245 and item[1] > 245 and item[2] > 245:
                    new_data.append((255, 255, 255, 0))
                else:
                    new_data.append(item)
            cropped.putdata(new_data)
            return cropped
            
    return im

import ssl
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

def process_item(item, folder):
    dest = f"public/logos/{folder}/{item['id']}.png"
    if os.path.exists(dest) and os.path.getsize(dest) > 1000 and item['id'] not in ['dial', 'mankind', 'schneider']:
        print(f"Already exists: {dest}")
        return
    print(f"Downloading {item['id']} from {item['url']}...")
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
            'Referer': 'https://www.google.com/'
        }
        req = urllib.request.Request(item['url'], headers=headers)
        with urllib.request.urlopen(req, timeout=15, context=ctx) as resp:
            data = resp.read()
        im = Image.open(io.BytesIO(data))
        trimmed = trim_image(im)
        trimmed.save(dest, "PNG")
        print(f"Saved {dest}: original {im.size} -> trimmed {trimmed.size}")
    except Exception as e:
        print(f"Failed {item['id']}: {e}")

print("Processing clients...")
for item in CLIENTS:
    process_item(item, "clients")

print("\nProcessing partners...")
for item in PARTNERS:
    process_item(item, "partners")
