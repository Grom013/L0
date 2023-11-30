document.addEventListener('DOMContentLoaded', function() {
    const openPayBtn = document.querySelectorAll('.pay-delivery-btb');
    const overlay = document.getElementById('pay-popup-overlay');
    const closePayBtn = document.getElementById('closePayPopup');

    openPayBtn.forEach(function(button) {
        button.addEventListener('click', function() {
            overlay.style.display = 'block';
            document.querySelector('.pay-popup').style.display = 'block';
        });
    });

    overlay.addEventListener('click', function(event) {
        if (event.target === overlay || event.target === closePayBtn) {
            overlay.style.display = 'none';
            document.querySelector('.pay-popup').style.display = 'none';
        }
    });
});
