// call() method--------------------------------------------------------------
console.log("call() function ------------------");
var persion1 = {firstName: 'Ankit', lastName:'Sharma'};
var persion2 = {firstName: 'Eshani', lastName:'A. Sharma'};

function say(name){
    console.log(name + ' ' + this.firstName + ' ' + this.lastName);
}
say("Hello friends") // hello friends undefined undefined
say.call(persion1, "Hello") // Hello Ankit Sharma
say.call(persion2, "Hello Sir ji") // Hello Sir ji Eshani A. Sharma

// apply() method--------------------------------------------------------------
console.log("apply() function ------------------");
var persion3 = {firstName: 'Ankit', lastName:'Sharma'};
var persion4 = {firstName: 'Eshani', lastName:'A. Sharma'};

function say(name,value){
    console.log(name + ' ' + this.firstName + ' ' + this.lastName + ' ' + value);
}
say("Hello friends") // hello friends undefined undefined
say.apply(persion3, ["Hello"]) // Hello Ankit Sharma
say.apply(persion4, ["Hello Sir ji"," what is this? "]) // Hello Sir ji Eshani A. Sharma  what is this? 

// bind() method--------------------------------------------------------------
console.log("bind() function ------------------");
var persion1 = {firstName: 'Ankit', lastName:'Sharma'};
var persion2 = {firstName: 'Eshani', lastName:'A. Sharma'};

function say(value){
    console.log(value+ " hello" + ' ' + this.firstName + ' ' + this.lastName);
} 
var firstAnkit = say.bind(persion1, "aaaa")  
var secondAnkit = say.bind(persion2)  
firstAnkit()
secondAnkit()