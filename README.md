# Personal Website

A modern, responsive personal website built with HTML, CSS, and JavaScript. This website features a beautiful design with smooth animations, mobile responsiveness, and multiple sections to showcase your skills, projects, and contact information.

## Features

- 🎨 **Modern Design**: Clean and professional layout with beautiful gradients and animations
- 📱 **Responsive**: Fully responsive design that works on all devices
- 🚀 **Fast Loading**: Optimized for performance with smooth animations
- 📧 **Contact Form**: Functional contact form with validation
- 🎯 **Smooth Scrolling**: Smooth navigation between sections
- 🌙 **Interactive Elements**: Hover effects, skill bars, and dynamic content
- 📱 **Mobile Navigation**: Hamburger menu for mobile devices

## Sections

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About Section**: Personal information and statistics
3. **Skills Section**: Visual representation of your skills with progress bars
4. **Projects Section**: Showcase your work with project cards
5. **Contact Section**: Contact form and social media links
6. **Footer**: Copyright information and branding

## Customization Guide

### 1. Personal Information

Edit the `index.html` file to update your personal information:

```html
<!-- Update your name throughout the file -->
<title>Your Name - Personal Website</title>
<div class="nav-logo">
    <a href="#home">Your Name</a>
</div>
<h1 class="hero-title">Hi, I'm <span class="highlight">Your Name</span></h1>

<!-- Update contact information -->
<div class="contact-method">
    <i class="fas fa-envelope"></i>
    <span>your.email@example.com</span>
</div>
<div class="contact-method">
    <i class="fas fa-phone"></i>
    <span>+1 (555) 123-4567</span>
</div>
<div class="contact-method">
    <i class="fas fa-map-marker-alt"></i>
    <span>Your City, Country</span>
</div>
```

### 2. About Section

Update the about section with your personal story:

```html
<p>
    Hello! I'm a passionate individual who loves to learn and create. 
    I believe in continuous improvement and always strive to deliver the best results.
</p>
<p>
    When I'm not working on projects, you can find me exploring new technologies, 
    reading books, or enjoying outdoor activities. I'm always open to new opportunities 
    and collaborations.
</p>

<!-- Update your statistics -->
<div class="stat">
    <h3>5+</h3>
    <p>Years Experience</p>
</div>
<div class="stat">
    <h3>50+</h3>
    <p>Projects Completed</p>
</div>
<div class="stat">
    <h3>100%</h3>
    <p>Client Satisfaction</p>
</div>
```

### 3. Skills Section

Customize your skills and proficiency levels:

```html
<div class="skill-item">
    <span class="skill-name">HTML/CSS</span>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 90%"></div>
    </div>
</div>
<div class="skill-item">
    <span class="skill-name">JavaScript</span>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 85%"></div>
    </div>
</div>
```

### 4. Projects Section

Add your own projects by duplicating and modifying the project cards:

```html
<div class="project-card">
    <div class="project-image">
        <div class="project-placeholder">
            <i class="fas fa-code"></i>
        </div>
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Description of your amazing project.</p>
        <div class="project-tech">
            <span class="tech-tag">React</span>
            <span class="tech-tag">Node.js</span>
            <span class="tech-tag">MongoDB</span>
        </div>
        <div class="project-links">
            <a href="your-demo-link" class="btn btn-small">Live Demo</a>
            <a href="your-github-link" class="btn btn-small btn-outline">GitHub</a>
        </div>
    </div>
</div>
```

### 5. Social Media Links

Update your social media profiles:

```html
<div class="social-links">
    <a href="your-github-url" class="social-link"><i class="fab fa-github"></i></a>
    <a href="your-linkedin-url" class="social-link"><i class="fab fa-linkedin"></i></a>
    <a href="your-twitter-url" class="social-link"><i class="fab fa-twitter"></i></a>
    <a href="your-instagram-url" class="social-link"><i class="fab fa-instagram"></i></a>
</div>
```

### 6. Colors and Styling

Customize the color scheme by editing `styles.css`:

```css
/* Primary colors */
:root {
    --primary-color: #2563eb;
    --secondary-color: #fbbf24;
    --accent-color: #667eea;
    --text-color: #1f2937;
    --light-bg: #f8fafc;
}

/* Update these values throughout the CSS file */
.nav-logo a { color: var(--primary-color); }
.btn-primary { background: var(--secondary-color); }
.hero { background: linear-gradient(135deg, var(--accent-color) 0%, #764ba2 100%); }
```

## Deployment

### Option 1: Cloudflare Pages (Recommended)

1. Push your code to a GitHub repository
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Connect your GitHub account
4. Select your repository
5. Configure build settings (no build required for static sites)
6. Deploy!

### Option 2: Netlify

1. Push your code to a GitHub repository
2. Go to [Netlify](https://netlify.com/)
3. Click "New site from Git"
4. Connect your GitHub account and select your repository
5. Deploy!

### Option 3: GitHub Pages

1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (usually `main` or `master`)
4. Save and wait for deployment

### Option 4: Traditional Web Hosting

1. Upload all files to your web hosting provider
2. Ensure `index.html` is in the root directory
3. Your site should be accessible at your domain

## File Structure

```
personal-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Tips

1. **Optimize Images**: Replace placeholder icons with optimized images
2. **Minify CSS/JS**: Use tools to minify your files for production
3. **Enable Compression**: Enable GZIP compression on your server
4. **Use CDN**: Consider using a CDN for faster loading

## Adding Real Images

Replace the placeholder icons with real images:

```html
<!-- Instead of this -->
<div class="profile-placeholder">
    <i class="fas fa-user"></i>
</div>

<!-- Use this -->
<img src="path/to/your/photo.jpg" alt="Your Name" class="profile-image">
```

Add corresponding CSS:

```css
.profile-image {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid rgba(255, 255, 255, 0.2);
}
```

## Contact Form Backend

The contact form currently shows a success message. To make it functional:

1. **Formspree**: Use [Formspree](https://formspree.io/) for simple form handling
2. **Netlify Forms**: If using Netlify, add `netlify` attribute to the form
3. **Custom Backend**: Build your own backend API to handle form submissions

## Customization Ideas

- Add a blog section
- Include a resume download button
- Add a dark mode toggle
- Include testimonials from clients
- Add a portfolio gallery
- Include a timeline of your career
- Add interactive charts for skills
- Include a newsletter signup

## Support

If you need help customizing your website:

1. Check the HTML comments for guidance
2. Modify the CSS variables for easy color changes
3. Use browser developer tools to experiment with styles
4. Consider learning basic HTML/CSS for more advanced customization

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy coding! 🚀**

Feel free to customize this website to make it truly yours. The code is well-commented and structured to make customization easy even for beginners.
