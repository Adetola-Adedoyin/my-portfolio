# Adetola Adedoyin - Portfolio

A modern, interactive portfolio website showcasing my skills as a DevOps and Cloud Infrastructure Engineer.

## Features

- 🎨 Modern, responsive design with dark/light mode toggle
- ✨ Interactive particle background animations
- 📱 Mobile-first responsive layout
- 🚀 Smooth scrolling and GSAP animations
- 🔍 Project filtering by technology
- 📊 Animated skill proficiency meters
- ⚡ Fast loading with optimized assets

## Technologies Used

- HTML5, CSS3, JavaScript (ES6+)
- GSAP (GreenSock Animation Platform)
- Particles.js for interactive backgrounds
- Typed.js for text animations
- Font Awesome icons
- Docker for containerization
- Nginx for web serving

## Quick Start

### Option 1: Docker (Recommended)

1. **Build the Docker image:**
   ```bash
   docker build -t adetola-portfolio .
   ```

2. **Run the container:**
   ```bash
   docker run -d -p 8080:80 --name portfolio adetola-portfolio
   ```

3. **Access the portfolio:**
   Open your browser and go to `http://localhost:8080`

### Option 2: Local Development

1. **Clone or download the repository**

2. **Serve with a local HTTP server:**
   ```bash
   # Using Python
   python3 -m http.server 8000
   
   # Using Node.js (if you have it installed)
   npx serve .
   ```

3. **Access the portfolio:**
   Open your browser and go to `http://localhost:8000`

## Docker Hub Deployment

To pull and run from Docker Hub:

```bash
# Pull the image
docker pull adetola/portfolio:latest

# Run the container
docker run -d -p 8080:80 --name portfolio adetola/portfolio:latest
```

Then access at `http://localhost:8080`

## Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── style.css           # Styles and animations
├── script.js           # JavaScript functionality
├── resume.json         # Portfolio data
├── profile.jpg         # Profile picture
├── Dockerfile          # Docker configuration
├── .dockerignore       # Docker ignore file
└── README.md           # This file
```

## Customization

To customize the portfolio with your own information:

1. **Update `resume.json`** with your personal details, experience, projects, and skills
2. **Replace `profile.jpg`** with your own profile picture
3. **Modify colors** in `style.css` by updating the CSS custom properties in `:root`
4. **Add/remove sections** by editing `index.html` and updating the corresponding JavaScript

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Performance

- Optimized for fast loading
- Lazy loading of animations
- Efficient particle system
- Responsive images

## Contact

- **Email:** adetoladedoyin001@gmail.com
- **LinkedIn:** [linkedin.com/in/adetola-adedoyin](https://linkedin.com/in/adetola-adedoyin)
- **GitHub:** [github.com/adetola-adedoyin](https://github.com/adetola-adedoyin)

## License

This project is open source and available under the [MIT License](LICENSE).