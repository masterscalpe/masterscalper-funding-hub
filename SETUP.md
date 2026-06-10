# Masterscalper Funding Hub - Deployment & Setup Guide

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/masterscalpe/masterscalper-funding-hub.git
cd masterscalper-funding-hub

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to view the website.

---

## 📦 Build for Production

```bash
# Build the project
npm run build

# Start production server
npm start
```

---

## 🌐 Deployment Options

### **Option 1: Vercel (Recommended)**
Vercel is the creator of Next.js and offers seamless deployment.

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### **Option 2: Netlify**

```bash
# Build first
npm run build

# Deploy the .next folder via Netlify dashboard or CLI
```

### **Option 3: Self-Hosted**

```bash
# Build for standalone production
npm run build

# The .next folder contains everything needed to run production server
npm start
```

---

## 📝 Environment Variables

Create a `.env.local` file for local development:

```env
# API Configuration
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_AFFILIATE_ID=your_affiliate_id

# Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Newsletter
NEXT_PUBLIC_NEWSLETTER_API=your_newsletter_service_api
```

---

## 📊 Project Structure

```
masterscalper-funding-hub/
├── components/           # Reusable React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── PropFirmCard.tsx
│   └── BrokerCard.tsx
├── data/                 # Static data and content
│   └── index.ts          # Prop firms, brokers, deals
├── pages/                # Next.js pages (routes)
│   ├── index.tsx         # Home page
│   ├── prop-firms.tsx    # Prop firms directory
│   ├── brokers.tsx       # Brokers directory
│   ├── comparisons.tsx   # Comparison tool
│   ├── deals.tsx         # Deals & discounts
│   ├── tools.tsx         # Trading calculators
│   ├── about.tsx         # About page
│   ├── contact.tsx       # Contact page
│   ├── blog/
│   │   ├── index.tsx     # Blog homepage
│   │   └── [id].tsx      # Individual blog posts
│   ├── prop-firms/
│   │   └── [id].tsx      # Individual prop firm reviews
│   └── brokers/
│       └── [id].tsx      # Individual broker reviews
├── public/               # Static files
│   ├── sitemap.xml       # SEO sitemap
│   └── robots.txt        # SEO robots file
├── styles/               # Global styles
│   └── globals.css       # Tailwind + custom CSS
├── utils/                # Utility functions
│   └── helpers.ts        # Calculations, SEO, formatters
├── package.json          # Dependencies
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
└── tsconfig.json         # TypeScript configuration
```

---

## 🔍 SEO Optimization Tips

1. **Update SEO_CONFIG in utils/helpers.ts**
   ```typescript
   export const SEO_CONFIG = {
     siteName: 'Masterscalper Funding Hub',
     description: 'Your description here',
     url: 'https://yourdomain.com', // Update this
     image: 'https://yourdomain.com/og-image.png',
     twitterHandle: '@yourtwitterhandle',
   };
   ```

2. **Replace Placeholder Images**
   - Replace all `https://via.placeholder.com` URLs with real images
   - Use Next.js Image component for optimization

3. **Update Affiliate Links**
   - Replace affiliate URLs in `data/index.ts` with your real affiliate links
   - Update commission rates as needed

4. **Add Google Analytics**
   - Add your Google Analytics ID to `_document.tsx`
   - Track user behavior and conversions

5. **Submit Sitemap**
   - Submit `sitemap.xml` to Google Search Console
   - Monitor indexing and search performance

---

## 💰 Monetization Setup

### Affiliate Links
- All platforms link to affiliate URLs
- Commission rates displayed for transparency
- Click tracking ready for integration

### Newsletter Integration
- Connect to: Mailchimp, ConvertKit, or Substack
- Update form submission in `pages/index.tsx` and `pages/blog/index.tsx`

### Ad Networks
- Ready for Google AdSense
- AdBook ad placements ready
- Header/Footer banner space available

---

## 🛠️ Customization

### Add New Prop Firm
Edit `data/index.ts`:

```typescript
{
  id: 'new-firm',
  name: 'New Firm Name',
  rating: 8.5,
  // ... add other fields
}
```

### Add New Blog Post
Create `pages/blog/[id].tsx` or add to `pages/blog/index.tsx` blog array.

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  neon: {
    blue: '#your-color',
    cyan: '#your-color',
  }
}
```

### Update Navigation
Edit `components/Header.tsx` navLinks array.

---

## 📱 Performance Optimization

- ✅ Image optimization with Next.js Image component
- ✅ Code splitting for faster page loads
- ✅ Automatic static generation (SSG)
- ✅ CSS minification with Tailwind
- ✅ JavaScript minification with SWC

**Check performance:**
```bash
npm run build
npm start
# Then test with Lighthouse in Chrome DevTools
```

---

## 🔐 Security

- No sensitive data in client code
- HTTPS required in production
- Content Security Policy headers
- XSS protection via React's default escaping

---

## 📞 Support & Troubleshooting

### Port Already in Use
```bash
# Change port
npm run dev -- -p 3001
```

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Images Not Loading
- Check image URLs in data files
- Verify image domains in `next.config.js`

---

## 📈 Analytics & Tracking

Integrate Google Analytics:

1. Create `pages/_document.tsx`:
```typescript
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
        <script dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_ID');`}} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
```

---

## 📝 Content Updates

### Update Deals
Edit `data/index.ts` deals array with latest promotions.

### Add Reviews
Create new review pages in `pages/prop-firms/` or `pages/brokers/`.

### Blog Posts
Add to `pages/blog/index.tsx` blog posts array or create individual files.

---

## 🚀 Launch Checklist

- [ ] Update all affiliate links
- [ ] Replace placeholder images
- [ ] Add real company logo
- [ ] Set up newsletter service
- [ ] Configure analytics
- [ ] Update meta tags for your domain
- [ ] Test all links (affiliate, internal, external)
- [ ] Mobile responsive testing
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Business Profile
- [ ] Configure email notifications
- [ ] Set up social media accounts
- [ ] Create blog content calendar
- [ ] Set up monitoring/alerting

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [React Documentation](https://react.dev)
- [Vercel Deployment](https://vercel.com)

---

## 📄 License

This project is open source. Customize and deploy as needed.

---

## 📧 Support

For questions or issues, reach out to: info@masterscalperfunding.hub

---

**Last Updated:** June 10, 2024
