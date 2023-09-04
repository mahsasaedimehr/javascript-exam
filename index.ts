type props ={
    id:string;
    text:number;
};
//randomNumber
const randomNumber=Math.floor(Math.random()*90000) +10000;     
const randomButten = document.querySelector("#randomNumber");

randomButten?.addEventListener("click", ()=>{
    window.alert(randomNumber);
    console.log(randomNumber);

});

//primeNumber
const primeNumber=()=>{
    for(var i=2; i<randomNumber; i++){
        var isprime=false;
        for(var j=2; j<=i; j++){
            if(i % j === 0 && j !==i){
                isprime = true;
            }
        }
        if(isprime === false) console.log(i);
    }
}
const primeNumberButton = document.querySelector("#primeNumber");
primeNumberButton?.addEventListener("click",()=>{
    console.log(primeNumber);
});

//delete
const deletButton = document.querySelector("#delete");
deletButton?.addEventListener("click", ()=>{
    console.clear();
});