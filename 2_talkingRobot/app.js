const button = document.querySelector("button");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onStart = function(){
    console.log("Speech Recognition started");
};

recognition.onresult = function(event){
    console.log(event);

    const spokenwords = event.results[0][0].transcript
    console.log("spoken words are ",spokenwords);
    computerSpeech(spokenwords);
};


function computerSpeech(words){
    const speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speech.pitch = 0;
    speech.volume = 1;
    speech.rate = 0.5;
    
    determinWords(speech, words);
    window.speechSynthesis.speak(speech);
};


function determinWords(speech,words){
    if(words.includes("How are you")){
        speech.text = "I am good, thank you.";
    }
    if(words.includes("I love you")){
        speech.text = "I love you too.";
    }
    if(words.includes("What time is it")){
        speech.text = "It's time to go to bed.";
    }
    if(words.includes("let's play")){
        speech.text = "Why not?";
    }

};

button.addEventListener("click",()=>{
    recognition.start();

});