var result=document.getElementById("inputtext")
let screenvalue="" 

let calculate =(number)=>{

result.value=result.value+number

}

let clr =()=>{

    result.value=""
}

let del=()=>{

    result.value=result.value.slice(0,-1)
}


let Result=()=>{
if(result.value){
    try {
        result.value=eval(result.value);
    } catch (error) {
        // alert("Please provide valid input") ;
         result.value="Invalid Operation"
    }
}
}






































// var result=document.getElementById("inputtext")

// let calculate=(number)=>{
// result.value=result.value+number
// }
// let Result=()=>{
// try {
//     result.value=eval(result.value)
// } 
// catch (err) {
//     alert("Enter the valid input")
    
// }
// }
// function clr() {
      
//     result.value=" ";

// }

// function del() {
//    result.value=result.value.slice(0,-1) 
// }
