function addItem() {
    let inputElement = document.getElementById('newItemText');
    let ulElement = document.getElementById('items');
    
    let liElement = document.createElement('li');
    liElement.textContent = inputElement.value;

    // this is the way to clear input values
    inputElement.value = '';

    let linkElement = document.createElement('a')
    linkElement.href = '#';
    linkElement.textContent = '[Delete]';

    linkElement.addEventListener('click', (e) =>{
        e.currentTarget.parentElement.remove();
    })
    
    liElement.appendChild(linkElement);
    
    ulElement.appendChild(liElement);    
}