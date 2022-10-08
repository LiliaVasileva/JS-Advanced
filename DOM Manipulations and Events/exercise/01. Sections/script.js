function create(words) {
   let existingDiv = document.getElementById('content');
   for (let word of words){
      let newDivElement = document.createElement('div');
      let newParagraphElement = document.createElement('p')
      newParagraphElement.textContent = word;
      newParagraphElement.style.display = 'none';
      newDivElement.appendChild(newParagraphElement);
      newDivElement.addEventListener('click', (e) => {
         e.target.childNodes[0].style.display ='initial';
      });
      existingDiv.appendChild(newDivElement);
   };
}