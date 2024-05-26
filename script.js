document.getElementById('celebrateButton').addEventListener('click', function() {
    createHeartShape(() => {
        createFireworks();
    });
});

function createHeartShape(callback) {
    const flagsContainer = document.getElementById('flags-container');
    flagsContainer.innerHTML = '';

    const heartPoints = generateHeartPoints(50); // Generate 50 points for the heart shape

    heartPoints.forEach((point, index) => {
        setTimeout(() => {
            const flag = document.createElement('div');
            flag.classList.add('flag');
            flag.style.left = `${point.x * 300 + 300 - 20}px`; // Adjusted position to center the flag
            flag.style.top = `${point.y * 300 + 300}px`;
            flagsContainer.appendChild(flag);
            if (index === heartPoints.length - 1 && callback) {
                setTimeout(callback, 1000); // Delay the callback for 1 second after heart animation completes
            }
        }, index * 100); // Delay the appearance of each flag
    });
}

function generateHeartPoints(numPoints) {
    const points = [];
    for (let i = 0; i < numPoints; i++) {
        const t = Math.PI * 2 * (i / numPoints);
        const x = 16 * Math.sin(t) ** 3;
        const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
        points.push({ x: x / 17, y: -y / 17 });
    }
    return points;
}

function createFireworks() {
    const fireworksContainer = document.getElementById('flags-container');
    for (let i = 0; i < 10; i++) {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        firework.style.left = Math.random() * 100 + 'vw';
        firework.style.animationDuration = Math.random() * 2 + 1 + 's';
        fireworksContainer.appendChild(firework);
    }
}
