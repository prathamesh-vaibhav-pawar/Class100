var Speech = window.webkitSpeechRecognition
var Recognition = new Speech

function TakePhoto(){
    document.getElementById("Text_area").innerHTML = "Selfie"
    Recognition.start()
}

Recognition.onresult = function(event){
    console.log(event)
    var Output = event.results[0][0].transcript
    document.getElementById("Text_area").innerHTML = Output
    if(Output == "Selfie"){
        Speak()
    }
}
function Speak(){
    setTimeout(function(){
        image_id = "Selfie1"
        Takephoto()
        speak_data = "Taking your next Selfie in 10 Second"
        var Speech = new SpeechSynthesisUtterance(speak_data)
        synth.speak(Speech); 
    },5000)
    setTimeout(function(){
        image_id = "Selfie2"
        Takephoto()
        speak_data = "Taking your next Selfie in 5 Second"
        var Speech = new SpeechSynthesisUtterance(speak_data)
        synth.speak(Speech); 
    },10000)
    setTimeout(function(){
        image_id = "Selfie3"
        Takephoto()
        speak_data = "your Selfie has been loaded"
        var Speech = new SpeechSynthesisUtterance(speak_data)
        synth.speak(Speech); 
    },15000)
}
Webcam.set({
    width:300,
    height:420,
    image_format:'png',
    png_quality:100
});

function Takephoto(){
    Webcam.snap(function(data_uri){
        if(image_id == "Selfie1"){
            document.getElementById("Photo1").innerHTML = "<img id = 'selfie1' src ="+ data_uri+" />"
        }
        if(image_id == "Selfie2"){
            document.getElementById("Photo2").innerHTML = "<img id = 'selfie2' src ="+ data_uri+" />"
        }
        if(image_id == "Selfie3"){
            document.getElementById("Photo3").innerHTML = "<img id = 'selfie3' src ="+ data_uri+" />"
        }
    })
}
function downloadImage1(){
    pic = document.getElementById("Picture")
    Source = document.getElementById("selfie1").src 
    document.getElementById("Picture").herf = Source
    pic.click()
}
function downloadImage2(){
    pic = document.getElementById("Picture")
    Source = document.getElementById("selfie2").src 
    document.getElementById("Picture").herf = Source
    pic.click()
}
function downloadImage3(){
    pic = document.getElementById("Picture")
    Source = document.getElementById("selfie3").src 
    document.getElementById("Picture").herf = Source
    pic.click()
}
