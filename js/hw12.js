// Напиши скрипт, який, для об'єкта user, послідовно:

// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of



 const user = {
   name: "ivan",
   age: 15,
   hobby: "football",
   premium: true,
 }

 user.mood = "happy";
 user.hobby = "skydiving";
 user.premium = false;


 const keys = Object.keys(user);
 for (const key of keys) {
   console.log(`${key}: ${user[key]}`);
  
 }



 console.log(user);
 console.log(keys);




// Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.


 const userInfo = {
   name: "Nazar",
   age: 17,
   city: "Kyiv",
 }

 function count(obj) {
   return Object.keys(obj).length;
 }


 console.log(count(userInfo));



// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".



 const team = {
   Anna: 29,
   Sergiy: 35,
   Oksana: 31,
   Ivan: 41,

 }



 function findBestEmployee(employees) {
   let bestPlayer = "";
   let max = 0;

   for (const name in employees) {
     if (employees[name] > max) {
       max = employees[name];
       bestPlayer = name;
     }
   }

   return bestPlayer;
 }




 console.log(findBestEmployee(team)); 





// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".




 const salaries = {
   Anna: 5000,
   Ivan: 7200,
   Oksana: 6100,

 }


 function countTotalSalary(employees) {
   let total = 0;

   for (const name in employees) {
     total += employees[name];
   }

   return total;
 }



 console.log(countTotalSalary(salaries)); 





// Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. Повертає масив значень певної властивості prop з кожного об'єкта в масиві.



 const products = [
   { name: "Apple", price: 100, quantity: 1 },
   { name: "Sumsung", price: 20, quantity: 120 },
   { name: "Xiaomi", price: 5, quantity: 1000 },
 ]


 function getAllPropValues(arr, prop) {
   const result = []; 

   for (let i = 0; i < arr.length; i++) {
     const item = arr[i]; 
     const value = item[prop];

   
     if (value !== undefined) {
       result.push(value);
     }
   }

   return result; 
 }


 console.log(getAllPropValues(products, "name"));     
 console.log(getAllPropValues(products, "price"));    
 console.log(getAllPropValues(products, "quantity")); 





// Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).



//  Викличи функції для перевірки працездатності твоєї реалізації.



 const product = [
   { name: "Apple", price: 100, quantity: 2 },
   { name: "Samsung", price: 20, quantity: 120 },
   { name: "Xiaomi", price: 5, quantity: 1000 },
 ]




 function calculateTotalPrice(allProducts, productName) {
   let totalPrice = 0; 

   for (let i = 0; i < allProducts.length; i++) {
     const product = allProducts[i]; 

     if (product.name === productName) {
      
       totalPrice = product.price * product.quantity;
       break; 
     }
   }
   return totalPrice; 
 }


 console.log(calculateTotalPrice(product, "Apple"));
 console.log(calculateTotalPrice(product, "Samsung"));
 console.log(calculateTotalPrice(product, "Xiaomi"));