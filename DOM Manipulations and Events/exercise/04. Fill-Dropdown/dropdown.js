function addItem() {
    let dropDownMenu = document.getElementById('menu');
    let button = document.querySelector('input[type=button]');

    button.addEventListener('click', (e) => {
        let newOptionTextElement = document.getElementById('newItemText');
        let newOptionValueElement = document.getElementById('newItemValue');
        let newOption = document.createElement('option');
        newOption.textContent = newOptionTextElement.value;
        newOption.value = newOptionValueElement.value;
        dropDownMenu.appendChild(newOption);
        newOptionTextElement.value = '';
        newOptionValueElement.value = '';

    }
    )
}