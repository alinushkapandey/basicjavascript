//oop in javascript


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
  
//class in js

// class BankAccount{
//     constructor(customername, balance=0){
//         this.customername=customername;
//         this.accountnumber=Date.now();
//         this.balance=balance;

//     }

//     deposite(amount){
//         this.balance += amount;
//     }
//     withdraw(amount){
//         this.balance -= amount;
//     }
// }
// const ramaccount = new BankAccount("ram",4000);
// ramaccount.deposite(4000);
// const shyamaccount = new BankAccount("shyam",2000);
// shyamaccount.deposite(12000);
// shyamaccount.withdraw(500);
// const sitaaccount = new BankAccount("sita",9000);
// sitaaccount.deposite(3000);
// sitaaccount.withdraw(1000);
// console.log(ramaccount);
// console.log(shyamaccount);
// console.log(sitaaccount);


// function Dog(name, breed){
//     animal.call(this.name);
//     this.breed = breed;
// }
// Dog.prototype = Object.create(animal .prototype);
// Dog.prototype.bark= function(){
//     console.log(`${this.name}barks.`);
// }
// const spot = new Dog("spot", "golden Retriever");
// spot.speak();
// spot.bark();
// console.log(spot.breed);




//inheritance 
//super= it is used to inherit the properties of constructor


// class BankAccount{
//     #balance;
    
//     constructor(customername, balance=0){
//         this.customername = customername;
//      this.accountnumber = Date.now();
//      this.#balance = balance;
// }
// deposite(amount){
//     this.#balance += amount;
// }

// withdraw(amount){
//     this.#balance -= amount;
// }
// setbalance(amount){
//     this.#balance = amount;
// }
// getbalance(amount){
//     return this.#balance;
// }
// }

// class Savingaccount extends BankAccount{
//     transactionslimit = 50000;
//     constructor(customername, balance ){
//         super(customername, balance);
//     }
//      #calculatingintrest(amount){
//         console.log("calculating intrest is :" + amount);
//      }
//     takepersonalloan(amount){
//         this.#calculatingintrest(amount);
//         console.log("taking personalloan is"+amount);
//     }
// }
// const aliaccount = new Savingaccount("ali",6000);
// aliaccount.deposite(40000);

// aliaccount.withdraw(2000);
// console.log(aliaccount);



// class currentaccount extends BankAccount{
//     transactionslimit = 50000;
//     constructor(customername, balance ){
//         super(customername, balance);
//     }
//     takepersonalloan(amount){
//         console.log("taking personalloan is"+amount);
//     }
// }
// const parulaccount = new currentaccount("parl",6000);
// parulaccount.deposite(40000);
// parulaccount.withdraw(2000);
// console.log(parulaccount);



// const ramaccount = new BankAccount("ram",3000);
// const hey = ramaccount.getbalance();
// console.log(hey);
// console.log(ramaccount);

