from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
SOURCES = [
    ROOT / "assets" / "extracted-pdf",
    ROOT / "assets" / "extracted-pdf" / "converted",
]
OUT = ROOT / "assets" / "extracted-pdf" / "contact-sheet.jpg"


def image_paths():
    seen = set()
    for folder in SOURCES:
        for path in sorted(folder.iterdir()):
            if path.suffix.lower() not in {".jpg", ".jpeg", ".png"}:
                continue
            if path.name in {"contact-sheet.jpg"}:
                continue
            key = path.name
            if key in seen:
                continue
            seen.add(key)
            yield path


def main() -> None:
    paths = list(image_paths())
    tile_w, tile_h = 260, 190
    label_h = 38
    cols = 5
    rows = (len(paths) + cols - 1) // cols
    sheet = Image.new("RGB", (cols * tile_w, rows * (tile_h + label_h)), "#101827")
    draw = ImageDraw.Draw(sheet)
    font = ImageFont.load_default()

    for idx, path in enumerate(paths):
        x = (idx % cols) * tile_w
        y = (idx // cols) * (tile_h + label_h)
        try:
            with Image.open(path) as image:
                thumb = image.convert("RGB")
                thumb.thumbnail((tile_w, tile_h), Image.Resampling.LANCZOS)
                tx = x + (tile_w - thumb.width) // 2
                ty = y + (tile_h - thumb.height) // 2
                sheet.paste(thumb, (tx, ty))
        except Exception:
            pass
        draw.text((x + 8, y + tile_h + 6), path.name[:34], fill="#d7e3ff", font=font)

    sheet.save(OUT, quality=90)
    print(OUT)


if __name__ == "__main__":
    main()
