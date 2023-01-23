noseX = 0;
noseY = 0;
function preload() {
    clown_nose = loadImage('https://i.postimg.cc/KcVN0c7s/p2.jpg');
}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
      
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
  }
function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 30, 30);
  }
function take_snapshot() {
    save('myFilterImage.png');

}

function modelLoaded() {
    console.log("poseNet is started");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        //console.log("nosex =" + results[0].pose.nose.x);
        //console.log("nosey =" + results[0].pose.nose.y);
        noseX = results[0].pose.nose.x - 40;
        noseY = results[0].pose.nose.y ;
    }

}