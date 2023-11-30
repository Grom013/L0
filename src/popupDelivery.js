document.addEventListener('DOMContentLoaded', function() {
    const openDeliveryBtn = document.querySelectorAll('.basket__pay-delivery-btb');
    const overlay = document.getElementById('delivery-popup-overlay');
    const closeDeliveryBtn = document.getElementById('closePopup');
    openDeliveryBtn.forEach(function(button) {
        button.addEventListener('click', function() {
            overlay.style.display = 'block';
            document.querySelector('.delivery-popup').style.display = 'block';
        });
    });
    overlay.addEventListener('click', function(event) {
        if (event.target === overlay || event.target === closeDeliveryBtn) {
            overlay.style.display = 'none';
            document.querySelector('.delivery-popup').style.display = 'none';
        }
    });
});