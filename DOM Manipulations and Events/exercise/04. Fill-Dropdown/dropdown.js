// First solution not working in Judge: not working because it was created with onclick attr in the html, no\
// need for adding event on the button, it was originally created in the html file 
// function addItem() {
//     let dropDownMenu = document.getElementById('menu');
//     let button = document.querySelector('input[type=button]');

//     button.addEventListener('click', (e) => {
//         let newOptionTextElement = document.getElementById('newItemText');
//         let newOptionValueElement = document.getElementById('newItemValue');
//         let newOption = document.createElement('option');
//         newOption.textContent = newOptionTextElement.value;
//         newOption.value = newOptionValueElement.value;
//         dropDownMenu.appendChild(newOption);
//         newOptionTextElement.value = '';
//         newOptionValueElement.value = '';
//     }
//     )
// }

// Correct Second solution!!!!:

function addItem() {
    let newText = document.getElementById('newItemText').value;
    let newValue = document.getElementById('newItemValue').value;

    let option = document.createElement('option');
    option.text = newText;
    option.value = newValue;

    let menu = document.getElementById('menu');
    if(newText != '' && newValue != '') {
        menu.appendChild(option);
    }
    
    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';

}

