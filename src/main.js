import validator from "validator";

console.log(
    "Is mango@mail.com a valid email?: ",
    validator.isEmail("mango@mail.com")
  ); 
  
  console.log(
    "Is Mangodogmail.com a valid email?: ",
    validator.isEmail("Mangodogmail.com")
  ); 