let employee = {  
    name: 'Shivam Chaurasia',  
    designation: 'JavaScript Developer',  
    empId:'10',
    address: {  
        city: 'Boisar',  
        district: 'Palghar',
        state:'Maharashtra',  
        country: 'India',
        area_pincode:'401501'     
    }
};  
console.log("Before Copy");
console.log(employee);
let createcopy = Object.assign({}, employee);
createcopy.name = 'Valroy Kadam';
createcopy.empId = '20';  
createcopy.city = 'Austin Town';  
createcopy.district = 'Bangalore';  
createcopy.state = 'Karnataka';  
createcopy.country = 'India';
createcopy.area_pincode='560047'
console.log("After Copy");  
console.log(createcopy);  
  