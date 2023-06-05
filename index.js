function generateRandomValues() {
  const values = [];
  for (let i = 0; i < 5; i++) {
    values.push(Math.floor(Math.random() * 100));
  }
  return values;
}

// Create draggable options
function createOptions() {
  const optionsContainer = document.getElementById('options');
  const values = generateRandomValues();
  values.forEach(value => {
    const li = document.createElement('li');
    li.draggable = true;
    li.textContent = value;
    optionsContainer.appendChild(li);
  });
}

// Create droppable input buckets
function createInputBuckets() {
  const inputsContainer = document.getElementById('inputs');
  for (let i = 0; i < 5; i++) {
    const li = document.createElement('li');
    li.className = 'input-bucket';
    inputsContainer.appendChild(li);
  }
}

// Check if the inputs are sorted correctly
function checkAnswer() {
  const inputs = document.querySelectorAll('#inputs .input-bucket');
  const values = Array.from(inputs).map(input => input.textContent);
  const sortedValues = values.slice().sort((a, b) => a - b);
  const resultMsg = document.getElementById('resultMsg');
  if (JSON.stringify(values) === JSON.stringify(sortedValues)) {
    resultMsg.textContent = 'Correct!';
    resultMsg.style.color = 'green';
  } else {
    resultMsg.textContent = 'Wrong!';
    resultMsg.style.color = 'red';
  }
}

 // Reset the quiz game
 function resetQuiz() {
  const optionsContainer = document.getElementById('options');
  const inputsContainer = document.getElementById('inputs');
  const resultMsg = document.getElementById('resultMsg');
  const resetBtn = document.getElementById('resetBtn');
  optionsContainer.innerHTML = '';
  inputsContainer.innerHTML = '';
  resultMsg.classList.remove('show');
  resetBtn.classList.remove('show');
  createOptions();
  createInputBuckets();
  enableCheckButton(false);
  enableResetButton(false);
  initDragAndDrop();
}

// Enable or disable the check button
function enableCheckButton(enable) {
  const checkBtn = document.getElementById('checkBtn');
  const resetBtn = document.getElementById('resetBtn');
  checkBtn.disabled = !enable;
  resetBtn.disabled = !enable;
}
// Enable or disable the reset button
function enableResetButton(enable) {
  const resetBtn = document.getElementById('resetBtn');
  if (enable) {
    resetBtn.classList.add('show');
    resetBtn.disabled = false;
  } else {
    resetBtn.classList.remove('show');
    resetBtn.disabled = true;
  }
}

// Initialize the drag and drop functionality
function initDragAndDrop() {
  const options = document.querySelectorAll('#options li');
  const inputs = document.querySelectorAll('#inputs .input-bucket');

  options.forEach(option => {
    option.addEventListener('dragstart', dragStart);
    option.addEventListener('dragend', dragEnd);
  });

  inputs.forEach(input => {
    input.addEventListener('dragover', dragOver);
    input.addEventListener('dragenter', dragEnter);
    input.addEventListener('dragleave', dragLeave);
    input.addEventListener('drop', drop);
  });
}

// Drag and drop event handlers
let dragged;

function dragStart(event) {
  dragged = event.target;
  event.target.style.opacity = '0.5';
}

function dragEnd(event) {
  event.target.style.opacity = '1';
}

function dragOver(event) {
  event.preventDefault();
}

function dragEnter(event) {
  event.target.classList.add('hovered');
}

function dragLeave(event) {
  event.target.classList.remove('hovered');
}

function drop(event) {
  event.preventDefault();
  event.target.classList.remove('hovered');
  if (event.target.tagName === 'LI') {
    const inputValue = event.target.textContent;
    event.target.textContent = dragged.textContent;
    dragged.textContent = inputValue;
    event.target.classList.add('dropping');
    setTimeout(() => {
      event.target.classList.remove('dropping');
      event.target.classList.add('dropped');
    }, 300);
    enableCheckButton(true);
  }
}


    // Check the answer and show the result
    function checkAnswer() {
      const inputs = document.querySelectorAll('#inputs .input-bucket');
      const values = Array.from(inputs).map(input => input.textContent);
      const sortedValues = values.slice().sort((a, b) => a - b);
      const resultMsg = document.getElementById('resultMsg');
      if (JSON.stringify(values) === JSON.stringify(sortedValues)) {
        resultMsg.textContent = 'Correct!';
        resultMsg.style.color = 'green';
      } else {
        resultMsg.textContent = 'Wrong!';
        resultMsg.style.color = 'red';
      }
      resultMsg.classList.add('show');
      enableResetButton(true);
    }



 // Start the quiz game
 createOptions();
 createInputBuckets();
 initDragAndDrop();

 const checkBtn = document.getElementById('checkBtn');
 checkBtn.addEventListener('click', checkAnswer);

 const resetBtn = document.getElementById('resetBtn');
 resetBtn.addEventListener('click', resetQuiz);
 enableResetButton(false);