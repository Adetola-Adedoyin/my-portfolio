document.addEventListener('DOMContentLoaded', () => {
    // Hide page loader immediately
    const pageLoader = document.querySelector('.page-loader');
    if (pageLoader) {
        pageLoader.style.display = 'none';
    }

    // Initialize particles.js
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: '#ff2d55' },
                shape: { type: 'circle' },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#ff2d55',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: true,
                    out_mode: 'out'
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'grab' },
                    onclick: { enable: true, mode: 'push' },
                    resize: true
                },
                modes: {
                    grab: { distance: 140, line_linked: { opacity: 0.5 } },
                    push: { particles_nb: 4 }
                }
            },
            retina_detect: true
        });
    }

    // Initialize Typed.js
    if (typeof Typed !== 'undefined') {
        new Typed('#typed', {
            stringsElement: '#typed-strings',
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 1500,
            startDelay: 1000,
            loop: true,
            smartBackspace: true
        });
    }

    // Custom cursor
    const cursor = document.querySelector('.custom-cursor');
    if (window.innerWidth > 992) { // Only on desktop
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            cursor.classList.add('active');
        });

        document.addEventListener('mouseout', () => {
            cursor.classList.remove('active');
        });

        // Add hover effect to interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-category');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
        });
    }

    // GSAP Animations
    if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        const sections = gsap.utils.toArray('section');
        sections.forEach(section => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0) scale(1)';
        });
    }

    // Animate skill meters when in view
    const skillMeters = document.querySelectorAll('.meter-fill');
    skillMeters.forEach(meter => {
        const targetWidth = meter.style.width;
        meter.style.width = '0';
        
        ScrollTrigger.create({
            trigger: meter,
            start: 'top 80%',
            onEnter: () => {
                meter.style.width = targetWidth;
            },
            onLeaveBack: () => {
                meter.style.width = '0';
            }
        });
    });

    // Back to top button
    const backToTopButton = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Navbar scroll effect
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Project filtering function (will be called after projects are loaded)
    function initializeProjectFiltering() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');
                
                const filter = button.getAttribute('data-filter');
                
                // Show/hide projects based on filter
                if (filter === 'all') {
                    projectCards.forEach(card => {
                        gsap.to(card, { opacity: 1, scale: 1, duration: 0.5 });
                        card.style.display = 'flex';
                    });
                } else {
                    projectCards.forEach(card => {
                        // Check if project has the filter tag
                        if (card.getAttribute('data-tags') && card.getAttribute('data-tags').includes(filter)) {
                            gsap.to(card, { opacity: 1, scale: 1, duration: 0.5 });
                            card.style.display = 'flex';
                        } else {
                            gsap.to(card, { opacity: 0, scale: 0.8, duration: 0.5, onComplete: () => {
                                card.style.display = 'none';
                            }});
                        }
                    });
                }
            });
        });
    }

    // Fetch and display resume data
    fetch('resume.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Resume data loaded:', data);
            // Update professional summary
            const homeParagraph = document.querySelector('#home p');
            if (homeParagraph) {
                homeParagraph.textContent = data.professionalSummary;
            }

            // Update profile picture
            const profilePictureElement = document.querySelector('.profile-picture');
            if (data.profilePicture) {
                profilePictureElement.src = data.profilePicture;
            }

            // Dynamically load Experience
            const experienceDetails = document.getElementById('experience-details');
            if (experienceDetails) {
                data.experience.forEach(exp => {
                    const experienceItem = document.createElement('div');
                    experienceItem.className = 'experience-item';
                    experienceItem.innerHTML = `
                        <h4>${exp.role} at ${exp.company}</h4>
                        <p class="light-text">${exp.location} | ${exp.duration}</p>
                        <ul>
                            ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                        </ul>
                    `;
                    experienceDetails.appendChild(experienceItem);
                });
            }

            // Dynamically load Projects
            const projectsGrid = document.getElementById('projects-grid');
            if (projectsGrid && data.projects) {
                console.log('Loading projects:', data.projects);
                data.projects.forEach(project => {
                    // Determine project tags based on description
                    const tags = [];
                    if (project.description.toLowerCase().includes('aws')) tags.push('aws');
                    if (project.description.toLowerCase().includes('terraform')) tags.push('terraform');
                    if (project.description.toLowerCase().includes('docker')) tags.push('docker');
                    
                    const projectCard = document.createElement('div');
                    projectCard.className = 'project-card';
                    projectCard.setAttribute('data-tags', tags.join(' '));
                    projectCard.innerHTML = `
                        <h3>${project.name}</h3>
                        <p>${project.description}</p>
                        <div class="project-links">
                            <a href="${project.link}" target="_blank">View Project</a>
                        </div>
                    `;
                    projectsGrid.appendChild(projectCard);
                });
                
                // Initialize project filtering after projects are loaded
                initializeProjectFiltering();
            } else {
                console.error('Projects grid not found or no projects data');
            }

            // Dynamically load Skills
            const skillsGrid = document.getElementById('skills-grid');
            if (skillsGrid) {
                // Group skills by category
                const skillCategories = {
                    "Cloud & DevOps Tools": data.skills["Cloud & DevOps Tools"],
                    "Technical Skills": data.skills["Technical Skills"],
                    "Soft Skills": data.skills["Soft Skills"]
                };

                for (const category in skillCategories) {
                    if (skillCategories[category] && skillCategories[category].length > 0) {
                        const skillCategoryDiv = document.createElement('div');
                        skillCategoryDiv.className = 'skill-category';
                        skillCategoryDiv.innerHTML = `<h3>${category}</h3><ul></ul>`;
                        const ul = skillCategoryDiv.querySelector('ul');
                        skillCategories[category].forEach(skill => {
                            const li = document.createElement('li');
                            li.textContent = skill;
                            ul.appendChild(li);
                        });
                        skillsGrid.appendChild(skillCategoryDiv);
                    }
                }
            }
        })
        .catch(error => {
            console.error('Error fetching resume data:', error);
            // Fallback: show a message if data can't be loaded
            const projectsGrid = document.getElementById('projects-grid');
            if (projectsGrid) {
                projectsGrid.innerHTML = '<p>Unable to load projects. Please check the console for errors.</p>';
            }
        });

    // Dark Mode Toggle Logic
    const themeSwitcher = document.getElementById('theme-switcher');
    const body = document.body;

    // Function to set the theme
    const setTheme = (isDarkMode) => {
        if (isDarkMode) {
            body.classList.add('dark-mode');
            themeSwitcher.textContent = '🌙'; // Moon icon for dark mode
            localStorage.setItem('theme', 'dark');
            
            // Update particles color for dark mode
            if (typeof pJSDom !== 'undefined' && pJSDom.length > 0) {
                pJSDom[0].pJS.particles.color.value = '#ff668a';
                pJSDom[0].pJS.particles.line_linked.color = '#ff668a';
                pJSDom[0].pJS.fn.particlesRefresh();
            }
        } else {
            body.classList.remove('dark-mode');
            themeSwitcher.textContent = '☀️'; // Sun icon for light mode
            localStorage.setItem('theme', 'light');
            
            // Update particles color for light mode
            if (typeof pJSDom !== 'undefined' && pJSDom.length > 0) {
                pJSDom[0].pJS.particles.color.value = '#ff2d55';
                pJSDom[0].pJS.particles.line_linked.color = '#ff2d55';
                pJSDom[0].pJS.fn.particlesRefresh();
            }
        }
    };

    // Check for saved theme preference on load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme === 'dark');
    } else {
        // Default to light mode or check system preference
        const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDarkMode);
    }

    // Toggle theme on button click
    themeSwitcher.addEventListener('click', () => {
        const isCurrentlyDarkMode = body.classList.contains('dark-mode');
        setTheme(!isCurrentlyDarkMode); // Toggle the theme
    });
    
    // Mobile navigation toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 100, // Offset for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
});