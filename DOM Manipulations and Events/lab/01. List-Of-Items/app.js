function addItem() {
    let inputElement = document.getElementById('newItemText');
    let liElement = document.createElement('li');
    let ulElement = document.getElementById('items');

    liElement.textContent = inputElement.value;

    ulElement.appendChild(liElement);
    
}