const board = document.querySelector('.board');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
const numPixels = 500;

for (let i = 0; i < numPixels; i++) {
    const pixel = document.createElement('div');

    pixel.classList = 'pixel';
    
    pixel.addEventListener('mouseenter', (e) => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        e.target.style.backgroundColor = randomColor;
        e.target.style.boxShadow = `0 0 2px ${randomColor}, 0 0 10px ${randomColor}`;
    });

    pixel.addEventListener('mouseleave', (e) => {
        e.target.style.backgroundColor = '#1d1d1d';
        e.target.style.boxShadow = '0 0 2px #000';
    });
    
    board.appendChild(pixel);
}
