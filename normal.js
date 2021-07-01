wristY = 0;
wristX = 0;
started = false;

ScoreRightWrist = 0;
function preload(){
}

function setup() {
  canvas = createCanvas(640, 450);
	canvas.parent('webcam');
  video = createCapture(VIDEO);
  video.hide();
	posenet = ml5.poseNet(video, init);
}
function draw(){
  image(video, 0, 0, 640, 450)
  if (started == true){
  if (ScoreRightWrist > 0.2){
    fill('red');
    stroke('red');
    circle(wristX, wristY-20, 20);
  }
}
}
function play(){
    started = true;
    posenet.on('pose', get_result);
    document.getElementById('status').innerHTML = 'Status: Game has successfully launched.';

}
function init(){
    console.log('Posenet has successfully initialized.');
  }

  function get_result(results){
    if (results.length > 0){
      wristY = results[0].pose.rightWrist.y;
      wristX = results[0].pose.rightWrist.x;

      console.log('WristY: ' + wristY + ' WristX: ' + wristX);
      ScoreRightWrist = results[0].pose.keypoints[10].score;
     
    }
  }
