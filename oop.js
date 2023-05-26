//oop in javascript

//   function BankAccount(customerName, balance=0){
//     this.customerName=customerName;
//     this.accountNumber= Date.now();
//      this.balance= balance;};
//     //kunai pani property ma function add vayo vannya method hunxa;
//     this.deposit= function(amount){
//         this.balance+=amount;
//     };
//     this.withdraw= function(amount){
//         this.balance-=amount;
// //     }; 

 
// const sita = new BankAccount("sita", 2000);


// // BankAccount.prototype.deposite = function(amount){
//     this.balance += amount;
//  };
//  BankAccount.prototype.withdraw = function(amount){
//     this.balance -= amount;
//  };

//  sita.deposite(3000);

//  console.log(sita);

// const ramaccount = new BankAccount("ram", 677);
// const shyamaccount = new BankAccount("shyam", 899);
// console.log(ramaccount);
// console.log(shyamaccount);
//  const myform=document.querySelector("#myform");
//  const customerName= document.querySelector("#customerName");
//  //const accountNumber= document.querySelector("#accountName");
//  const balance= document.querySelector("#balance");
//   const depositeform= document.querySelector("#depositeform");
//   const accountNumber= document.querySelector("#number");
//   const amount = document.querySelector("#amount");

//  let accounts =[];
//  myform.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     const newAccount= new BankAccount(customerName.value, +balance.value);
//     console.log(newAccount);

//     accounts.push(newAccount);
//     console.log(accounts);
//  });

//  depositeform.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     const account = accounts.find(
//         (item)=> item.accountNumber === +accountNumber.value);
//     if(account){
//         account.deposit(+amount.value);
//         console.log(accounts);
//     }
//  });


 //prototype in js: object 

 
//  const ramaccount = new BankAccount("Ram", 6000);
//  const hariaccount = new BankAccount("hari", );
//  const sitaaccount = new BankAccount("sita",9000);
//   //hariaccount.balance=3000; //we should follow encapsulation, setter and getter;
// //  ramaccount.deposit(7000);
// //  ramaccount.withdraw(3000);
// // hariaccount.deposit(2999);
// // hariaccount.withdraw(199);
// //  console.log(ramaccount);
// //  console.log(hariaccount);
// console.log(sitaaccount);
// sitaaccount.deposit(12000);
// sitaaccount.withdraw(2000);
  
