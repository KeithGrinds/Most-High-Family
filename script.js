/* Cursor */

const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

/* Theme Toggle */

const btn = document.getElementById("themeToggle");
btn.onclick = () => document.body.classList.toggle("light");

/* Particle System */

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.getElementById("particles").appendChild(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 120; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 3,
        dx: (Math.random() - .5),
        dy: (Math.random() - .5)
    });
}

function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach(p => {
        p.x += p.dx;
        p.y += p.dy;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
        ctx.fillStyle = "gold";
        ctx.fill();
    });

    requestAnimationFrame(animate);
}

animate();
