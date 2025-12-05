// for(let i=1; i<=10; i++){
//     if(i%2==0){
//         console.log(i);
        
//     }
// }
// let input = "racecar";
// let nonRepeated = "";
//  for(let i=0;i<input.length;i++){
//     let count=0;
//     for(let j=0;j<input.length;j++){
//         if(input[i]===input[j]){
//             count++;
//         }
//     }
//     if(count===1){
//         nonRepeated =nonRepeated+input[i]
//     }
//  }
// for(let i=0;i<nonRepeated.length;i++){
//     console.log(nonRepeated[i]);
    
// }

// let input = "daimler";
// let result = "";
// for(i=0;i<input.length;i++){
//     if(i%2==0){
//     result = result+input[i].toUpperCase()
// }
// else {
//   result = result+input[i]
// }}
// console.log(result);


// let input = "I Am String";
// let Output = "";
// let indexSpaces = [];
// let count = 0;

// // Step 1: Store characters except spaces in reverse order
// for (let value of input) {
//   if (value !== " ") {
//     Output = value + Output; // reverse logic
//   } else {
//     indexSpaces.push(count); // store space index
//   }
//   count++;
// }

// // Step 2: Insert spaces back at the same positions
// for (let i of indexSpaces) {
//   let part1 = Output.slice(0, i);
//   let part2 = Output.slice(i);
//   Output = part1 + " " + part2;
// }
// console.log(Output);
// // 	Write a JavaScript program to reverse a string without using any inbuilt methods.
// let str = "kavitha"
// let rev = ""
// for(let i=str.length-1;i>=0;i--)
// {
//     rev=rev+str[i]

// }
// console.log(rev);
 //Input: ["r","a","c","e","c","a","r"] Output: Print the non-repeated character
    // let input = ["r","a","c","e","c","a","r"]
    // let output = []
    // for(let i=0;i<input.length;i++){
    //     let count=0;
    //     for(let j=0;j<input.length;j++){
    //         if(input[i]==input[j]){
    //             count++
    //         }
    //     }
    //     if(count===1){
    //         output.push(input[i])
    //     }
    // }
    // console.log(output);
    //	Input a= {10, 20, 30, 40, 50, 60};  b= {20, 25, 30, 40, 50, 65, 70}; Output : {10,25,60,65,70}
//let a= [10, 20, 30, 40, 50, 60] 
// let b= [20, 25, 30, 40, 50, 65, 70]
// let obj ={}
// let arr =[]
// for(let value of a.concat(b)){
//     if(obj[value]){
//         obj[value]++
//     }else{
//         obj[value] = 1
//     }
// }

// for(let key in obj){
//     if(obj[key]===1){
//         arr.push(key)
//     }
// }
// console.log(arr);
// let str = "daimler"
// let str1=""
// for(let i=0;i<str.length;i++)
// {
//  if(i%2==0){
//     str1=str1+str[i].toUpperCase()
//  }
// else
// {
//     str1=str1+str[i]
// }
// }
// console.log(str1);
//I/P — I Am String O/P— g ni rtSmAI

// let str = "I Am String"
// let output = ""
// let space = []
// for(let i=0;i<=str.length;i++){
//     if(str[i]==" "){
//         space.push(i)
//     }
// }
// for(let i=str.length-1;i>=0;i--){
//     if(str[i]!==" "){
//         output=output+str[i]
//     }
// }
//  for(index of space)
//  {
//    output = output.slice(0,index)+" "+output.slice(index)
//  }
// console.log(output);

// var voters = [
// {name:'Bob', age: 30, voted: true},
// {name:'Jake', age: 32, voted: true},
// {name:'Kate', age: 25, voted: false},
// {name:'Sam', age: 20, voted: false},
// {name:'Phil', age: 21, voted: true},
// {name:'Ed', age: 55, voted: true},
// {name:'Habis', age: 54, voted: true},
// {name:'Ben', age: 31, voted: false},
// {name:'Jeff', age: 43, voted: false},
// {name:'Zack', age: 41, voted: true},
// {name:'Jain', age: 30, voted: true},
// {name:'Eric', age: 19, voted: false}
// ];
// let result = []
// let names = []
// for(value of voters){
//     if(value.voted){
//         result.push(value)
//         names.push(value.name)
//     }
// }
// console.log(result);

















