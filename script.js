const board = document.querySelector('.board');
const colors = ['#c54545', '#da7e41', '#5fa351', '#417aa0', '#6d5397'];

for (let i = 0; i < 500; i++) {
    let pixel = document.createElement('div');
    pixel.classList = 'pixel';
    board.append(pixel);
}

const pixels = document.querySelectorAll('.pixel');

pixels.forEach((pixel) => {
    pixel.addEventListener('mouseenter', (e) => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        e.target.style.transition = '';
        e.target.style.backgroundColor = randomColor;
        e.target.style.boxShadow = '0 0 1px 0.75px' + randomColor;
    });
});

pixels.forEach((pixel) => {
    pixel.addEventListener('mouseleave', (e) => {
        e.target.style.transition = 'all 2s ease-out';
        e.target.style.backgroundColor = '#222';
        e.target.style.boxShadow = 'none';
    });
});
