# Render Deployment Guide - Corvay Technologies

## Quick Deploy to Render

### Prerequisites
- GitHub account with the repository pushed
- Render account (sign up at https://render.com)

### Deployment Steps

1. **Connect to Render**
   - Go to https://render.com/
   - Click "Get Started" or "Sign In"
   - Sign in with your GitHub account

2. **Create New Static Site**
   - Click "New +" button
   - Select "Static Site"
   - Connect your GitHub repository: `corvay-technologies`

3. **Configure Build Settings**
   
   Render will auto-detect the `render.yaml` file with these settings:
   
   - **Name**: `corvay-technologies`
   - **Branch**: `main`
   - **Build Command**: `npm ci && npm run build:prod`
   - **Publish Directory**: `dist/corvay-technologies/browser`
   - **Auto-Deploy**: Yes (enabled by default)

4. **Environment Variables** (Already configured in render.yaml)
   - `NODE_VERSION`: 20
   - `NODE_ENV`: production

5. **Deploy**
   - Click "Create Static Site"
   - Render will automatically start building your application
   - Build time: ~2-3 minutes
   - Once complete, your site will be live!

### Your Deployment URL
Your site will be available at:
- `https://corvay-technologies.onrender.com` (or similar)
- You can add a custom domain later in Render settings

### Automatic Deployments
Every time you push to the `main` branch on GitHub, Render will automatically:
1. Detect the changes
2. Run the build process
3. Deploy the new version

### Build Configuration Details

#### render.yaml
```yaml
services:
  - type: web
    name: corvay-technologies
    env: static
    buildCommand: npm ci && npm run build:prod
    staticPublishPath: dist/corvay-technologies/browser
```

#### Routes Configuration
All routes are rewritten to `/index.html` for Angular routing to work:
```yaml
routes:
  - type: rewrite
    source: /*
    destination: /index.html
```

#### Caching Headers
- HTML files: No cache (always fresh)
- Assets: 1 year cache (immutable)

### Manual Deployment (Alternative)

If you prefer to deploy manually:

```bash
# 1. Build the project locally
npm ci
npm run build:prod

# 2. The output will be in:
dist/corvay-technologies/browser/

# 3. Upload this folder to Render via their dashboard
```

### Troubleshooting

**Build fails?**
- Check Node version (should be 20)
- Verify all dependencies are in package.json
- Check build logs in Render dashboard

**Routes not working?**
- Ensure `_redirects` file exists
- Verify render.yaml has correct rewrite rules

**Blank page after deploy?**
- Check browser console for errors
- Verify build output directory path
- Check that base href is set correctly

### Testing Before Deploy

Test production build locally:
```bash
npm run build:prod
cd dist/corvay-technologies/browser
npx http-server -p 8080
```

Visit http://localhost:8080 to preview

### Post-Deployment Checklist

✅ Site loads correctly  
✅ All routes work (Home, Products, About, Contact)  
✅ Products dropdown functions properly  
✅ Mobile responsive design works  
✅ Footer displays correct year  
✅ External product links work (SaaS-Connect, Ecolytix)  
✅ Contact form validates properly  

### Custom Domain Setup (Optional)

1. Go to your site settings in Render
2. Click "Custom Domain"
3. Add your domain (e.g., corvaytechnologies.com)
4. Update DNS records as instructed
5. Render provides free SSL certificates

### Support

- Render Documentation: https://render.com/docs
- Render Status: https://status.render.com
- GitHub Repo: https://github.com/Adeyemi987/corvay-technologies

### Estimated Costs

- **Free Tier**: Perfect for this static site
  - 100 GB bandwidth/month
  - Global CDN included
  - Automatic SSL
  - No credit card required

---

## Quick Commands

```bash
# Local development
npm start

# Production build
npm run build:prod

# Test production build locally
npx http-server dist/corvay-technologies/browser

# Push changes (auto-deploys)
git add .
git commit -m "Your changes"
git push origin main
```

Your Corvay Technologies site is ready for deployment! 🚀
