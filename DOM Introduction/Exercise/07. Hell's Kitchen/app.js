function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let input = document.querySelector('#inputs textarea').value;
      let avgSalary = 0;
      let totalSalary = 0;
      let currentAvgSalary = 0;
      let bestName = '';
      let output = {};

      let restaurantInfo = input.split('",');

      for (restaurant of restaurantInfo) {
         let workersInfo = Array(restaurant.split(' - ')[1]);

         console.log(workersInfo)


         for (worker of workers){
            let name, salary = worker.split(' ');
            console.log(name);
            console.log(salary);
         };
      }



      
   }
}