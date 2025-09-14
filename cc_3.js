//Step2
const customers = [
{   name:"Alondra Miranda Pagan",
    email:"alondramp@email.com", 
    purchases:["pizza", "iphone"]
},
{   name:":Luz Pagan",
    email:"luzp@email.com", 
    purchases:["makeup", "candy"]
},
{   name:"Fabian Manuel",
    email:"fabianm@email.com", 
    purchases:["funkpop", "laptop"]
}
];
      
//Step3P1
customers.push ({
    name:"Alexis Keeter", 
    email:"keeter2@email.com", 
    purchases:["capybaras", "Dr Pepper","Food","Dog","IpadPro"]
});

//Step3P2
const firstcustomers = customers.shift();

//Step4
customers[0].email="luzpagan@newemail.com";
customers[0].purchases.push("camera");

//Step5
    customers.forEach(customer =>
    {
    console.log(`Name: ${customer.name}`);
    console.log(`Email: ${customer.email}`);
    console.log(`Total Purchases: ${customer.purchases.length}`)
    });
