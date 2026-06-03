from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "assets" / "extracted-pdf"
CATALOG = SRC / "catalog.tsv"


def main() -> None:
    rows = ["file\twidth\theight\tmode\tbytes"]

    for path in sorted(SRC.iterdir()):
        if not path.is_file() or path.name == CATALOG.name:
            continue
        try:
            with Image.open(path) as image:
                rows.append(f"{path.name}\t{image.width}\t{image.height}\t{image.mode}\t{path.stat().st_size}")
        except Exception as exc:
            rows.append(f"{path.name}\tERROR\tERROR\t{type(exc).__name__}\t{path.stat().st_size}")

    CATALOG.write_text("\n".join(rows), encoding="utf-8")
    print(CATALOG)


if __name__ == "__main__":
    main()
