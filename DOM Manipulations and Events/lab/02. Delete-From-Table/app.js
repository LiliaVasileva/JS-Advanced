function deleteByEmail() {
    let emailInput = document.querySelector('input[name="email"]');
    let emailCellElements = document.querySelectorAll('tr td:nth-of-type(2)');
    let resultElement = document.getElementById('result');

    let emailElements = Array.from(emailCellElements);
    let targetElement = emailElements.find(x => x.textContent == emailInput.value);

    if(targetElement){
        targetElement.parentNode.remove();
       resultElement.textContent = 'Deleted.'; 
    }else{
        resultElement.textContent = 'Not found.';
    }
}

    // Applies for NodeList and HTML Collection
    // for (const tdElement of emailCellElements){
    //     console.log(tdElement.textContent)
    // }

    // how to delete an Element :
    // targetElement.parentNode.remove();

    //  Applies only for NodeList
    // let emailElements = Array.from(emailCellElements);

    // old way of deleting 
    // targetElement.parentNode.removeChild(targetElement)