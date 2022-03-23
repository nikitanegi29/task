//Non Primitive Dataypes

    let object={
        Pname: 'Nikita',
        age: 21,
        message:function(){
            console.log("Hello");
        }
    };
    object.message();
    let a = 0b11111111; // binary form of 255
    let b = 0o377; // octal form of 255
    let c = 0xff; //hexadecimal form of 255

    console.log( a == b );
//

    function readNum(){
        let num;
        do{
            num=prompt("Enter the valid number",'0');

        }while(!isFinite==num)
        return +num;
    }
    console.log(`Number: ${readNum()}`);

    let str = 'As sly as a fox, as strong as an ox';

//string searching

let target = 'as'; // let's look for it

let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;

  console.log( `Found at ${foundPos}` );
  pos = foundPos + 1; // continue the search from the next position
}

let styles = ['jazz','blues'];
styles.push('Rock-n-Roll');
styles[Math.floor((styles.length-1)/2)]='Classics';
console.log(styles);
console.log(styles.shift());
styles.unshift('Rap','Raggae');
console.log(styles);


function Total(){
let arr=[];
console.log(process());
function process(){
var values=+prompt("Enter the values",'');
if(values==''||values==null||!isFinite(values)) return;
else
arr.push(+values)
}
let sum=0;
for(let i=0;i<=arr.length;i++){
    sum+=values;
    return sum;
}
}
console.log(Total());

//Iteration
let range={ from:1,to:5,
[Symbol.iterator](){
    this.current = this.from;
    return this;
},
next(){
    if(this.current<=this.to){
        return{done:false,value:this.current++};
    
    }
    else{return{done:true};
}
}
};

for(let num of range){
    alert(num);
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  function sumsalaries(salaries){
      let sum=0;
      for(let values of Object.values(salaries)){
      sum+=salaries;
      }
  }
  alert( sumSalaries(salaries) );
////////


  let user = {
    name: 'John',
    age: 30
  };
  
  function count(obj){
      return Object.keys(obj).length;
      }
  alert( count(user) );

  

////////
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
function topSalaries(salaries){
    let topPaidPerson=null;
    let topSalary=0;
    for(const[name,salary] of Object.entries(salaries)){
        if (topSalary<salary){
            topSalary=salary;
            topPaidPerson=name;


        }
    }
    return topPaidPerson;
}

///////
console.log(new Date());
console.log(new Date(24 * 3600 * 1000));
console.log(new Date(-24 * 3600 * 1000));   

//////
function printNumbers(from,to){
    let current=from;
    let timeInterval=setInterval(function(){
        alert(current);
        if(current==to)
            clearInterval(timeInterval);
        current++


    },2000)
}
printNumbers(5,15);