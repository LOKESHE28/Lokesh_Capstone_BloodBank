import { createDonorCard } from './components/donorCard.js';

const donorList = document.getElementById('donorList');

const sampleDonor = {
  id: "123",
  name: "Lokesh",
  bloodGroup: "O+"
};

donorList.innerHTML = createDonorCard(sampleDonor);
