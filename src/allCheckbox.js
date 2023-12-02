const selectAllCheckbox = document.getElementById('selectAll');
const childCheckboxes = document.querySelectorAll('.basket__checkbox');

function toggleCheckboxes(event) {
    const isChecked = event.target.checked;

    childCheckboxes.forEach((checkbox) => {
        checkbox.checked = isChecked;
    });
}

selectAllCheckbox.addEventListener('change', toggleCheckboxes);
