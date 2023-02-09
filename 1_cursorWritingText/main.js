let target = document.querySelector("#dynamic");


function randomString(){
    let stringArr = ["Hello, This is Yujin.","How are you today?","I want to interact with you!","Let's play","Thank you for visiting."];
    //random number generation which belows length of stringArr
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringArr = selectString.split("");

    return selectStringArr;

}

// typing reset
function resetTyping(){
    target.textContent = "";
    dynamic(randomString());
}


// print character one by one
function dynamic(randomArr){
    if(randomArr.length > 0){
        
        target.textContent += randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr);
        },80)
    }
    else{
        setTimeout(resetTyping, 3000);
    }
}

dynamic(randomString());

//blinking cursor
function blink(){
    target.classList.toggle("active");
}
setInterval(blink,500);