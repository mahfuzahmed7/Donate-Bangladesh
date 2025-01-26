document.getElementById('btn-donate-now').addEventListener('click', function (event) {
    event.preventDefault();

    // Get donation amount and validate
    const donationAmount = Number(getInputFieldValueById('input-donate-now'));
    // Ensure the donation amount is a valid positive number
    if (!donationAmount || isNaN(donationAmount) || donationAmount <= 0) {
        alert("Please enter a valid donation amount.");
        return;
    }

    const currentDonation = Number(getTextFieldValueById('current-donation'));
    const initialDonation = Number(getTextFieldValueById('initial-donation'));

    // Check if the donation amount is greater than the initial donation balance
    if (donationAmount > initialDonation) {
        alert("Donation amount exceeds the available balance.");
        return;
    }

    const newDonation = currentDonation + donationAmount;
    document.getElementById('current-donation').innerText = newDonation;

    const remainingDonation = initialDonation - donationAmount;
    document.getElementById('initial-donation').innerText = remainingDonation;



    // Add the donation transaction to the history section
    const div = document.createElement('div');
    div.classList.add('border-2', 'border-gray-200', 'p-4', 'my-4', 'rounded-lg', 'mx-20');
    div.innerHTML = `<h4 class="text-2xl font-bold mb-2">${donationAmount} Taka is Donated for Flood at Noakhali, Bangladesh</h4>
    <P class="text-xl ">Date: ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</p>`;

    document.getElementById('transaction-container').appendChild(div);

    openModal('my_modal_1');

});





