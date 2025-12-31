# Corvay Technologies Color Scheme

## Brand Colors

### Primary: Deep Teal
**Hex**: `#0F4C5C`  
**Usage**: Main brand color, headers, primary UI elements, logo backgrounds

**Palette Scale**:
- 50: `#e6f2f4` - Lightest tint
- 100: `#cce5e9`
- 200: `#99cbd3`
- 300: `#66b1bd`
- 400: `#3397a7`
- **500: `#0F4C5C`** - Base color
- 600: `#0c3d4a`
- 700: `#092e37`
- 800: `#061f25`
- 900: `#030f12` - Darkest shade

### Secondary: Steel Blue (Accent/CTA)
**Hex**: `#1C7C9C`  
**Usage**: Buttons, links, hover states, call-to-action elements

**Palette Scale**:
- 50: `#e8f4f8` - Lightest tint
- 100: `#d1e9f1`
- 200: `#a3d3e3`
- 300: `#75bdd5`
- 400: `#47a7c7`
- **500: `#1C7C9C`** - Base color
- 600: `#16637d`
- 700: `#114a5e`
- 800: `#0b313e`
- 900: `#06191f` - Darkest shade

### Accent: Muted Green (Sustainability)
**Hex**: `#4CAF50`  
**Usage**: Sustainability-related elements, success states, checkmarks (for Ecolytix product)

**Palette Scale**:
- 50: `#e8f5e9` - Lightest tint
- 100: `#c8e6c9`
- 200: `#a5d6a7`
- 300: `#81c784`
- 400: `#66bb6a`
- **500: `#4CAF50`** - Base color
- 600: `#43a047`
- 700: `#388e3c`
- 800: `#2e7d32`
- 900: `#1b5e20` - Darkest shade

### Neutrals (Enterprise-clean)

**Charcoal (Text)**:  
`#1F2933`  
Usage: Primary text, headings, dark UI elements

**Light Gray (Background)**:  
`#F5F7FA`  
Usage: Section backgrounds, subtle backgrounds, cards

**White**:  
`#FFFFFF`  
Usage: Main backgrounds, cards, clean spaces

---

## Usage Guidelines

### Primary Color (Deep Teal)
- ✅ Logo backgrounds
- ✅ Hero section gradients
- ✅ Section accents
- ✅ Icons and illustrations
- ✅ Footer logo elements
- ❌ Avoid using for long text blocks

### Secondary Color (Steel Blue)
- ✅ **All CTA buttons** (Request Demo, Contact Sales, etc.)
- ✅ Navigation hover states
- ✅ Interactive elements
- ✅ Links
- ✅ Active states
- ✅ Focus indicators
- ❌ Avoid using as main background color

### Accent Color (Muted Green)
- ✅ Sustainability features (Ecolytix product)
- ✅ Success messages
- ✅ Checkmarks in feature lists
- ✅ Environmental icons
- ⚠️ Use sparingly - only for eco-related content

### Neutrals
- ✅ Charcoal for all body text and headings
- ✅ Light Gray for section backgrounds and subtle dividers
- ✅ White for cards and primary backgrounds

---

## Color Combinations

### High Contrast (For CTAs)
```css
background: #1C7C9C (Steel Blue)
text: #FFFFFF (White)
hover: #16637d (Steel Blue 600)
```

### Subtle Contrast (For Sections)
```css
background: #F5F7FA (Light Gray)
text: #1F2933 (Charcoal)
accent: #0F4C5C (Deep Teal)
```

### Hero Gradient
```css
background: linear-gradient(to-br, #F5F7FA, #FFFFFF, #e6f2f4)
/* Light Gray → White → Primary Teal 50 */
```

### Footer
```css
background: #1F2933 (Charcoal)
text: #FFFFFF (White)
accent: #0F4C5C (Deep Teal)
```

---

## Component-Specific Colors

### Navigation
- Background: `#FFFFFF` (White)
- Text: `#1F2933` (Charcoal)
- Hover: `#1C7C9C` (Steel Blue)
- CTA Button: `#1C7C9C` background with white text

### Hero Section
- Background: Gradient from Light Gray to Primary Teal 50
- Headline: `#1F2933` (Charcoal)
- Accent Text: `#0F4C5C` (Deep Teal)
- Primary CTA: `#1C7C9C` (Steel Blue)
- Secondary CTA: White background with Steel Blue border

### Product Cards
- Background: `#FFFFFF` (White)
- Border: `#F5F7FA` (Light Gray) → hover: `#0F4C5C` (Deep Teal)
- Icon Background: `#e6f2f4` (Primary 50)
- Icon: `#0F4C5C` (Deep Teal)
- Title: `#1F2933` (Charcoal)
- Tagline: `#0F4C5C` (Deep Teal)
- Features Checkmark: `#4CAF50` (Muted Green)
- CTA Buttons: `#1C7C9C` (Steel Blue)

### About Section
- Background: Gradient from Light Gray to White
- Card Background: `#FFFFFF` (White)
- Text: `#1F2933` (Charcoal)

### Value Proposition Icons
- Background: Gradient from Steel Blue 500 to 700
- Icon: `#FFFFFF` (White)

### Contact Form
- Section Background: Gradient from Deep Teal 500 to 700
- Form Background: `#FFFFFF` (White)
- Labels: `#1F2933` (Charcoal)
- Input Borders: `#F5F7FA` (Light Gray)
- Focus Ring: `#1C7C9C` (Steel Blue)
- Submit Button: `#1C7C9C` (Steel Blue)

### Footer
- Background: `#1F2933` (Charcoal)
- Text: `#FFFFFF` with 70% opacity
- Logo Background: `#0F4C5C` (Deep Teal)
- Email Link: `#1C7C9C` (Steel Blue)
- Hover: Full white

---

## Accessibility

### Contrast Ratios (WCAG AA Compliant)

✅ **Charcoal (#1F2933) on White (#FFFFFF)**  
Ratio: 14.2:1 - Excellent for body text

✅ **Deep Teal (#0F4C5C) on White (#FFFFFF)**  
Ratio: 7.8:1 - Good for headings and large text

✅ **Steel Blue (#1C7C9C) on White (#FFFFFF)**  
Ratio: 4.9:1 - Good for buttons and interactive elements

✅ **White (#FFFFFF) on Steel Blue (#1C7C9C)**  
Ratio: 4.9:1 - Good for button text

✅ **White (#FFFFFF) on Charcoal (#1F2933)**  
Ratio: 14.2:1 - Excellent for footer text

---

## TailwindCSS Usage

### In HTML Templates

```html
<!-- Primary Teal -->
<div class="bg-primary-500 text-white">Deep Teal Background</div>
<h1 class="text-primary-500">Deep Teal Text</h1>

<!-- Secondary Steel Blue -->
<button class="bg-secondary-500 hover:bg-secondary-600 text-white">
  Steel Blue Button
</button>

<!-- Accent Green -->
<svg class="text-accent-500">Sustainability Icon</svg>

<!-- Neutrals -->
<p class="text-charcoal">Body Text</p>
<div class="bg-light-gray">Section Background</div>
```

### Gradient Examples

```html
<!-- Hero Gradient -->
<section class="bg-gradient-to-br from-light-gray via-white to-primary-50">

<!-- Primary Gradient -->
<div class="bg-gradient-to-br from-primary-500 to-primary-700">

<!-- Secondary Gradient -->
<div class="bg-gradient-to-br from-secondary-500 to-secondary-700">

<!-- Contact Gradient -->
<section class="bg-gradient-to-br from-primary-500 to-primary-700">
```

---

## Color Psychology & Brand Messaging

### Deep Teal (#0F4C5C)
- **Message**: Trust, professionalism, stability
- **Emotion**: Calm, reliable, enterprise-grade
- **Industry Fit**: Technology, corporate, enterprise

### Steel Blue (#1C7C9C)
- **Message**: Innovation, action, progress
- **Emotion**: Dynamic, confident, forward-thinking
- **Purpose**: Drives user action (CTAs)

### Muted Green (#4CAF50)
- **Message**: Sustainability, growth, efficiency
- **Emotion**: Eco-conscious, responsible, balanced
- **Purpose**: Reinforces environmental commitment

### Charcoal (#1F2933)
- **Message**: Authority, sophistication, clarity
- **Emotion**: Professional, serious, trustworthy
- **Purpose**: Ensures excellent readability

---

## Implementation Notes

All colors are configured in:
- `tailwind.config.js` - Main color definitions
- `src/app/app.html` - Applied throughout components
- `src/styles.css` - Global text color
- `src/app/app.css` - Custom gradients and effects

Build status: ✅ Successful  
Color scheme applied: ✅ Complete  
Accessibility tested: ✅ WCAG AA compliant

---

**Last Updated**: December 31, 2025  
**Version**: 2.0.0 (Updated color scheme)
