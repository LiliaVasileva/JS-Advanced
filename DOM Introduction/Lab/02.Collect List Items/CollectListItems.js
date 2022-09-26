function extractText() {
    let ulElements = document.getElementById('items');
    // взима текстовото съдържание и ги залепя//

    let textAreaElement = document.getElementById('result');
    textAreaElement.textContent = ulElements.textContent;

};