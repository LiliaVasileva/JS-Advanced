// function create(words) {
//    let existingDiv = document.getElementById('content');
//    for (let word of words){
//       let newDivElement = document.createElement('div');
//       let newParagraphElement = document.createElement('p')
//       newParagraphElement.textContent = word;
//       newParagraphElement.style.display = 'none';
//       newDivElement.appendChild(newParagraphElement);
//       newDivElement.addEventListener('click', (e) => {
//          e.target.childNodes[0].style.display ='initial';
//       });
//       existingDiv.appendChild(newDivElement);
//    };
// }

// Second 

function create(input) {
   let parentElement = document.getElementById('content');
   let elements = input;

   for (let i = 0; i < elements.length; i++) {

      let div = document.createElement('div');
      let p = document.createElement('p');
      let text = document.createTextNode(elements[i]);

      p.appendChild(text);
      p.style.display = 'none';

      div.appendChild(p);

      div.addEventListener('click', (e) => {
         e.target.children[0].style.display = 'block'
      })

      parentElement.appendChild(div);

   }
}