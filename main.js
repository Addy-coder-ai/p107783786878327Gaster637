//ps i wanted to use the old names so i did
pr1="";
pr2="";

Webcam.set({
    width:350,
    height:350,
    image_format:'png',
    png_quality:90
});
 camera=document.getElementById("camera");
 Webcam.attach('#camera');

 function shoot() {
     Webcam.snap(function(data_uri)
     {
         document.getElementById("resulti").innerHTML='<img id="captured_img" src="'+data_uri+'"/>';
        
     });
 }

 console.log('ml5 version',ml5.version);

 var Classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/xtTLAvlGs/model.json',modelLoaded);

 function modelLoaded() {
     console.log("model loaded");
 }
 function speak(){
     var synth=window.speechSynthesis;
     spData1="the first prediction is" + pr1;
     spData2="the second prediction is" + pr2;
     utterThis=new SpeechSynthesisUtterance(spData1+spData2);
     synth.speak(utterThis);

 }
