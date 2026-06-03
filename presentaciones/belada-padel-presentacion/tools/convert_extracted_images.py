from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "assets" / "extracted-pdf"
OUT = SRC / "converted"


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    converted = 0

    for path in sorted(SRC.iterdir()):
        if path.suffix.lower() not in {".jp2", ".jpx", ".j2k"}:
            continue
        try:
            with Image.open(path) as image:
                if image.width < 300 or image.height < 200:
                    continue
                rgb = image.convert("RGB")
                target = OUT / f"{path.stem}.jpg"
                rgb.save(target, quality=88, optimize=True)
                converted += 1
                print(target)
        except Exception as exc:
            print(f"SKIP {path.name}: {exc}")

    print(f"Converted {converted} images to {OUT}")


if __name__ == "__main__":
    main()
