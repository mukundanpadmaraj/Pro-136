objects=[];
object_status="";
function setup(){
    canvas=createCanvas(690, 500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide()
}
function draw(){
    image(video, 0, 0, 690, 500)
}
function start(){
    objectDetector=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}
function modelLoaded(){
    console.log("Model has been loaded! Yaaaaaayyyyyyyy!!");
    object_status=true;
}
function gotResults(results, error){
    if(results){
        console.log(results);
        objects=results
    }
    console.error(error);
}