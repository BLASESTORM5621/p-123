function preload(){

}

function setup(){
    canvas=createCanvas(550,550)
    canvas.position(560,150)
    video=createCapture(VIDEO)
    video.size(550,500)
    poseNet=ml5.poseNet(video,modalloaded)
    poseNet.on("pose",gotposes)
}
function draw(){
    background("#D50AF4")
}
function modalloaded(){
    console.log("Posenet is initialized")
}

function gotposes(results){
    if(results.length>0){
        console.log(results)
    }
}
