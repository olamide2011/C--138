objects= [];
status= "";



function preload() {
    video=createVideo("video.mp4");
}


function setup() {
 canvas=createCanvas(710,410);
 canvas.center();
 
}
function start() {
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "detectingObjects";
}

function modelLoaded() {
    console.log("modelLoaded");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);

 
}
function draw() {
    image(video,0,0,710,410);
    if(status!="") {
        objectDetector.detect(video, gotResults);
        for(i = 0; i< objects.length; i++){
            document.getElementById(status).innerHTML ="Status : Objects Detected";
            document.getElementById(status).innerHTML ="Number of objects detected are :"+ objects.length:
        }
            fill("red");
            percent = floor(objects[i].confidence * 100);
            text(objects[1].label + "" + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("red");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);     
        

    }
}

function gotResults(error,results) {
    if(error){
        console.log(error);  
    }
    console.log(results);
    objects=results;
}

