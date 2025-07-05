let donors = JSON.parse(localStorage.getItem('donors')) || [];

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
    editBtn.addEventListener('click', () => editDonor(index));

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => deleteDonor(index));

    card.append(name, group, age, gender, editBtn, deleteBtn);
    list.appendChild(card);
  });
}

function addDonor(name, age, gender, bloodGroup) {
  donors.push({ name, age, gender, bloodGroup });
  localStorage.setItem('donors', JSON.stringify(donors));
  renderDonors();
}

function deleteDonor(index) {
  donors.splice(index, 1);
  localStorage.setItem('donors', JSON.stringify(donors));
  renderDonors();
}

function editDonor(index) {
  const donor = donors[index];
  document.getElementById('name').value = donor.name;
  document.getElementById('age').value = donor.age;
  document.getElementById('gender').value = donor.gender;
  document.getElementById('bloodGroup').value = donor.bloodGroup;
  document.getElementById('submitBtn').innerText = 'Update';

  document.getElementById('submitBtn').onclick = function () {
    donors[index] = {
      name: document.getElementById('name').value,
      age: document.getElementById('age').value,
      gender: document.getElementById('gender').value,
      bloodGroup: document.getElementById('bloodGroup').value
    };
    localStorage.setItem('donors', JSON.stringify(donors));
    renderDonors();
    resetForm();
  };
}

function resetForm() {
  document.getElementById('donorForm').reset();
  document.getElementById('submitBtn').innerText = 'Add';
  document.getElementById('submitBtn').onclick = handleSubmit;
}

function handleSubmit() {
  const name = document.getElementById('name').value.trim();
  const age = document.getElementById('age').value.trim();
  const gender = document.getElementById('gender').value;
  const bloodGroup = document.getElementById('bloodGroup').value.trim();

  if (!name || !age || !gender || !bloodGroup) return;

  addDonor(name, age, gender, bloodGroup);
  document.getElementById('donorForm').reset();
}

window.onload = function () {
  document.getElementById('submitBtn').onclick = handleSubmit;
  renderDonors();
};
