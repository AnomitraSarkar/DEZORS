from PIL import Image, ImageDraw, ImageFont

# Load the generated image
image_path = "/mnt/data/A_professional_banner_image_for_a_consultancy_serv.png"
image = Image.open(image_path)

# Set up drawing context and font
draw = ImageDraw.Draw(image)
font_path = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"  # Default font path
font_size = 100
font = ImageFont.truetype(font_path, font_size)

# Text to add
text = "Dezors"
text_color = (0, 85, 170)  # Calming blue to match the image theme
position = (image.width // 2, image.height - 150)  # Center bottom position

# Calculate text size and adjust position for centering
text_width, text_height = draw.textsize(text, font=font)
position = (image.width // 2 - text_width // 2, image.height - text_height - 50)

# Add the text
draw.text(position, text, font=font, fill=text_color)

# Save the modified image
output_path = "/mnt/data/Dezors_banner_with_text.png"
image.save(output_path)
output_path
