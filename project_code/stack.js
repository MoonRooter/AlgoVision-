// stack.js — Arihant Rawat (DB / Testing)
// Stack operations + localStorage persistence

let stack = JSON.parse(localStorage.getItem('av_stack') || '[]');

function saveStack() {
  localStorage.setItem('av_stack', JSON.stringify(stack));
}

function renderStack() {
  const box = document.getElementById('s-box');
  const topLabel = document.getElementById('s-top-label');
  box.querySelectorAll('.stack-block').forEach(b => b.remove());
  if (stack.length === 0) {
    document.getElementById('s-empty').style.display = 'block';
    topLabel.textContent = '';
    return;
  }
  document.getElementById('s-empty').style.display = 'none';
  topLabel.textContent = '▲ TOP';
  stack.forEach((val, i) => {
    const b = document.createElement('div');
    b.className = 'stack-block' + (i === stack.length - 1 ? ' top-block' : '');
    b.textContent = val;
    b.id = 'sb-' + i;
    box.appendChild(b);
  });
}

function pushStack() {
  const val = parseInt(document.getElementById('s-input').value);
  if (isNaN(val)) { log('s-log', 'Please enter a valid number.'); return; }
  if (stack.length >= 7) { log('s-log', 'Stack full! (max 7 for demo)'); return; }
  stack.push(val);
  renderStack();
  saveStack();
  log('s-log', `push(${val}) — added to top`, true);
  document.getElementById('s-input').value = '';
}

function popStack() {
  if (!stack.length) { log('s-log', 'Stack is empty — nothing to pop!'); return; }
  const val = stack[stack.length - 1];
  const top = document.getElementById('sb-' + (stack.length - 1));
  if (top) {
    top.classList.add('removing');
    setTimeout(() => { stack.pop(); renderStack(); saveStack(); }, 280);
  } else { stack.pop(); renderStack(); saveStack(); }
  log('s-log', `pop() — removed ${val} from top`, true);
}

function resetStack() {
  stack = [];
  renderStack();
  saveStack();
  log('s-log', 'Stack reset.');
}

// Load saved state on page open
window.addEventListener('load', renderStack);
