/*
    ASSIGNMENT RULES
    - All the answers must be in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for tutor's help
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account before 17.00 (Berlin Time)
*/

//JS Basics

/* Ex.A
   Create a variable test that contains a string
*/
    let test = "Stringinjo"
/* Ex.B
    Create a variable sum that contains the result of the sum between 10 and 20 
*/
    const sum = 10+20;
/* Ex.C 
    Create a variable random that contains a random number between 0 and 20 (should be randomly created at each execution)
*/
      let random = Math.floor(Math.random()*21);
      console.log(random);
/* Ex.D
    Create a variable Me containing and object with the current information: Name = Your Name, Surname = Your Surname, Age = Your Age
*/
    let me={
      name : "Enis",
      Surname:"Azizi",
      age:25,
    }
    console.log(me);
/* Ex.E 
    Programmatically remove the Age from the previously create object Me
*/
      delete me.age;
      console.log(me);
/* Ex.F 
   Programmatically add to the object Me an array "skills" that contains the programming languages that you know
*/
    me.array=["HTML","CSS","Javascript","PHP","Mysql","OOP"];
    console.log(me)
/* Ex.G 
   Programmatically remove the last skill from the array "skills" inside of the "me" object
*/
    me.array.pop();
    console.log(me.array)
// JS Functions
/* Ex.1
    Write the function Dice that randomize an integer number between 1 and 6
*/
    let Dice = function(){
      return Math.floor(Math.random()*6)+1;
    }
    console.log(Dice())
/* Ex.2 
    Write the function WhoIsBigger that receives 2 numbers and returns the bigger of the 2
*/
    let WhoIsBigger = function(x,y){
      if(x>y){
        return x;
      }else{
        return y;
      }
    }
    console.log(WhoIsBigger(5,7));
/* Ex.3
    Write the function SplitMe that receives a String and returns an array with every word in that string
    Ex. SplitMe("I love coding") => returns [ "I","Love","Coding"]
*/
    let SplitMe = (S)=>{
      return S.split(" ");
    }
    console.log(SplitMe("Enis Azizi"));
/* Ex.4
    Write the function DeleteOne that receives a string and a boolean. If the boolean is true, should return the string without the first letter, otherwise should remove the last one
*/
    let DeleteOne = (S,B)=>{
      if(B){
         return  S.substring(1);
      }else{
        return S.substring(0,S.length - 1);  
      }
    }
    console.log(DeleteOne("Strive",false));
/* Ex.5
   Write the function OnlyLetters that receives a string, removes all the numbers and returns it.
   Ex.: OnlyLetters("I love 123 whatever")  => returns "I love whatever"
*/
const onlyLetters = (S) => {

  return S.replace(/(\d+)/g, "");
};
console.log(onlyLetters("Enis 123 asda 12"));

/* Ex.6 
   Write the function IsThisAnEmail that receives a string and returns true if the string is a valid email.
*/
      let IsThisAnEmail = (S)=> {
      let verify = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return verify.test(S);
}
  console.log(IsThisAnEmail("enisazizi@hotmail.com"));
/* Ex.7
   Write the function WhatDayIsIt that should return the day of the week
*/
const d = new Date();
const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

const WhatDayIsIt = weekday[d.getDay()];

console.log(WhatDayIsIt);

  
/* Ex.8
    Write the function RollTheDices that receives a numeric input and returns an object that contains both the sum of the value of the dices and the dices itself
    This function should use the Dice function defined in Ex1
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [ 3, 3, 4]
    }
*/    let obj={
      sum: 0,
      values:[],
    }
     
      let RollTheDices=(x)=>{
          for(let i=0; i<x; i++){
            obj.values.push(Dice())

          }
          obj.values.forEach(i=>obj.sum+=i)
          return obj;
      }
      

      console.log(RollTheDices(3));

/* Ex.9
   Write the function HowManyDays that receives a Date and return the number of days that has passed since that day.
*/
  
  
/* Ex.10
   Write the function IsTodayMyBDay that returns true if it's your birthday, false otherwise
*/

 
// JS Arrays // Objs
// NOTE: movies array is defined at the end of the file

/* Ex.11
   Write the function DeleteProp that receives an object and a string, and returns the object after deleting the property with that given name
*/

/* Ex.12 
    Write the function OlderMovie that finds the older movie in the array
*/
    
/* Ex.13
    Write the function CountMovies that returns the number of movies into the array
*/

/* Ex.14
    Write the function OnlyTitles that creates an array with only the titles of the movies
*/

/* Ex.15
   Write the function OnlyThisMillennium that returns only the movies produced in this millennium
*/

/* Ex.16 
    Write the function GetMovieById that receives an ID and returns the movie with the given ID
*/

/* Ex.17
    Write the function SumYears that returns the sum of the years the movie has been produced
*/

/* Ex.18
    Write the function SearchMovie that receives a string and returns all the movies with that string in the title
*/

/* Ex.19
    Write the function SearchAndDivide that receives a string and returns an object with an array "match" with all the movies that contains the title and another array "nonMatch" with the other movies
*/

/* Ex.20
   Write the function DeleteX that receives a number and returns an array without the element in that position
*/

// JS Advanced

/* Ex.21
  Create a function HalfTree that recives the height creates an "*" half tree with that height
  Example:
  HalfTree(3)
  *
  **
  ***
*/

/* Ex.22 
  Create a function Tree that receives the height and creates an "*" tree with that height
  Example: 
  Tree(3)
    *  
   *** 
  *****
*/

/* Ex.23
  Create a function IsItPrime that receives a number and return true if the number is a prime number
*/

/* Movies array is an example array, used for the exs. Don't change it :)  */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];


// exersice 11
objs = movies[0];
let DeleteProp = (Obj,S)=>{
  if(S===objs.Year){
    delete objs.Year;
    return objs;
  }else if(S===objs.Type) {
    delete objs.surname;
    return objs;
  }else if(S===objs){
    delete objs.Poster;
    return objs;
  }else{
    console.log("its not the correct property");
  }
}
console.log(DeleteProp(objs,"20ad1"));

// exercise 12
   

const olderMovie = () => {
  let year = [];
  for (i = 0; i < movies.length; i++) {
    year.push(movies[i]["Year"]);
  }
  year = year.map(Number);
  minYear = Math.min(...year);
  return minYear;
};
console.log(olderMovie());

// exercise 13
let CountMovies=()=>{
  return movies.length;
}
console.log(CountMovies());

//exercise 14
let OnlyTitles = ()=>{
  let Titles=[];
  for(i=0;i<movies.length;i++){
    Titles.push(movies[i].Title)
  }
  return Titles;
}
console.log(OnlyTitles());

//exercise 15
let OnlyThisMillennium = ()=>{
  let year = [];
  for (i = 0; i < movies.length; i++) {
    year.push(movies[i]["Year"]);
  }
  year = year.map(Number);
  let years=[];
  for(i=0;i<year.length;i++){
    if(year[i]>2000){
      years.push(year[i]);
    }
    
  }
  return years;
}
console.log(OnlyThisMillennium());

//exercise 16

let GetMovieById = (id="")=>{
  for(i=0;i<movies.length;i++){
    if(id === movies[i].imdbID){
      return movies[i].Title + movies[i].imdbID;
    }
  }
}
console.log(GetMovieById("tt4154756"))

//exercise 17 
  
 let SumYears =()=>{
  let year = [];
  for (i = 0; i < movies.length; i++) {
    year.push(movies[i]["Year"]);
  }
  year = year.map(Number);
  let sum =0;
  for(i=0;i<year.length;i++){
    sum+=year[i];
  }
  return sum;
 }
 console.log(SumYears());

 // exercise 18    
 // Write the function SearchMovie that receives a string and returns all the movies with that string in the title


 const searchMovie = (S) => {
   let moviii=[];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.match(S)) {
      moviii.push(movies[i]);
    
    }
  }
  return moviii;
};

console.log(searchMovie("Av"));



 // exercise 19 Write the function SearchAndDivide that receives a string and returns an object with an array "match" with all the movies that contains the title and another array "nonMatch" with the other movie

let SearchAndDivide = (S)=>{
  let moviii=[];
  let movii=[];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.match(S)) {
      moviii.push(movies[i]);
    }else if (!movies[i].Title.match(S)){
      movii.push(movies[i]);
    }
  }
  return moviii +"MAtched" + movii + "unmached";

}
console.log(SearchAndDivide());

/* Ex.20
   Write the function DeleteX that receives a number and returns an array without the element in that position
*/

let DeleteX = (x)=>{
  movies.splice(x,1);
  return movies;
}
console.log(DeleteX(3));

/* Ex.21
  Create a function HalfTree that recives the height creates an "*" half tree with that height
  Example:
  HalfTree(3)
  *
  **
  ***
*/

    let HalfTree=(x)=>{
     for (let i=0;i<x;i++){
      for(let j=0; j<x ; j++){
      if(j<=i){
      console.log("*");
      }
      console.log(/n)
      }
     }
    console.log(HalfTree(3))
/* Ex.22 
  Create a function Tree that receives the height and creates an "*" tree with that height
  Example: 
  Tree(3)
    *  
   *** 
  *****
*/