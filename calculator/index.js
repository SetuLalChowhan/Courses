let result=document.getElementById('inputText');

let calculate=(number)=>{
    result.value+=number;
}

let Result=()=>{
    try{
        result.value=eval(result.value)
    }
    catch(err){
        alert("Please enter valid input");
    }

}

let clr=()=>{
    result.value= "";
}

let dlt=()=>{
    result.value=result.value.slice(0,-1);
}