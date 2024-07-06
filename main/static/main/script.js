const URL = "/static/main/";

let model, webcam, labelContainer, maxPredictions;

async function init() {
  const modelURL = URL + "model.json";
  const metadataURL = URL + "metadata.json";

  model = await tmImage.load(modelURL, metadataURL);
  maxPredictions = model.getTotalClasses();

  webcam = new tmImage.Webcam(200, 200, true);
  await webcam.setup();
  await webcam.play();
  window.requestAnimationFrame(loop);

  document.getElementById("webcam").appendChild(webcam.canvas);
}

async function loop() {
  webcam.update();
  await predict();
  window.requestAnimationFrame(loop);
}

async function predict() {
  const prediction = await model.predict(webcam.canvas);

  let highestProb = 0;
  let label = "";
  for (let i = 0; i < maxPredictions; i++) {
    if (prediction[i].probability > highestProb) {
      highestProb = prediction[i].probability;
      label = prediction[i].className;
    }
  }

  if (highestProb > 0.9) {
    document.getElementById("result").innerText = `Hello, ${label}!`;
    document.getElementById("loginButton").disabled = false;
  }
}

document.getElementById("loginButton").addEventListener("click", function () {
  window.location.href = "/home/";
});

init();
