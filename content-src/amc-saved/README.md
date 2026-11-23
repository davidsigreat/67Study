# AMC pages saved from the AoPS wiki

AoPS blocks download scripts, so tests are added by saving their pages in a browser.
The **AMC Question Bank** page in the app (`/math-team/amc` → "Add tests") lists every
test with both links and shows ✓ for the ones already imported.

For each test, save **two** pages into this folder (`content-src/amc-saved/`):

1. **Problems** page, e.g. `2023 AMC 12A Problems`
   → Ctrl+S → "Save as type: **Webpage, Complete**" (keeps the diagrams).
2. **Answer Key** page, e.g. `2023 AMC 12A Answer Key`
   → Ctrl+S (either type is fine).

Keep the browser's default file names (e.g. `2023 AMC 12A Problems - AoPS Wiki.html`
and its `…_files` folder). Then commit and push this folder; `npm run amc:build`
turns the pages into the bank (`src/data/amc/bank/`).
