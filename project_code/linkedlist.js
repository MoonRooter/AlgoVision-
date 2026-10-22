// linkedlist.js — Chaitanya Maithani (Developer / Docs)
// Linked List operations + localStorage persistence

let list = JSON.parse(localStorage.getItem('av_list') || '[]');

function saveList() {
  localStorage.setItem('av_list', JSON.stringify(list));
}

function renderList() {
  const track = document.getElementById('ll-track');
  track.innerHTML = '';
  if (list.length === 0) {
    track.innerHTML = '<span class="ll-empty">List is empty</span>';
    return;
  }
  list.forEach((val, i) => {
    const node = document.createElement('div');
    node.className = 'll-node';
    node.id = 'ln-' + i;
    node.innerHTML = `<div class="ll-box">${val}</div>`;
    if (i < list.length - 1) node.innerHTML += `<div class="ll-arrow">→</div>`;
    track.appendChild(node);
  });
  const nullEl = document.createElement('div');
  nullEl.innerHTML = `<span class="ll-arrow">→</span><span class="ll-null">NULL</span>`;
  track.appendChild(nullEl);
}

function llInsertFront() {
  const val = parseInt(document.getElementById('ll-input').value);
  if (isNaN(val)) { log('ll-log', 'Please enter a valid number.'); return; }
  list.unshift(val);
  renderList();
  saveList();
  log('ll-log', `insertFront(${val}) — added at beginning`, true);
  document.getElementById('ll-input').value = '';
}

function llInsertEnd() {
  const val = parseInt(document.getElementById('ll-input').value);
  if (isNaN(val)) { log('ll-log', 'Please enter a valid number.'); return; }
  list.push(val);
  renderList();
  saveList();
  log('ll-log', `insertEnd(${val}) — added at tail`, true);
  document.getElementById('ll-input').value = '';
}

function llDelete() {
  const val = parseInt(document.getElementById('ll-input').value);
  if (isNaN(val)) { log('ll-log', 'Please enter a valid number.'); return; }
  const idx = list.indexOf(val);
  if (idx === -1) { log('ll-log', `${val} not found in list!`); return; }
  const node = document.getElementById('ln-' + idx);
  if (node) {
    node.classList.add('removing');
    setTimeout(() => { list.splice(idx, 1); renderList(); saveList(); }, 280);
  } else { list.splice(idx, 1); renderList(); saveList(); }
  log('ll-log', `delete(${val}) — node removed`, true);
  document.getElementById('ll-input').value = '';
}

function resetList() {
  list = [];
  renderList();
  saveList();
  log('ll-log', 'List reset.');
}

window.addEventListener('load', renderList);
