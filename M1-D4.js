/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.
*/
    const area =(l1,l2) => l1 * l2;

    console.log(area(2,3))
/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/
let crazySum= function(x,y){
    if(x===y){
       return 3*(x+y);
    }else{
       return x+y;
    }
}
console.log(crazySum(3,2))
/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/
 let crazyDiff = function(x){
    if(x>19){
        return 3*Math.abs(x-19);
    }else{
        return Math.abs(x-19);
    }
}
    console.log(crazyDiff(44))

 
/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/

let boundary = function(N){
    if(N>=20 && N<=100 || N===400){
        return true;
    }else{
        return false;
    }
}
console.log(boundary(11))

/* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to S "Strive" in front of a given string, if the given string begins with "Strive" then return the original string.
*/

let strivify = function(S=""){
    if(S.startsWith("Strive")){
        return S;
    }else{
        return "Strive "+S;
    }
}
console.log(strivify("School is great"))

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

let check3and7 = function(x){
    if(x>0 && (x%3===0 || x%7===0)){
        return true;
    }else{
        return false;
    }
}
console.log(check3and7(-3))

/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/

let reverseString = function(S){
    let splitString = S.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
    
}
console.log(reverseString("STRIVE"))

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
*/

let upperFirst= function(S=""){
    return S.charAt(0).toUpperCase() + S.slice(1);
}  


console.log(upperFirst("strive school"));

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

let cutString = function(S){
   return  S.substring(1,S.length-1);
}
console.log(cutString("ENIS"));
/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/
let array1=[];
let giveMeRandom = function(n){
    for(i=0; i<n ; i++){

    array1.push(Math.floor(Math.random() * 10));

    }
    return array1;
  

}
console.log(giveMeRandom(5));
/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit with your tutor.
*/
