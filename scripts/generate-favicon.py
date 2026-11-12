from pathlib import Path
import vtracer
import tempfile

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "src" / "images" / "bukana-logo.jpeg"
PUBLIC = ROOT / "public"
SVG_OUTPUT = PUBLIC / "favicon.svg"
PNG_OUTPUT = PUBLIC / "apple-touch-icon.png"

if not SOURCE.exists():
    raise SystemExit(f"School logo not found: {SOURCE}")

image = Image.open(SOURCE).convert("RGBA")
width, height = image.size

# Keep the school's distinctive star and arch emblem for small icon sizes.
left = int(width * 0.235)
top = int(height * 0.205)
right = int(width * 0.765)
bottom = int(height * 0.805)
mark = image.crop((left, top, right, bottom))

if mark.width == 0 or mark.height == 0:
    raise SystemExit("The logo emblem crop is empty; check the source logo dimensions.")

pixels = mark.load()
for y in range(mark.height):
    for x in range(mark.width):
        red, green, blue, alpha = pixels[x, y]
        if red > 238 and green > 238 and blue > 238:
            pixels[x, y] = (255, 255, 255, 0)
        else:
            pixels[x, y] = (red, green, blue, 255)

PUBLIC.mkdir(parents=True, exist_ok=True)

# Create a crisp raster companion for iOS home-screen bookmarks.
touch_size = 180
touch_icon = Image.new("RGBA", (touch_size, touch_size), (255, 255, 255, 255))
touch_mark = mark.copy()
touch_mark.thumbnail((156, 156), Image.Resampling.LANCZOS)
touch_icon.alpha_composite(touch_mark, ((touch_size - touch_mark.width) // 2, (touch_size - touch_mark.height) // 2))
touch_icon.convert("RGB").save(PNG_OUTPUT, format="PNG", optimize=True)

with tempfile.TemporaryDirectory() as temporary_directory:
    input_png = Path(temporary_directory) / "school-mark.png"
    mark.save(input_png, format="PNG", optimize=True)
    vtracer.convert_image_to_svg_py(
        str(input_png),
        str(SVG_OUTPUT),
        colormode="color",
        hierarchical="stacked",
        mode="spline",
        filter_speckle=4,
        color_precision=6,
        layer_difference=16,
        corner_threshold=60,
        length_threshold=4.0,
        max_iterations=10,
        splice_threshold=45,
    )

svg = SVG_OUTPUT.read_text(encoding="utf-8")
if "<svg" not in svg or "<path" not in svg:
    raise SystemExit("Favicon generation did not produce a vector SVG.")
if "<image" in svg:
    raise SystemExit("Favicon must contain vector paths, not an embedded raster image.")

print(f"Generated vector favicon: {SVG_OUTPUT} ({SVG_OUTPUT.stat().st_size:,} bytes)")
print(f"Generated Apple touch icon: {PNG_OUTPUT} ({PNG_OUTPUT.stat().st_size:,} bytes)")
