# Ahmad Dzaki — Next.js Portfolio

A premium responsive portfolio built with Next.js, TypeScript, React, and Lucide React.

## Run in VS Code (Windows)
1. Install Node.js 20.9+.
2. Open this folder in VS Code.
3. Open **Terminal → New Terminal**.
4. Run:
   `npm install`
5. Run:
   `npm run dev`
6. Open `http://localhost:3000`.

If `.next` was created by a previous failed run, you can safely delete the `.next` folder and run `npm run dev` again.

## Production test
Run:
`npm run build`

Then:
`npm start`

## Deploy to Vercel
Push the project to GitHub, import the repository into Vercel, and deploy. Vercel detects Next.js automatically.

## CV
The Download CV button expects:
`public/Ahmad-Dzaki-CV.pdf`

### Profile photo
The hero section uses `public/profile-photo.png`. Replace that file with another portrait using the same filename if you want to change the photo later.


## Latest visual updates

- Home portrait is frameless, transparent, and uses an interactive 3D floating/tilt effect when the cursor approaches the photo.
- LinkedIn, Gmail/email, and Instagram marks use recognizable brand shapes/colors.
- The About section no longer displays the “2 Engineering Internships” fact.
- The primary interface blue is unified with the Home accent blue (`#1d8cff`), while dark blue section backgrounds follow the Home hero palette.
- Project screenshots can be added in `public/projects/` and referenced from the `images` array for each project in `components/Portfolio.tsx`.
