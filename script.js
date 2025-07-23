document.addEventListener('DOMContentLoaded', () => {
    // GSAP Animations (existing code)
    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray('section');
    sections.forEach(section => {
        gsap.fromTo(section,
            { opacity: 0, translateY: 60 },
            {
                opacity: 1,
                translateY: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 75%', // When the top of the section hits 75% of the viewport
                    end: 'bottom top',
                    toggleActions: 'play none none reverse', // Play on enter, reverse on leave
                    // Markers for debugging: markers: true
                }
            }
        );
    });

    // Fetch and display resume data (existing code)
    fetch('resume.json')
        .then(response => response.json())
        .then(data => {
            // Update professional summary
            document.querySelector('#home p').textContent = data.professionalSummary;

            // Update profile picture
            const profilePictureElement = document.querySelector('.profile-picture');
            if (data.profilePicture) {
                profilePictureElement.src = data.profilePicture;
            }

            // Update About section education and certifications (assuming you load them similarly)
            // You might need to adjust these selectors based on your HTML structure
            // Example for dynamic education and certifications if not directly hardcoded:
            // const educationUl = document.querySelector('#about ul');
            // data.education.forEach(edu => {
            //     const li = document.createElement('li');
            //     li.innerHTML = `<strong>${edu.university}</strong> – ${edu.degree} (${edu.date})`;
            //     educationUl.appendChild(li);
            // });

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
            if (projectsGrid) {
                data.projects.forEach(project => {
                    const projectCard = document.createElement('div');
                    projectCard.className = 'project-card';
                    projectCard.innerHTML = `
                        <h3>${project.name}</h3>
                        <p>${project.description}</p>
                        <div class="project-links">
                            <a href="${project.link}" target="_blank">View Project</a>
                        </div>
                    `;
                    projectsGrid.appendChild(projectCard);
                });
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
        .catch(error => console.error('Error fetching resume data:', error));


    // Dark Mode Toggle Logic (NEW CODE)
    const themeSwitcher = document.getElementById('theme-switcher');
    const body = document.body;

    // Function to set the theme
    const setTheme = (isDarkMode) => {
        if (isDarkMode) {
            body.classList.add('dark-mode');
            themeSwitcher.textContent = '🌙'; // Moon icon for dark mode
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            themeSwitcher.textContent = '☀️'; // Sun icon for light mode
            localStorage.setItem('theme', 'light');
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
});