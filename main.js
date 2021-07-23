headx=0;
heady=0;
function preload(){
 doggy=loadImage('fire.jpg');
}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
Video=createCapture(VIDEO);
Video.hide();

poseNet=ml5.poseNet(Video,modelLoaded);
poseNet.on('pose',gotposes);
}

function draw(){
image(Video,0,0,300,300);
 image(doggy,headx,heady,100,100);
}

function take_pic(){
    save('realtime_filter.png');
}

function modelLoaded(){
    console.log("modelLoaded")
}

function gotposes(results){
    if(results.length>0){
        console.log(results);
        console.log("head x="+results[0].pose.head.x);
        console.log("head y="+results[0].pose.head.y);
        headx=results[0].pose.head.x;
        heady=results[0].pose.head.y;
    }
}