let donors = JSON.parse(localStorage.getItem('donors')) || [];
let editIndex = null;

function renderDonors() {
  const list = document.getElementById('donorList');
  const count = document.getElementById('donorCount');
  list.innerHTML = '';
  count.textContent = donors.length;

  donors.forEach((donor, index) => {
    const card = document.createElement('div');
    card.className = 'donor-card';

    const name = document.createElement('h3');
    name.textContent = donor.name;

    const group = document.createElement('p');
    group.textContent = `Blood Group: ${donor.bloodGroup}`;

    const age = document.createElement('p');
    age.textContent = `Age: ${donor.age}`;

    const gender = document.createElement('p');
    gender.textContent = `Gender: ${donor.gender}`;

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => loadDonorIntoForm(index));

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => deleteDonor(index));

    card.append(name, group, age, gender, editBtn, deleteBtn);
    list.appendChild(card);
  });
}

function loadDonorIntoForm(index) {
  const donor = donors[index];
  document.getElementById('name').value = donor.name;
  document.getElementById('age').value = donor.age;
  document.getElementById('gender').value = donor.gender;
  document.getElementById('bloodGroup').value = donor.bloodGroup;
  document.getElementById('submitBtn').innerText = 'Update';
  editIndex = index;
}

function resetForm() {
  document.getElementById('donorForm').reset();
  document.getElementById('submitBtn').innerText = 'Add';
  editIndex = null;
}

function deleteDonor(index) {
  if (confirm("Are you sure you want to delete this donor?")) {
    donors.splice(index, 1);
    localStorage.setItem('donors', JSON.stringify(donors));
    renderDonors();
  }
}

function handleSubmit() {
  const name = document.getElementById('name').value.trim();
  const age = parseInt(document.getElementById('age').value.trim());
  const gender = document.getElementById('gender').value;
  const bloodGroup = document.getElementById('bloodGroup').value.trim();

  if (!name || isNaN(age) || age <= 0 || !gender || !bloodGroup) {
    alert("Please enter valid donor details.");
    return;
  }

  const donor = { name, age, gender, bloodGroup };

  if (editIndex !== null) {
    donors[editIndex] = donor;
  } else {
    donors.push(donor);
  }

  localStorage.setItem('donors', JSON.stringify(donors));
  renderDonors();
  resetForm();
}

window.onload = function () {
  document.getElementById('submitBtn').onclick = handleSubmit;
  renderDonors();
};
