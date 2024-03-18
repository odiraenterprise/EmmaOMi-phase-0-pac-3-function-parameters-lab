function introduction(name){
    console.log(`Hi, my name is ${name}!`);


}
function introductionWithLanguage(name,language) {
    console.log(`Hi, my name is ${name} and I am learning to program in  ${language}!`);
  }

  function introductionWithLanguageOptional(name,language ="JavaScript") {
    console.log(`Hi, my name is ${name} and I am learning to program in  ${language}!`);
  }



  
console.log(introduction("Aki")); // Output: Hi, my name is Aki!
console.log(introductionWithLanguage("Aki", "Ember.js")); // Output: Hi, my name is Aki and I am learning to program in Ember.js!
console.log(introductionWithLanguageOptional("Gracie")); // Output: Hi, my name is Gracie and I am learning to program in JavaScript!
console.log(introductionWithLanguageOptional("Gracie", "Python")); // Output: 