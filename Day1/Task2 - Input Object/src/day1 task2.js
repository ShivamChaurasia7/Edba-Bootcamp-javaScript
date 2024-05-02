// Example input 
// const person = {  name: "Some name" , age : 20} 

//Expected output 
//const personStructure = {  name: "String" , age : "Number"}


function getObjectStructure(obj) {
    const structure = {};
  
    for (let key in obj) {
      structure[key] = typeof obj[key];
    }
  
    return structure;
  }
  
  const person = { name: "Some name", age: 20 };
  
  const personStructure = getObjectStructure(person);
  console.log(personStructure);
  