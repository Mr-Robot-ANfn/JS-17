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

const findS = (a, b, c) => {
  let s = (a + b + c) / 2;
  return s;
};

const findArea = (a, b, c) => {
  let S = findS(a, b, c);
  let area = S * (S - a) * (S - b) * (S - c);
  alert(area);
};

// findArea(2,2,2)

//QUESTION 4

// let m1=+prompt("Enter marks in subject 1")
// let m2=+prompt("Enter marks in subject 2")
// let m3=+prompt("Enter marks in subject 3")

let getAverage = (m1, m2, m3) => {
  let S = (m1 + m2 + m3) / 3;
  return S;
};

let getPercentage = () => {
  let om = ((m1 + m2 + m3) / 300) * 100;
  return om;
};

let getMarks = () => {
  alert("Average is: " + getAverage(m1, m2, m3));
  alert("percentage is: " + getPercentage());
};

// getMarks();

//QUESTION 5

const getIndex = (word, element) => {
  for (let index = 0; index < word.length; index++) {
    if (word[index] == element) {
      return index;
    }
  }
};

// let word=prompt("Enter the word")
// let element=prompt("Enter the element you want to search by index in your given word")
// console.log(getIndex(word,element));

//QUESTION 6

const getVowelsDelete = (word) => {
  return word.replace(/[AEIOUaeiou]/g,"")
}

// let word = prompt("enter a word");
// alert("word after deleting all the wovels will be : ");
// console.log(getVowelsDelete(word));


//QUESTION 7

const getVowelOccurences=(word)=>{

  let sentence=word.toLowerCase();
  let count=0;

  for (let i = 0; i < sentence.length-1; i++) {
  
    const curr=sentence[i];
    const next=word[i+1];

    switch (curr) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        if('aeiou'.includes(next)){
          count++;
        }
        break;
      default:
        break;
    }
  }
  return count;

}

// let w=prompt("Enter the line")
// console.log("total number of vowel occurences in line is: "+getVowelOccurences(w));


//QUESTION 8

const getkmInMeters=(km)=>{
  ans=km*1000
  return ans
}
const getkmInfeet=(km)=>{
  ans=km*3280.84
  return ans
}
const getkmInInches=(km)=>{
  ans=km*39370.1
  return ans
}
const getkmInCm=(km)=>{
  ans=km*100000
  return ans
}

// let km=+prompt("enter distance in Kilometers")
// console.log("distance in Meters is: "+getkmInMeters(km)+" m");
// console.log("distance in Feet is: "+getkmInfeet(km)+" f");
// console.log("distance in Inches is: "+getkmInInches(km)+" in");
// console.log("distance in Centimeter is: "+getkmInCm(km)+" cm");


const getOvertimePay=(hours)=>{
  let money=0;
  if (hours>40) {
    for(let i=41; i<=hours;i++){
      money+=12;
    }
    
  }
  else{
    alert("No overtime by the Employee so no overtime money will be paid ")
  }
  return money;
}


// let h=+prompt("Enter the Hours You have Worked")
// console.log("Total Money:"+getOvertimePay(h)+" Rupees");


const calculateNotes = (amount) => {


  let hundreds = Math.floor(amount / 100);
  let remainder = amount % 100;

  let fifties = Math.floor(remainder / 50);
  remainder %= 50;

  let tens = Math.floor(remainder / 10);

  return {
    "100 Notes": hundreds,
    "50 Notes": fifties,
    "10 Notes": tens,
  };
};

// const amount = 750; // Input amount
// console.log(calculateNotes(amount));
