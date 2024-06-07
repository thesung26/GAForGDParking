const form = document.getElementById('myForm');
const resultContainer = document.getElementById('resultContainer');

GenerateResult();

function GenerateResult(){
  form.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const widthInput = document.getElementById('width');
    const lengthInput = document.getElementById('length');
  
    const width = widthInput.value;
    const length = lengthInput.value;
  
    // Create a new canvas element
    const canvas = document.createElement('canvas');
    canvas.width = 300;
    canvas.height = 300;
  
    // Add canvas to the container
    resultContainer.appendChild(canvas);
  
    // Get the 2D drawing context
    const ctx = canvas.getContext('2d');
  
    // Draw the rectangle
    ctx.strokeStyle = 'Black';
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
  });
}

