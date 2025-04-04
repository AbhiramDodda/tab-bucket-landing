const titleElement = document.getElementById('typing-title');
const text = 'Tab Bucket';
let index = 0;
const typingSpeed = 150; // milliseconds

function type() {
    if (index < text.length) {
        titleElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, typingSpeed);
    }
}

document.addEventListener('DOMContentLoaded', type);

const featuresText = `Tab Bucket is a Chrome extension that lets you easily collect and share multiple URLs at once. Select links from open tabs, generate a single shareable link, and copy it with one click. Recipients can paste the shared link into the extension, click "Detect and Open," and instantly open all the tabs. Simplify link sharing and streamline your browsing experience!`;
const featuresList = document.getElementById('features-list');
const points = featuresText.split('. ').filter(point => point.trim() !== '').map(point => point + '.');

points.forEach(point => {
    const li = document.createElement('li');
    li.textContent = point;
    featuresList.appendChild(li);
});

// 2D Animation using Canvas
const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');
const particles = [];
const numParticles = 50;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 5 + 2;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.alpha = Math.random() * 0.5 + 0.5;
        this.fadeSpeed = Math.random() * 0.02 + 0.01;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= this.fadeSpeed;

        if (this.alpha <= 0) {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.alpha = Math.random() * 0.5 + 0.5;
        }

        this.draw();
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 123, 255, ${this.alpha})`;
        ctx.fill();
    }
}

for (let i = 0; i < numParticles; i++) {
    particles.push(new Particle());
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => particle.update());
    requestAnimationFrame(animate);
}

animate();