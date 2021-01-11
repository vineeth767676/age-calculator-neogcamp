var input = document.querySelector("#inputTxt");
var button = document.querySelector("#btn");
var output = document.querySelector("#outputTxt");

function eventHandler(year){ //function
    var currentYear = 2021; //current year

    var result = (currentYear - input.value) //formula
     
    //output on console
    console.log(input.value) //.value reads the value 
    console.log(currentYear - input.value)
    
    
    //output on screen
    output.innerText = result //.innerText writes the text
}

button.addEventListener("click" , eventHandler); //when user clicks , it will take to the function.