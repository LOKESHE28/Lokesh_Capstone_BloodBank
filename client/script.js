import { createDonorCard } from './components/donorCard.js';

const donorList = document.getElementById('donorList');

const sampleDonor = {
  id: "123",
  name: "Lokesh",
  bloodGroup: "O+"
};

donorList.innerHTML = '';

const wrapper = document.createElement('div');
wrapper.innerHTML = createDonorCard(sampleDonor);
donorList.appendChild(wrapper.firstElementChild);
