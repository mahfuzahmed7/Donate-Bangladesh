// Click a button to show a section and hide another section
document.getElementById('btn-history').addEventListener('click', function () {
    document.getElementById('show-transaction-section').classList.remove('hidden');
    document.getElementById('show-donation-section').classList.add('hidden');
});

document.getElementById('btn-donation').addEventListener('click', function () {
    document.getElementById('show-transaction-section').classList.add('hidden');
    document.getElementById('show-donation-section').classList.remove('hidden');
});


// Click a button to change the color which one are active now
document.addEventListener("DOMContentLoaded", function () {
    function toggleActiveStatus(button) {
        let buttons = document.querySelectorAll("#btn-donation, #btn-history");

        buttons.forEach(function (btn) {
            btn.style.backgroundColor = "white";
            btn.style.color = "black";
        });

        button.style.backgroundColor = "#3b82f6";
        button.style.color = "black";
    }

    document.getElementById("btn-donation").addEventListener("click", function () {
        toggleActiveStatus(this);
    });

    document.getElementById("btn-history").addEventListener("click", function () {
        toggleActiveStatus(this);
    });
});


// After a validate donation, show a successful modal 
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.showModal();

        const closeModalButton = modal.querySelector('.btn');
        closeModalButton.onclick = function () {
            modal.close();
        }

        window.onclick = function (event) {
            if (event.target === modal) {
                modal.close();
            }
        }
    } else {
        console.error('Modal not found:', modalId);
    }
}









