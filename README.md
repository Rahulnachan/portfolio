# Rahul Nachan - Premium Portfolio Website

A modern, responsive, and production-ready personal portfolio website built with React.js, Vite, Tailwind CSS, and Framer Motion.

## 🎨 Features

✨ **Modern Design**
- Dark futuristic UI with glassmorphism effects
- Smooth gradients and neon glow effects
- Animated background with blob effects
- Fully responsive and mobile-first design

⚡ **Performance Optimized**
- Built with Vite for fast build times
- Optimized for production deployment
- Smooth animations using Framer Motion
- SEO-friendly structure

🎯 **Complete Sections**
- Sticky Navigation with smooth scrolling
- Hero section with typing animation
- About section with stats
- Skills section with progress bars
- Professional experience timeline
- Featured projects showcase
- Services overview
- Client testimonials carousel
- Contact form with validation
- Modern footer

## 📋 Prerequisites

- Node.js 16+ and npm/yarn
- Basic knowledge of React and Tailwind CSS

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

The website will open automatically at `http://localhost:3000`

### 3. Build for Production

```bash
npm run build
```

The optimized build will be created in the `dist` folder.

### 4. Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── assets/              # Images and media
├── components/          # Reusable components
│   ├── Cards.jsx       # Button, Card components
│   ├── Navbar.jsx      # Navigation component
│   └── Footer.jsx      # Footer component
├── sections/           # Page sections
│   ├── Hero.jsx        # Hero section
│   ├── About.jsx       # About section
│   ├── Skills.jsx      # Skills section
│   ├── Experience.jsx  # Experience section
│   ├── Projects.jsx    # Projects section
│   ├── Services.jsx    # Services section
│   ├── Testimonials.jsx # Testimonials section
│   └── Contact.jsx     # Contact section
├── data/               # Data and constants
│   └── portfolio.js    # Portfolio data
├── hooks/              # Custom hooks
│   └── useAnimations.js # Animation hooks
├── styles/             # Global styles
│   └── index.css       # Tailwind + custom styles
├── App.jsx             # Main app component
└── main.jsx            # Entry point
```

## 🎨 Customization

### Update Personal Information

Edit `src/data/portfolio.js`:

```javascript
export const personalInfo = {
  name: "Your Name",
  role: "Your Role",
  email: "your@email.com",
  // ... more details
};
```

### Update Colors

Edit `tailwind.config.js` to change color scheme:

```javascript
colors: {
  primary: { ... },
  accent: { ... }
}
```

### Update Skills, Projects, and Experience

All content is stored in `src/data/portfolio.js`. Simply update the arrays with your information.

### Change Social Links

Update `src/data/portfolio.js`:

```javascript
export const socialLinks = [
  { icon: "FaGithub", url: "your-github-url", label: "GitHub" },
  // ... more links
];
```

## 🚀 Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts and your site will be live!

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Upload the `dist` folder to Netlify using drag-and-drop or connect your GitHub repo

3. Netlify will automatically deploy your site!

### Deploy to GitHub Pages

1. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/portfolio/',
  // ... rest of config
})
```

2. Build and deploy:
```bash
npm run build
npm run deploy
```

## 📦 Dependencies

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **React Scroll** - Smooth scroll navigation

## 🎯 Best Practices Used

✅ Component-based architecture
✅ Reusable and modular components
✅ Clean and organized folder structure
✅ Responsive design with mobile-first approach
✅ Performance optimization
✅ Accessibility considerations
✅ SEO-friendly HTML structure
✅ Modern CSS with Tailwind utilities
✅ Smooth animations and transitions

## 🔧 Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

## 💡 Tips for Best Results

1. **Update Content**: Personalize all sections with your own information
2. **Add Images**: Replace placeholder images with your own photos
3. **Test Responsiveness**: Check your site on various devices
4. **Update Links**: Add your real social media and project links
5. **Customize Colors**: Modify Tailwind config to match your brand
6. **Add Analytics**: Integrate Google Analytics or similar service

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Framer Motion Documentation](https://www.framer.com/motion)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Change port in vite.config.js or use:
npm run dev -- --port 3001
```

### Build Failing
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
npm run build
```

### Images Not Loading After Deploy
Make sure image paths are correct and use absolute URLs or properly imported paths.

## 📄 License

This portfolio template is free to use for personal projects.

## 🤝 Support

For issues or questions, check the documentation of the respective libraries used.

## 🙏 Credits

Built with ❤️ using modern web technologies.

---

**Ready to showcase your work? Start customizing and deploy your portfolio today!**
