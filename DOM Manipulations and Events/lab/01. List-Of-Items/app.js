function addItem() {
    let inputElement = document.getElementById('newItemText');
    let ulElement = document.getElementById('items');
    
    let liElement = document.createElement('li');
    liElement.textContent = inputElement.value;
    
    ulElement.appendChild(liElement);    
}