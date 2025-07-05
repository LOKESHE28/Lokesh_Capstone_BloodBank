export function createDonorCard(donor) {
  return `
    <div class="donor-card">
      <h3>${donor.name}</h3>
      <p>Blood Group: ${donor.bloodGroup}</p>
      <button onclick="editDonor('${donor.id}')">Edit</button>
      <button onclick="deleteDonor('${donor.id}')">Delete</button>
    </div>
  `;
}
