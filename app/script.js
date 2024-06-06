const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const form = document.getElementById('myForm');

let zoom = 1; // Initial zoom level
let offsetX = 0; // Horizontal offset
let offsetY = 0; // Vertical offset
let isDragging = false; // Flag for dragging

// Function to draw rectangle with zoom and pan applied
function drawRectangle() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas before redrawing

  ctx.save(); // Save current state before transformations

  // Apply zoom and pan transformations
  ctx.scale(zoom, zoom);
  ctx.translate(offsetX, offsetY);

  const width = parseInt(document.getElementById('width').value);
  const length = parseInt(document.getElementById('length').value);

  // Draw rectangle on transformed canvas
  ctx.strokeRect(0, 0, width, length);

  ctx.restore(); // Restore saved state
}

// Event listener for form submission (same as before)
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const width = parseInt(document.getElementById('width').value);
  const length = parseInt(document.getElementById('length').value);
  drawRectangle();
});

// Event listeners for zoom and pan functionality
canvas.addEventListener('mousedown', (event) => {
  isDragging = true;
  offsetX = event.offsetX - canvas.width * zoom / 2; // Calculate initial offset relative to zoom level
  offsetY = event.offsetY - canvas.height * zoom / 2;
});

canvas.addEventListener('mouseup', () => {
  isDragging = false;
});

canvas.addEventListener('mousemove', (event) => {
  if (isDragging) {
    offsetX = event.offsetX - canvas.width * zoom / 2; // Update offset based on mouse movement and zoom
    offsetY = event.offsetY - canvas.height * zoom / 2;
    drawRectangle();
  }
});

canvas.addEventListener('wheel', (event) => {
  // Implement zoom functionality using mouse wheel event
  zoom += event.deltaY * 0.001; // Adjust zoom factor based on scroll amount
  if (zoom < 0.1) zoom = 0.1; // Set minimum zoom level
  drawRectangle();
});

// Call drawRectangle initially to draw the rectangle
drawRectangle();