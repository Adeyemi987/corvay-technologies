# Quick Start Guide - Corvay Technologies

Get your Corvay Technologies landing page up and running in minutes!

## 📋 Prerequisites

- **Node.js**: Version 18.x or higher
- **npm**: Version 9.x or higher
- **Git**: For version control

Check your versions:
```bash
node --version
npm --version
git --version
```

## 🚀 Quick Setup (5 minutes)

### 1. Navigate to Project
```bash
cd /Users/mac/Desktop/Yemi_startup/corvay-technologies
```

### 2. Install Dependencies
```bash
npm install
```
This will install all required packages including Angular, TailwindCSS, and dependencies.

### 3. Start Development Server
```bash
npm start
```

The site will open automatically at: **http://localhost:4200**

## 🎯 What You'll See

Your landing page includes:

✅ **Header** with navigation and mobile menu  
✅ **Hero Section** with compelling headline and CTAs  
✅ **Products Section** featuring SaaS-Connect and Ecolytix  
✅ **About Section** with company mission  
✅ **Value Propositions** highlighting key benefits  
✅ **Contact Form** for demo requests  
✅ **Professional Footer** with links and social media  

## 📱 Testing Responsiveness

1. **Desktop**: View at full browser width
2. **Tablet**: Resize browser to ~768px width
3. **Mobile**: Resize to ~375px width or use browser DevTools device emulation

## ✏️ Quick Customizations

### Change Company Name/Logo
Edit: `src/app/app.html` (lines 7-14)

### Update Products
Edit: `src/app/app.ts` (lines 30-62)

### Modify Colors
Edit: `tailwind.config.js` (lines 5-29)

### Change Contact Email
Edit: `src/app/app.html` (search for "info@corvaytechnologies.com")

## 🔨 Common Commands

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Check for linting errors
npm run lint
```

## 📂 Project Structure

```
corvay-technologies/
├── src/
│   ├── app/
│   │   ├── app.ts          # Main component logic
│   │   ├── app.html        # Landing page template
│   │   └── app.css         # Component styles
│   ├── styles.css          # Global styles with Tailwind
│   └── index.html          # HTML entry point
├── public/                 # Static assets
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
├── angular.json            # Angular configuration
├── package.json            # Dependencies
└── README.md              # Full documentation
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 4200
lsof -ti:4200 | xargs kill -9

# Or use different port
ng serve --port 4300
```

### Build Errors
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Styling Not Applied
```bash
# Restart dev server
# Press Ctrl+C to stop
npm start
```

## 🎨 Customization Tips

### 1. Update Hero Image
Replace the placeholder in `src/app/app.html` (lines 92-102) with:
```html
<img src="your-image.jpg" alt="Description" class="w-full h-full object-cover rounded-2xl">
```

### 2. Add Real Testimonials
Update the testimonials section in `src/app/app.html` (lines 260-280)

### 3. Connect Contact Form
Update `submitContactForm()` in `src/app/app.ts` to send to your backend

### 4. Add Google Analytics
Add tracking code to `src/index.html` in the `<head>` section

## 📦 Building for Production

```bash
# Create optimized production build
npm run build

# Output will be in: dist/corvay-technologies/browser/
```

## 🌐 Next Steps

1. ✅ Test locally - You're here!
2. ⬜ Customize content and images
3. ⬜ Set up GitHub repository
4. ⬜ Deploy to Render (see DEPLOYMENT.md)
5. ⬜ Configure custom domain
6. ⬜ Add Google Analytics

## 📚 Additional Resources

- **Full Documentation**: `README.md`
- **Deployment Guide**: `DEPLOYMENT.md`
- **Angular Docs**: https://angular.dev
- **TailwindCSS Docs**: https://tailwindcss.com

## 💡 Tips for Success

- ✨ Make small changes and test frequently
- 🎨 Use TailwindCSS utility classes for styling
- 📱 Always test on mobile devices
- 🚀 Commit changes regularly to Git
- 📊 Monitor with Google Analytics after deployment

## 🆘 Need Help?

- Check the `README.md` for detailed documentation
- Review `DEPLOYMENT.md` for deployment instructions
- Angular issues: https://github.com/angular/angular/issues
- TailwindCSS issues: https://github.com/tailwindlabs/tailwindcss/issues

## ⚡ Performance Tips

- Images: Use WebP format, optimize size
- Fonts: Use font-display: swap
- Build: Use production builds for deployment
- CDN: Leverage Render's built-in CDN

---

**Created**: December 31, 2025  
**Version**: 1.0.0  
**Contact**: info@corvaytechnologies.com

🎉 **Happy Building!**
