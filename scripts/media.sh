#!/usr/bin/env bash
# Copie et encode les médias des projets voisins vers src/assets.
# Relancer après une mise à jour des captures : `npm run media`.
set -euo pipefail
P="$HOME/Documents/Development/Perso"
A="$(cd "$(dirname "$0")/.." && pwd)/src/assets"
mkdir -p "$A"/{mio,shelltown,fastflix,video}

enc() { # enc <src> <dest-basename> <width> — H.264 lu partout ; l'AV1 testé pesait plus lourd sur ces films
  local src="$1" out="$A/video/$2.mp4" w="$3"
  ffmpeg -v error -y -i "$src" -an -vf "scale=${w}:-2:flags=lanczos,fps=30" \
    -c:v libx264 -preset veryslow -crf 28 -pix_fmt yuv420p -profile:v high -movflags +faststart "$out"
  # Garde la source si elle est déjà plus légère (les films Shelltown sont déjà optimisés)
  if [ "$(stat -f%z "$src")" -lt "$(stat -f%z "$out")" ] && [ "$(ffprobe -v error -select_streams v -show_entries stream=width -of csv=p=0 "$src")" = "$w" ]; then cp "$src" "$out"; fi
}

# Shelltown : films du site (bureau en activité, zoom jusqu'à Manhattan)
enc "$P/shelltown/site/media/hero-en.mp4" shelltown-office 1080
enc "$P/shelltown/site/media/zoom-en.mp4" shelltown-zoom 960
cp "$P/shelltown/site/media/hero-en.webp" "$A/shelltown/office-poster.webp"
cp "$P/shelltown/site/media/zoom-en.webp" "$A/shelltown/zoom-poster.webp"
cp "$P/shelltown/site/media/cli-en@2x.webp" "$A/shelltown/cli.webp"
cp "$P/shelltown/site/media/meeting-en@2x.webp" "$A/shelltown/meeting.webp"
cp "$P/shelltown/site/media/app-icon.png" "$A/shelltown/icon.png"

# Mio : captures de l'app 3.8, icône, et un Reel produit par mio-studio
for s in today talk quiz lesson; do cp "$P/mio/website/public/mobile_screenshots/$s-3-8.png" "$A/mio/$s.png"; done
cp "$P/mio/mio/assets/app-icons/classic-1024.png" "$A/mio/icon.png"
# Boucle de 10 s tirée du Reel « Come on! » (W47, @miotutor.en), fondu de raccord pour une boucle sans saut
REEL="$HOME/Desktop/Mio W47-W48/en/W47/01-lun-come-on.mp4"
if [ -f "$REEL" ]; then
  ffmpeg -v error -y -i "$REEL" -filter_complex "[0:v]fps=30,scale=540:-2:flags=lanczos,split[a][b];[a]trim=0.5:10.4,setpts=PTS-STARTPTS[main];[b]trim=0:0.5,setpts=PTS-STARTPTS[head];[main][head]xfade=transition=fade:duration=0.5:offset=9.4,format=yuv420p[o]" \
    -map "[o]" -an -c:v libx264 -preset veryslow -crf 27 -profile:v high -movflags +faststart "$A/video/mio-reel.mp4"
  ffmpeg -v error -y -ss 2.6 -i "$REEL" -frames:v 1 -vf scale=540:-2 -q:v 3 "$A/mio/reel-poster.jpg"
fi

# FastFlix : capture du fil pour le hero, icône. La démo vidéo (src/assets/video/fastflix-demo.mp4)
# a été enregistrée à la main dans le simulateur iOS (simctl io recordVideo) puis montée avec ffmpeg.
cp "$P/fastflix/website/screenshots-source/iphone/01-feed.png" "$A/fastflix/feed.png"
cp "$P/fastflix/frontend/assets/appstore.png" "$A/fastflix/icon.png"

ls -la "$A"/video
