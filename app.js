// Select elements
const counter = document.getElementById('counter');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');

let count = 0;

// Function to update counter display
function updateCounter() {
  counter.textContent = count;
  //counter.style.color = count > 0 ? 'green' : 'red';
}

// Increase button event
increaseBtn.addEventListener('click', () => {
  count++;
  updateCounter();
});

// Decrease button event
decreaseBtn.addEventListener('click', () => {
  if (count > 0) {
    count--;
    updateCounter();
  }
});

// Reset button event
resetBtn.addEventListener('click', () => {
  count = 0;
  updateCounter();
});

// Initialize counter display
updateCounter();
