function search() {
   let userWord = document.getElementById('searchText').value;
   let towns = Array.from(document.querySelectorAll('#towns li'));

   let result = document.getElementById('result');
   let countResult = 0;

   for (let town of towns){
      if (town.textContent.includes(userWord) && userWord !== ''){
         town.style.fontWeight = 'bold';
         town.style.textDecoration ='underline';
         countResult++
      }else{
         town.style.fontWeight = 'normal';
         town.style.textDecoration ='none';
      }
   }

   result.textContent = `${countResult} matches found`;
}
