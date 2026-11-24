# List Manager Frontend

A simple **Next.js** application that lets you manage a list of items – add new items and delete existing ones.

## Project Structure
```
frontend/
├─ pages/
│  └─ index.js        # Main page with list UI
├─ package.json        # Project metadata and dependencies
├─ README.md           # This file
└─ .gitignore          # Ignored files for Git
```

## Development
```bash
# Install dependencies
npm install

# Run locally
npm run dev
```
Open http://localhost:3000 in your browser.

## Deploy to Vercel
1. **Push to a Git repository** (GitHub, GitLab, or Bitbucket).
2. Go to the [Vercel dashboard](https://vercel.com/dashboard) and click **"New Project"**.
3. Import the repository and accept the default settings (Vercel detects the Next.js framework automatically).
4. Click **"Deploy"**. Vercel will run `npm install` and `npm run build`.
5. Once the deployment finishes, you get a live URL like `https://list-manager-frontend.vercel.app`.

Alternatively, you can deploy directly from the CLI:
```bash
npm i -g vercel   # install Vercel CLI
vercel login       # authenticate
vercel             # run deployment wizard
```
Follow the prompts, and Vercel will create and deploy the project.

## Customisation
- Modify `pages/index.js` to change the UI or add features.
- Update `package.json` to add more dependencies.

Enjoy managing your list!
