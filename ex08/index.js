function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  // Only change code below this line
  let myHouse = new House(4);
  
  console.log(myHouse); // { numBedrooms: 4 }
  
  myHouse instanceof House; //true
  
  
  /*instanceof é usado para comparar se o objeto é true ou false */