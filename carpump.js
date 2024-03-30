class Car {
    
  constructor(Brand, Model, Year, Color, Price, Gas) {
    this.Brand = Brand;
    this.Model = Model;
    this.Year = Year;
    this.Color = Color;
    this.Price = Price;
    this.Gas = Gas;
   
  };

 
  Honk() {
    console.log("Tuut Tuut");
  }
}

//object of Cars initialized
let car1 = new Car(
  (Brand = "Honda"),
  (Model = " CR-V"),
  (Year = 2023),
  (Color = "Red"),
  (Price = 50000),
  (Gas = 45)
);
let car2 = new Car(
  (Brand = "Ford"),
  (Model = " F-150"),
  (Year = 2020),
  (Color = "Black"),
  (Price = 25000),
  (Gas = 30)
);
let car3 = new Car(
  (Brand = "BMW"),
  (Model = "X5"),
  (Year = 2022),
  (Color = "Green"),
  (Price = 60000),
  (Gas = 65)
);
let car4 = new Car(
  (Brand = "Mazda"),
  (Model = "CX-5"),
  (Year = 2019),
  (Color = "White"),
  (Price = 15000),

  (Gas = 60)
);
let car5 = new Car(
  (Brand = "Audi"),
  (Model = "Q7"),
  (Year = 2018),
  (Color = "Silver"),
  (Price = 52000),
  
  (Gas = 47)
);
let car6 = new Car(
  (Brand = "Kia"),
  (Model = "Forte"),
  (Year = 2020),
  (Color = "Blue"),
  (Price = 21000),
  
  (Gas = 56)
);


//method name for html
function runRace(){
let date = new Date();
 let dateyear =  date.getFullYear();
let aTurnLitres = 5;
let aYearDifferenceLossLitres = 1;
let ageDifference =0;
let netGasLitresRemaining = 0;
let currentCar = new Car();
ageDifference = dateyear -  car1.Year;

// check years difference btw current year and car year
car1['Gas']= car1.Gas - (ageDifference * aYearDifferenceLossLitres);
let ageDifference2 = dateyear -  car2.Year;
car2['Gas']= car2.Gas - (ageDifference2 * aYearDifferenceLossLitres);
let ageDifference3 = dateyear -  car3.Year;
car3['Gas']= car3.Gas - (ageDifference3 * aYearDifferenceLossLitres);
let ageDifference4 = dateyear -  car4.Year;
car4['Gas']= car4.Gas - (ageDifference4 * aYearDifferenceLossLitres);
let ageDifference5 = dateyear -  car5.Year;
car5['Gas']= car5.Gas - (ageDifference5 * aYearDifferenceLossLitres);
let ageDifference6 = dateyear -  car6.Year;
car6['Gas']= car6.Gas - (ageDifference6 * aYearDifferenceLossLitres);


//counting the seven turns
for(let numberOfturn = 0; numberOfturn <=7 ; numberOfturn++){
  let display =' ';

  if(numberOfturn == 0){
    currentCar = car1; 

     //concatenating the values
    display += `[`;
    display += `Brand: ${currentCar.Brand},     `;
    display += `Model: ${currentCar.Model},     `;
    display += `Year: ${currentCar.Year},     `;
    display += `Color: ${currentCar.Color},     `;
    display += `Price: ${currentCar.Price},     `;
    display += `Gas: ${currentCar.Gas}, `;
    display += `]`;
 
 
    currentCar = car2; 
    //honking tuut tuut
    currentCar.Honk();
     //concatenating the values
    display += `[`;
    display += `Brand: ${currentCar.Brand},     `;
    display += `Model: ${currentCar.Model},     `;
    display += `Year: ${currentCar.Year},     `;
    display += `Color: ${currentCar.Color},     `;
    display += `Price: ${currentCar.Price},     `;
    display += `Gas: ${currentCar.Gas}, `;
    display += `]`;
 
 
   currentCar = car3; 
   //honking tuut tuut
   currentCar.Honk();
     //concatenating the values
   display += `[`;
   display += `Brand: ${currentCar.Brand},     `;
   display += `Model: ${currentCar.Model},     `;
   display += `Year: ${currentCar.Year},     `;
   display += `Color: ${currentCar.Color},     `;
   display += `Price: ${currentCar.Price},     `;
   display += `Gas: ${currentCar.Gas}, `;
   display += `]`;
 
 
  currentCar = car4; 
     //honking tuut tuut
     currentCar.Honk();
     //concatenating the values
    display += `[`;
    display += `Brand: ${currentCar.Brand},     `;
    display += `Model: ${currentCar.Model},     `;
    display += `Year: ${currentCar.Year},     `;
    display += `Color: ${currentCar.Color},     `;
    display += `Price: ${currentCar.Price},     `;
    display += `Gas: ${currentCar.Gas}, `;
      display += `]`;
 
    currentCar = car5; 
    currentCar.Honk();
     //concatenating the values
    display += `[`;
    display += `Brand: ${currentCar.Brand},     `;
    display += `Model: ${currentCar.Model},     `;
    display += `Year: ${currentCar.Year},     `;
    display += `Color: ${currentCar.Color},     `;
    display += `Price: ${currentCar.Price},     `;
    display += `Gas: ${currentCar.Gas}, `;
    display += `]`;
 
 
   currentCar = car6; 
     //concatenating the values
   display += `[`;
   display += `Brand: ${currentCar.Brand},     `;
   display += `Model: ${currentCar.Model},     `;
   display += `Year: ${currentCar.Year},     `;
   display += `Color: ${currentCar.Color},     `;
   display += `Price: ${currentCar.Price},     `;
   display += `Gas: ${currentCar.Gas}, `;
   display += `]`;
  }else{
    currentCar = car1; 

    //honking tuut tuut
    currentCar.Honk();

    //getting the difference of the fuel
    netGasLitresRemaining = currentCar.Gas - aTurnLitres;
    //modifying the Gas change
    currentCar['Gas']=netGasLitresRemaining;
    //concatenating the values
    display += `[`;
   display += `Brand: ${currentCar.Brand},     `;
   display += `Model: ${currentCar.Model},     `;
   display += `Year: ${currentCar.Year},     `;
   display += `Color: ${currentCar.Color},     `;
   display += `Price: ${currentCar.Price},     `;
   display += `Gas: ${currentCar.Gas}, `;
   display += `]`;


   currentCar = car2; 
   //honking tuut tuut
   currentCar.Honk();

   //getting the difference of the fuel
   netGasLitresRemaining = currentCar.Gas - aTurnLitres;
   //modifying the Gas change
   currentCar['Gas']=netGasLitresRemaining;
   //concatenating the values
   display += `[`;
   display += `Brand: ${currentCar.Brand},     `;
   display += `Model: ${currentCar.Model},     `;
   display += `Year: ${currentCar.Year},     `;
   display += `Color: ${currentCar.Color},     `;
   display += `Price: ${currentCar.Price},     `;
   display += `Gas: ${currentCar.Gas}, `;
   display += `]`;


  currentCar = car3; 
  //honking tuut tuut
  currentCar.Honk();

  //getting the difference of the fuel
  netGasLitresRemaining = currentCar.Gas - aTurnLitres;
  //modifying the Gas change
  currentCar['Gas']=netGasLitresRemaining;
  //concatenating the values
  display += `[`;
  display += `Brand: ${currentCar.Brand},     `;
  display += `Model: ${currentCar.Model},     `;
  display += `Year: ${currentCar.Year},     `;
  display += `Color: ${currentCar.Color},     `;
  display += `Price: ${currentCar.Price},     `;
  display += `Gas: ${currentCar.Gas}, `;
  display += `]`;


 currentCar = car4; 
 
    //honking tuut tuut
    currentCar.Honk();

    //getting the difference of the fuel
    netGasLitresRemaining = currentCar.Gas - aTurnLitres;
    //modifying the Gas change
    currentCar['Gas']=netGasLitresRemaining;
    //concatenating the values
   display += `[`;
   display += `Brand: ${currentCar.Brand},     `;
   display += `Model: ${currentCar.Model},     `;
   display += `Year: ${currentCar.Year},     `;
   display += `Color: ${currentCar.Color},     `;
   display += `Price: ${currentCar.Price},     `;
   display += `Gas: ${currentCar.Gas}, `;
     display += `]`;

   currentCar = car5; 
   netGasLitresRemaining = currentCar.Gas - aTurnLitres;
   currentCar['Gas']=netGasLitresRemaining;
   currentCar.Honk();
   display += `[`;
   display += `Brand: ${currentCar.Brand},     `;
   display += `Model: ${currentCar.Model},     `;
   display += `Year: ${currentCar.Year},     `;
   display += `Color: ${currentCar.Color},     `;
   display += `Price: ${currentCar.Price},     `;
   display += `Gas: ${currentCar.Gas}, `;
   display += `]`;


  currentCar = car6; 
 
    //honking tuut tuut
    currentCar.Honk();

    //getting the difference of the fuel
    netGasLitresRemaining = currentCar.Gas - aTurnLitres;
    //modifying the Gas change
    currentCar['Gas']=netGasLitresRemaining;
    //concatenating the values
  display += `[`;
  display += `Brand: ${currentCar.Brand},     `;
  display += `Model: ${currentCar.Model},     `;
  display += `Year: ${currentCar.Year},     `;
  display += `Color: ${currentCar.Color},     `;
  display += `Price: ${currentCar.Price},     `;
  display += `Gas: ${currentCar.Gas}, `;
  display += `]`;
  }
  //display the value of each turn in html
  console.log(numberOfturn);
 document.getElementById(`car${numberOfturn}`).innerHTML = display;

}

}

runRace();

