# Hamidah's Portfolio: Page 1 (the box) and Page 2 (the museum)

## Open it
Keep ALL files together in one folder. Double-click `index.html` (or use Live Server in VS Code).
Page 1 is `index.html`. The "know about my culture!" button in the letter opens page 2, `culture.html`.
Page 2's "Return to my box" buttons go back to `index.html`.

## Files (HTML, CSS and JS are separate)
| Page 1 | Page 2 |
|---|---|
| index.html | culture.html |
| styles.css | culture.css |
| script.js | culture.js |

Text, photo names, captions, credits and links are in the CONFIG block at the top of `script.js` and `culture.js`.

## Folders
- assets/albums/ : album covers (page 1)
- assets/audio/ : songs, supernatural.mp3 (background music), kulintang.mp3
- assets/video/ : kulintang.mp4
- assets/photos/ : hamidah.jpg (About Me photo)
- assets/achievements/ : certificate and award photos (page 1)
- assets/culture/ : all page 2 pictures

## Replace a picture
Save the new file in the same folder with the same name, or change the name in the config.
Page 2 photo names are listed in culture.js (`img: '...'`). 

## Replace the lobby background photo (page 2)
Put a picture at assets/culture/hero.jpg, or edit `--hero-photo` at the top of culture.css.

## Background music (page 1)
Set in `BG_MUSIC` in script.js. It starts when the page opens (or on the first click if the browser blocks it),
pauses when you open an album, and resumes when you close it. The "Music" button turns it on or off.

## Certificate and award photos (page 1)
Edit `EDUCATION_PHOTOS` and `ACHIEVEMENT_PHOTOS` in script.js. Visitors can click a photo to enlarge it.

## Items still to write (shown with a dashed red outline)
Your own notes, and personal notes in section 6.

## Credits
Pictures, audio and video were gathered for this school project.
