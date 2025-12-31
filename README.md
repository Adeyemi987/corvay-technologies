# Corvay Technologies Landing Page

A modern, professional, and responsive landing page for Corvay Technologies showcasing enterprise SaaS solutions.

## 🚀 Features

- **Responsive Design**: Fully responsive across mobile, tablet, and desktop devices
- **Modern UI**: Built with Angular 21 and TailwindCSS
- **SEO Optimized**: Comprehensive meta tags and structured content
- **Interactive Elements**: Smooth scrolling, hover effects, and animations
- **Contact Form**: Integrated contact form for demo requests
- **Product Showcase**: Dedicated sections for SaaS-Connect and Ecolytix platforms

## 📋 Sections

1. **Header/Navigation**: Fixed navigation with mobile menu support
2. **Hero Section**: Eye-catching headline with CTAs
3. **Products Section**: Showcase of SaaS-Connect and Ecolytix with features
4. **About Section**: Company mission and vision
5. **Value Proposition**: Key benefits (Efficiency, Insights, Savings, Security)
6. **Testimonials**: Placeholder for client logos and quotes
7. **Contact Section**: Contact form for demo requests
8. **Footer**: Quick links, social media, and company info

## 🛠️ Technology Stack

- **Framework**: Angular 21
- **Styling**: TailwindCSS
- **Language**: TypeScript
- **Build Tool**: Angular CLI
- **Deployment**: Render

## 📦 Installation

```bash
# Navigate to project directory
cd corvay-technologies

# Install dependencies
npm install

# Start development server
npm start
```

The application will be available at `http://localhost:4200`

## 🔧 Build

```bash
# Production build
npm run build

# Build output will be in dist/corvay-technologies/browser
```

## 🚀 Deployment

### Render Deployment

1. Connect your GitHub repository to Render
2. Use the provided `render.yaml` configuration
3. Deploy with automatic builds on push

The application is configured to deploy as a static site with proper routing.

## 📝 Configuration

### Update Product Information

Edit `src/app/app.ts` to modify product details:

```typescript
products: Product[] = [
  {
    name: 'Your Product',
    tagline: 'Your tagline',
    description: 'Your description',
    features: ['Feature 1', 'Feature 2'],
    url: 'https://your-url.com',
    icon: 'SVG path data'
  }
]
```

### Update Company Information

- **Contact Email**: Update in `src/app/app.html` (footer and contact sections)
- **Social Links**: Update in footer section
- **Meta Tags**: Update in `src/index.html`

## 🎨 Customization

### Colors

Modify the color scheme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: { /* Your primary colors */ },
      secondary: { /* Your secondary colors */ }
    }
  }
}
```

### Fonts

Update the Google Fonts import in `src/styles.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@...&display=swap');
```

## 📧 Contact Form Integration

The contact form currently shows an alert on submission. To integrate with a backend:

1. Update the `submitContactForm()` method in `src/app/app.ts`
2. Add your API endpoint or email service integration
3. Handle form validation and error states

Example integration:

```typescript
submitContactForm(): void {
  // Call your API
  this.http.post('/api/contact', this.contactForm).subscribe(
    response => {
      // Handle success
    },
    error => {
      // Handle error
    }
  );
}
```

## 🔍 SEO

The landing page includes:

- Semantic HTML structure
- Meta tags for description, keywords, and Open Graph
- Proper heading hierarchy (h1, h2, h3)
- Alt texts for images (add when images are included)
- Clean URLs with Angular routing

## ♿ Accessibility

- ARIA-compliant navigation
- Keyboard navigation support
- Focus visible states
- Semantic HTML elements
- Screen reader friendly

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🧪 Testing

```bash
# Run unit tests
npm test

# Run end-to-end tests
npm run e2e
```

## 📄 License

© 2025 Corvay Technologies. All rights reserved.

## 🤝 Support

For questions or support, contact: info@corvaytechnologies.com

## 🔗 Links

- **Website**: http://corvaytechnologies.com
- **SaaS-Connect**: https://saas-connect.onrender.com/
- **Ecolytix**: https://sustainability-plat.onrender.com/

## 📈 Future Enhancements

- [ ] Add Google Analytics integration
- [ ] Implement blog section
- [ ] Add case studies
- [ ] Include video demonstrations
- [ ] Add live chat support
- [ ] Implement newsletter subscription
- [ ] Add multi-language support
- [ ] Create admin panel for content management
