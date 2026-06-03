# 🚀 Portfolio Setup Guide

## Complete Setup Instructions

This guide will help you set up and deploy your premium portfolio website.

## ⚡ Quick Setup (5 minutes)

### Step 1: Install Dependencies

```bash
cd portfolio
npm install
```

### Step 2: Start Development Server

```bash
npm run dev
```

Your portfolio will open at `http://localhost:3000`

### Step 3: Customize Your Portfolio

1. Open `src/data/portfolio.js`
2. Update your personal information:
   - Name, role, location
   - Skills with proficiency levels
   - Experience details
   - Project information
   - Testimonials
   - Social links

### Step 4: Build for Production

```bash
npm run build
```

The optimized build will be in the `dist` folder.

---

## 📝 Detailed Customization

### Update Skills

In `src/data/portfolio.js`, modify the `skills` array:

```javascript
export const skills = [
  {
    category: "Frontend Technologies",
    items: [
      { name: "React.js", level: 90, icon: "FaReact" },
      { name: "TypeScript", level: 85, icon: "SiTypescript" },
      // Add more skills...
    ]
  }
];
```

### Update Projects

Add or modify projects in the `projects` array:

```javascript
export const projects = [
  {
    id: 1,
    title: "Your Project Title",
    description: "Short description",
    image: "image-url",
    technologies: ["React", "Tailwind CSS"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/yourusername/repo",
    features: ["Feature 1", "Feature 2"]
  }
];
```

### Update Experience

Modify the `experiences` array:

```javascript
export const experiences = [
  {
    id: 1,
    company: "Company Name",
    position: "Your Position",
    duration: "Start – End",
    location: "City, Country",
    description: "Job description",
    achievements: [
      "Achievement 1",
      "Achievement 2"
    ]
  }
];
```

### Update Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        950: '#your-color',
        // ...
      },
      accent: {
        cyan: '#your-color',
        purple: '#your-color',
        // ...
      }
    }
  }
}
```

---

## 🖼️ Adding Images

1. **Profile Image**: Place in `src/assets/images/`
2. Update Hero section in `src/sections/Hero.jsx`:
```javascript
<img src="path/to/your/image.jpg" alt="Your Name" />
```

3. **Project Images**: Use URLs or import local images

---

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project" and select your GitHub repo
4. Click "Deploy"

Your site will be live at `your-name.vercel.app`

### Option 2: Netlify

1. Build your project: `npm run build`
2. Visit [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder
4. Your site is live!

### Option 3: GitHub Pages

1. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/portfolio/',
  // ...
})
```

2. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

3. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

4. Deploy:
```bash
npm run deploy
```

---

## 🎨 Design Customization

### Change Font

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    fontFamily: {
      sans: ['Your Font', 'sans-serif'],
    }
  }
}
```

### Add Custom Animations

Edit `src/styles/index.css`:

```css
@keyframes yourAnimation {
  from { /* styles */ }
  to { /* styles */ }
}
```

Then use in components:

```jsx
<motion.div
  animate={{ /* animation */ }}
  transition={{ duration: 1 }}
>
  Content
</motion.div>
```

---

## ✉️ Email Form Setup

To enable actual email sending, use services like:

- **EmailJS**: [emailjs.com](https://emailjs.com)
- **Formspree**: [formspree.io](https://formspree.io)
- **Netlify Forms**: Built-in with Netlify

### Using EmailJS:

1. Sign up at emailjs.com
2. Create an email service
3. Update `src/sections/Contact.jsx`:

```javascript
import emailjs from '@emailjs/browser';

const handleSubmit = async (e) => {
  e.preventDefault();
  
  await emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    formData,
    'YOUR_PUBLIC_KEY'
  );
};
```

---

## 🔍 SEO Optimization

Update `index.html`:

```html
<meta name="description" content="Your description">
<meta name="keywords" content="keyword1, keyword2">
<meta property="og:title" content="Your Title">
<meta property="og:description" content="Your description">
<meta property="og:image" content="image-url">
```

---

## 📊 Analytics

Add Google Analytics to `src/App.jsx`:

```javascript
import { useEffect } from 'react';

useEffect(() => {
  window.dataLayer = window.dataLayer || [];
  function gtag(...args) { dataLayer.push(args); }
  gtag('js', new Date());
  gtag('config', 'GA_ID');
}, []);
```

---

## ⚙️ Advanced Configuration

### Environment Variables

Create `.env.local`:

```
VITE_API_URL=https://api.example.com
VITE_PUBLIC_KEY=your-public-key
```

Access in components:

```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

### Custom Domain

1. Buy domain (GoDaddy, Namecheap, etc.)
2. Point DNS to your hosting provider
3. Update domain in Vercel/Netlify settings

---

## 🐛 Common Issues & Solutions

### Issue: Animations not working
- Ensure Framer Motion is installed: `npm install framer-motion`
- Check component imports

### Issue: Tailwind styles not loading
- Rebuild: `npm run dev`
- Clear cache: `rm -rf node_modules && npm install`

### Issue: Images not loading
- Use absolute URLs or import statements
- Check path is correct

### Issue: Slow build time
- Build is slow due to animations
- This is normal, production build will be optimized

---

## 🎯 Performance Tips

1. **Optimize Images**: Compress before adding
2. **Lazy Load Components**: Use React Suspense
3. **Code Splitting**: Vite does this automatically
4. **CSS Purging**: Tailwind removes unused CSS automatically

---

## 📱 Testing Responsiveness

Test on different devices:

- Use Chrome DevTools (F12)
- Test on real devices
- Use online tools: [responsivedesignchecker.com](https://responsivedesignchecker.com)

---

## 🚀 Final Checklist Before Deployment

- [ ] Updated all personal information
- [ ] Added your projects
- [ ] Updated experience section
- [ ] Configured social links
- [ ] Tested on mobile devices
- [ ] Built for production: `npm run build`
- [ ] Tested production build: `npm run preview`
- [ ] Set up email form
- [ ] Added analytics
- [ ] Configured custom domain (if applicable)
- [ ] Deployed to hosting

---

## 🆘 Getting Help

- Check React docs: [react.dev](https://react.dev)
- Check Tailwind docs: [tailwindcss.com](https://tailwindcss.com)
- Check Framer Motion docs: [framer.com/motion](https://www.framer.com/motion)
- GitHub Issues: Report bugs in repository

---

## 🎉 You're All Set!

Your premium portfolio is ready to showcase your work to the world!

Happy coding! 🚀
