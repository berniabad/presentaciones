from pathlib import Path

from pypdf import PdfReader


ROOT = Path(__file__).resolve().parents[1]
PDF = ROOT.parent / "BELADA DE PADEL - HTML.pdf"
OUT = ROOT / "assets" / "extracted-pdf"


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    reader = PdfReader(str(PDF))
    count = 0

    for page_index, page in enumerate(reader.pages, start=1):
        for image_index, image in enumerate(page.images, start=1):
            count += 1
            suffix = Path(image.name).suffix or ".bin"
            name = f"page-{page_index:02d}-image-{image_index:02d}{suffix.lower()}"
            target = OUT / name
            target.write_bytes(image.data)
            print(target)

    print(f"Extracted {count} images to {OUT}")


if __name__ == "__main__":
    main()
