//QUESTION 1
const powerFunction = () => {
  let a = +prompt("Enter the base");
  let b = +prompt("Enter the power");
  alert(a ** b);
};

// powerFunction()

//QUESTION 2

const leapYear = () => {
  let a = +prompt("Enter an year");
  if (a % 4 == 0) {
    alert("leap Year");
    return;
  }
  alert("not a leap year");
};

// leapYear();


//QUESTION 3

const findS=(a,b,c)=>{
    let s=(a+b+c)/2
    return s;
}

const findArea=(a,b,c)=>{
    let S=findS(a,b,c);
    let area=S*(S-a)*(S-b)*(S-c)
    alert(area);
}

// findArea(2,2,2)

//QUESTION 4

let m1=+prompt("Enter marks in subject 1")
let m2=+prompt("Enter marks in subject 2")
let m3=+prompt("Enter marks in subject 3")



let getAverage=(m1,m2,m3)=>{
    let S=((m1+m2+m3)/3)
    return S;    
}

let getPercentage=()=>{
    let om=(((m1+m2+m3)/300)*100)
    return om
}

let getMarks=()=>{
    alert("Average is: "+getAverage(m1,m2,m3))
    alert("percentage is: "+getPercentage())
}

// getMarks();

//QUESTION 5
