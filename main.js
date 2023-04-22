function preload() {


}

function setup() {

  canvas = createCanvas(300,300)
  canvas.center();
  video = createCapture(VIDEO)
  video.size(300,300)
video.hide()
tintColor = ""

posenet = ml5.poseNet(video,modelLoaded)
posenet.on("pose",gotPoses)
}

function draw() {
  image(video,0,0,300,600)
 
  posenet.classify(video,gotPoses)
}
function takeSnapshot() {
  save('Foto.png')
}
function modelLoaded() {
console.log("loaded")
}
function gotPoses(results) {
if (results.length > 0) {
console.log(results)
console.log(results[0].pose.nose.x)
console.log(results[0].pose.nose.y)

}

}