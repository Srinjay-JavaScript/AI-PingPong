wristX = 0;
wristY = 0;
ScoreRightWrist = 0;
function preload(){
}

function setup() {
// canvas = createCanvas(700, 450);
	video = createCapture(VIDEO);
	video.size(700, 400);
	video.parent('webcam');
	posenet = ml5.poseNet(video, init);
}
function draw(){
  // image(video, 0, 0, 700, 400);
  // if (ScoreRightWrist > 0.2){
  //   fill('red');
  //   stroke('red');
  //   circle(wristX, wristY, 20);
  // }
}
// function play(){
//     posenet.on('pose', got_result);
// }
// function init(){
//     console.log('Posenet has successfully initialized.');
//   }

  function got_result(results){
    if (results.length > 0){
      wristX = results[0].pose.rightWrist.x;
      wristY = results[0].pose.rightWrist.y;
      console.log('WristX: ' + wristX + ' WristY: ' + wristY);
      ScoreRightWrist = results[0].pose.keypoints[10].score;
     
    }
 }