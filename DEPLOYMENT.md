# Deployment Guide - Corvay Technologies Landing Page

This guide walks you through deploying the Corvay Technologies landing page to Render.

## Prerequisites

- GitHub account
- Render account (free tier available)
- Git installed locally

## Step 1: Prepare Your Repository

### Initialize Git (if not already done)

```bash
cd /Users/mac/Desktop/Yemi_startup/corvay-technologies
git init
git add .
git commit -m "Initial commit - Corvay Technologies landing page"
```

### Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click "New Repository"
3. Name it: `corvay-technologies-landing`
4. Keep it public or private (your choice)
5. Do NOT initialize with README (we already have one)
6. Click "Create Repository"

### Push to GitHub

```bash
# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/corvay-technologies-landing.git

# Push your code
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Render

### Option A: Using Render Dashboard

1. **Log in to Render**
   - Go to [render.com](https://render.com)
   - Sign in or create account

2. **Create New Static Site**
   - Click "New +" button
   - Select "Static Site"
   - Connect your GitHub account (if not already connected)
   - Select the `corvay-technologies-landing` repository

3. **Configure Build Settings**
   - **Name**: `corvay-technologies`
   - **Branch**: `main`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist/corvay-technologies/browser`

4. **Advanced Settings** (optional)
   - Set environment variables if needed:
     - `NODE_VERSION`: `18.17.0`

5. **Deploy**
   - Click "Create Static Site"
   - Render will automatically build and deploy your site
   - Your site will be available at: `https://corvay-technologies.onrender.com`

### Option B: Using render.yaml (Infrastructure as Code)

The project includes a `render.yaml` file for automatic deployment:

1. **Connect Repository**
   - Go to Render Dashboard
   - Click "New +" → "Blueprint"
   - Connect your GitHub repository
   - Render will automatically detect `render.yaml`

2. **Review Configuration**
   - Verify the settings from `render.yaml`
   - Click "Apply"

3. **Deploy**
   - Render will build and deploy automatically
   - Check deployment logs for any issues

## Step 3: Custom Domain Setup (Optional)

### Using Render's Custom Domain Feature

1. **Go to Site Settings**
   - Click on your deployed site
   - Navigate to "Settings" → "Custom Domains"

2. **Add Custom Domain**
   - Click "Add Custom Domain"
   - Enter: `www.corvaytechnologies.com` or `corvaytechnologies.com`

3. **Configure DNS**
   - Go to your domain registrar (e.g., Namecheap, GoDaddy)
   - Add DNS records as shown by Render:
     - **Type**: CNAME
     - **Name**: www (or @)
     - **Value**: Your Render site URL

4. **Enable SSL**
   - Render automatically provisions SSL certificates
   - Wait for DNS propagation (can take up to 48 hours)

## Step 4: Verify Deployment

### Check These Items:

- ✅ Site loads at provided Render URL
- ✅ All sections visible and functional
- ✅ Navigation works (including mobile menu)
- ✅ Smooth scrolling to sections
- ✅ Contact form displays correctly
- ✅ Product links open in new tabs
- ✅ Footer links work properly
- ✅ Responsive on mobile, tablet, and desktop
- ✅ No console errors in browser DevTools

### Test Checklist:

```bash
# Check homepage
https://your-site.onrender.com

# Test navigation
- Click each menu item
- Test mobile hamburger menu
- Verify smooth scrolling

# Test CTAs
- Click "Explore Products"
- Click "Contact Sales"
- Click "Request Demo" buttons

# Test product links
- SaaS-Connect link opens
- Ecolytix link opens

# Test contact form
- Fill out form fields
- Submit (should show alert)

# Test responsiveness
- Resize browser window
- Test on mobile device
- Test on tablet
```

## Step 5: Continuous Deployment

### Automatic Deployments

Render automatically deploys on every push to your main branch:

```bash
# Make changes to your code
# Commit and push
git add .
git commit -m "Update: your changes"
git push origin main

# Render will automatically:
# 1. Detect the push
# 2. Run the build command
# 3. Deploy the new version
```

### Manual Deployment

To manually trigger a deployment:

1. Go to Render Dashboard
2. Select your site
3. Click "Manual Deploy" → "Deploy latest commit"

## Troubleshooting

### Build Fails

**Error**: `npm install fails`
- **Solution**: Check Node version in environment variables
- Set `NODE_VERSION=18.17.0` in Render settings

**Error**: `Build command fails`
- **Solution**: Verify build command is: `npm install && npm run build`
- Check package.json scripts

**Error**: `Angular build errors`
- **Solution**: Test build locally first:
  ```bash
  npm run build
  ```
- Fix any TypeScript or template errors

### Site Not Loading

**Issue**: 404 errors on refresh
- **Solution**: Verify publish directory is `dist/corvay-technologies/browser`
- Check that `_redirects` file exists

**Issue**: Assets not loading
- **Solution**: Verify base href in `src/index.html` is `/`
- Check asset paths in code

**Issue**: White screen
- **Solution**: Check browser console for errors
- Verify all dependencies installed correctly
- Check Render deployment logs

### Performance Issues

**Slow loading**
- Enable gzip compression in Render
- Optimize images (when added)
- Use lazy loading for images
- Consider adding CDN

## Monitoring

### Check Deployment Status

```bash
# View in Render Dashboard
- Deployment history
- Build logs
- Runtime logs
- Bandwidth usage
```

### Analytics Setup (Recommended)

Add Google Analytics to track visitors:

1. Create Google Analytics account
2. Get tracking ID
3. Add to `src/index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

## Environment-Specific Configuration

### Production vs Development

Create environment files:

```typescript
// src/environments/environment.prod.ts
export const environment = {
  production: true,
  apiUrl: 'https://api.corvaytechnologies.com'
};

// src/environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000'
};
```

## Cost Estimate

### Render Free Tier
- Static sites: **FREE**
- 100 GB bandwidth/month
- Global CDN included
- Automatic SSL

### Custom Domain
- Render: **FREE**
- Domain registration: ~$10-15/year

## Next Steps

1. ✅ Deploy to Render
2. ⬜ Set up custom domain
3. ⬜ Configure Google Analytics
4. ⬜ Set up contact form backend
5. ⬜ Add client testimonials
6. ⬜ Implement blog section
7. ⬜ Set up monitoring/alerts

## Support

- **Render Docs**: https://render.com/docs
- **Angular Docs**: https://angular.dev
- **Project Issues**: Create issue in GitHub repo

## Security Notes

- Never commit sensitive credentials
- Use environment variables for API keys
- Enable HTTPS only (Render does this automatically)
- Keep dependencies updated: `npm audit fix`

---

**Deployment Date**: December 31, 2025  
**Version**: 1.0.0  
**Contact**: info@corvaytechnologies.com
