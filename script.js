// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Here you would typically send the data to a server
        // For now, we'll just show a success message
        alert('Thank you for your message! I\'ll get back to you soon.');
        this.reset();
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.skill-category, .project-card, .about-text, .contact-info');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Skill bars animation
const skillBars = document.querySelectorAll('.skill-progress');
skillBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0';
    
    setTimeout(() => {
        bar.style.width = width;
    }, 500);
});

// Add typing effect to hero title
function typeWriter(element, speed = 100) {
    console.log('TypeWriter function called with element:', element);
    
    // Clear the element completely and create fresh structure
    element.innerHTML = '';
    
    // Create new span elements
    const greetingSpan = document.createElement('span');
    const highlightSpan = document.createElement('span');
    highlightSpan.className = 'highlight';
    
    // Add the spans to the element
    element.appendChild(greetingSpan);
    element.appendChild(highlightSpan);
    
    console.log('HTML structure created, now starting to type...');
    console.log('Greeting span:', greetingSpan);
    console.log('Highlight span:', highlightSpan);
    
    // Type "Hi, I'm " first
    const greeting = "Hi, I'm ";
    let i = 0;
    
    function typeGreeting() {
        if (i < greeting.length) {
            greetingSpan.textContent += greeting.charAt(i);
            console.log('Typed greeting character:', greeting.charAt(i));
            i++;
            setTimeout(typeGreeting, speed);
        } else {
            console.log('Greeting complete, starting name...');
            // Then type "Hang Peng" into the highlight span
            typeName();
        }
    }
    
    function typeName() {
        const name = "Hang Peng";
        let j = 0;
        
        function type() {
            if (j < name.length) {
                highlightSpan.textContent += name.charAt(j);
                console.log('Typed name character:', name.charAt(j));
                j++;
                setTimeout(type, speed);
            } else {
                console.log('Typewriter effect complete!');
            }
        }
        
        type();
    }
    
    typeGreeting();
}

// Initialize typing effect when page loads
function startTypewriter() {
    console.log('Starting typewriter effect...');
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle && heroTitle.textContent.includes('Hi, I\'m Hang Peng')) {
        console.log('Hero title found with content, starting typewriter effect...');
        // Wait for page to be fully visible
        setTimeout(() => {
            typeWriter(heroTitle, 100); // Slower speed for better visibility
        }, 1000); // Wait 1 second for page to be fully visible
        return true;
    }
    return false;
}

// Try multiple times to start the typewriter effect
function attemptTypewriter() {
    if (startTypewriter()) {
        return; // Success!
    }
    
    // If not successful, try again after a short delay
    setTimeout(() => {
        if (startTypewriter()) {
            return; // Success!
        }
        
        // Try one more time
        setTimeout(() => {
            startTypewriter();
        }, 200);
    }, 100);
}

// Use DOMContentLoaded as primary trigger
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded event fired, attempting typewriter...');
    attemptTypewriter();
});

// Use window load as backup
window.addEventListener('load', () => {
    console.log('Window load event fired, attempting typewriter...');
    attemptTypewriter();
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add CSS for loading state
const style = document.createElement('style');
style.textContent = `
    body:not(.loaded) {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
    
    .loading {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: white;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    }
    
    .loading.hidden {
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.5s ease;
    }
`;
document.head.appendChild(style);

// Add loading screen
const loadingScreen = document.createElement('div');
loadingScreen.className = 'loading';
loadingScreen.innerHTML = `
    <div style="text-align: center;">
        <div style="width: 50px; height: 50px; border: 3px solid #e5e7eb; border-top: 3px solid #2563eb; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 20px;"></div>
        <p style="color: #6b7280; font-size: 18px;">Loading...</p>
    </div>
`;

// Add spinning animation CSS
const spinStyle = document.createElement('style');
spinStyle.textContent = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(spinStyle);

document.body.appendChild(loadingScreen);

// Hide loading screen after page loads
window.addEventListener('load', () => {
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
            loadingScreen.remove();
        }, 500);
    }, 1000);
});

// Contact Form Functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading status
            showFormStatus('loading', 'Sending message...');
            
            // Get form data
            const formData = new FormData(contactForm);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // Send email using Formspree
            fetch(contactForm.action, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formObject)
            })
            .then(response => {
                if (response.ok) {
                    showFormStatus('success', 'Message sent successfully! I\'ll get back to you soon.');
                    contactForm.reset();
                } else {
                    throw new Error('Failed to send message');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                showFormStatus('error', 'Failed to send message. Please try again or email me directly at contact@moriax.com');
            });
        });
    }
    
    function showFormStatus(type, message) {
        formStatus.className = `form-status ${type}`;
        formStatus.textContent = message;
        
        // Auto-hide success message after 5 seconds
        if (type === 'success') {
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 5000);
        }
    }
});
