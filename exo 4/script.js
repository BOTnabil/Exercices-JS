
  const container = document.getElementById('container');
  let squares = [];

  function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  }

  document.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowDown') {
        const square = document.createElement('div');
        square.style.width = '100px';
        square.style.height = '100px';
        square.style.backgroundColor = getRandomColor();
        container.appendChild(square);
        squares.push(square);
      } else if (event.key === 'ArrowUp') {
        if (squares.length > 0) {
          const lastSquare = squares.pop();
          container.removeChild(lastSquare);
      }
      }
  });
