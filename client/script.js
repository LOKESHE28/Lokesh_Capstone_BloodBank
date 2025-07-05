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

    card.append(name, group, age, gender);
    list.appendChild(card);
  });
}

function addDonor(name, age, gender, bloodGroup) {
  donors.push({ name, age, gender, bloodGroup });
  localStorage.setItem('donors', JSON.stringify(donors));
  renderDonors();
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
