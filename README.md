# P2P Website — Deploy to GitHub + Vercel

## What's in this folder
- `index.html` — Home (now embeds the product video via Vimeo, no local video file needed)
- `platform.html`, `pricing.html`, `customers.html`, `readiness.html`, `about.html`, `signin.html`
- Shared component files: `site-chrome.jsx`, `site-ui.jsx`, `site-sections.jsx`, `site-onepager.jsx`, `modern-marks.jsx`, plus one `*-app.jsx` per page

No build step. Pages load React + Babel from unpkg's CDN and transpile the `.jsx` files in the browser at page load.

## 1. Create a GitHub account (skip if you have one)
Go to github.com → Sign up.

## 2. Create a repository
- Click **+** (top right) → **New repository**
- Name it `p2p-website`, keep it **Public**
- Don't check "Add a README"
- Click **Create repository**

## 3. Upload the files
- On the empty repo page, click **"uploading an existing file"**
- Drag in everything from this folder (all `.html` and `.jsx` files)
- Click **Commit changes**

## 4. Deploy with Vercel
- Go to vercel.com → **Sign Up** → **Continue with GitHub**
- Click **Add New...** → **Project**
- Find `p2p-website` in the list → **Import**
- Leave all settings as-is → click **Deploy**
- Wait ~30–60 seconds for your live URL (e.g. `p2p-website.vercel.app`)

## 5. Check it works
Click through all 7 pages. On the homepage, confirm the Vimeo video loads and plays.
