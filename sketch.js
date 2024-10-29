let mySvg, stars = []
a = 1.2
showText = false;

function preload() {
  mySvg = loadImage('./assets/background.svg');
}

function fähre() {
  noStroke();
  
  // Farben definieren
  const colors = {
    st0: color(177, 127, 74),
    st1: color(147, 96, 55),
    st2: color(125, 78, 36),
    st3: color(106, 154, 176),
    st4: color(255, 255, 255)
  };

  const xOffset = 188.92, yOffset = 262.18;

  fill(colors.st0);
  beginShape();
  vertex(362.58 - xOffset, 579.71 - yOffset);
  vertex(232.7 - xOffset, 579.71 - yOffset);
  vertex(199.93 - xOffset, 532.74 - yOffset);
  vertex(395.35 - xOffset, 532.74 - yOffset);
  endShape(CLOSE);

  rect(208.41 - xOffset, 354.75 - yOffset, 178.45, 97.06);

  fill(colors.st1);
  beginShape();
  vertex(386.86 - xOffset, 451.81 - yOffset);
  vertex(208.41 - xOffset, 451.81 - yOffset);
  vertex(199.93 - xOffset, 532.74 - yOffset);
  vertex(395.35 - xOffset, 532.74 - yOffset);
  endShape(CLOSE);

  fill(colors.st2);
  beginShape();
  vertex(208.41 - xOffset, 436.86 - yOffset);
  vertex(246.41 - xOffset, 437.48 - yOffset);
  vertex(238.74 - xOffset, 532.74 - yOffset);
  vertex(199.93 - xOffset, 532.74 - yOffset);
  endShape(CLOSE);

  beginShape();
  vertex(386.86 - xOffset, 436.86 - yOffset);
  vertex(348.86 - xOffset, 437.48 - yOffset);
  vertex(356.53 - xOffset, 532.74 - yOffset);
  vertex(395.35 - xOffset, 532.74 - yOffset);
  endShape(CLOSE);

  fill(colors.st3);
  for (let x of [219.23, 240.45, 336.47, 357.69]) {
    for (let y of [374.04, 403.8]) {
      rect(x - xOffset, y - yOffset, 18.36, 27.43);
    }
  }

  fill(colors.st2);
  rect(269.97 - xOffset, 359.44 - yOffset, 55.34, 92.37);

  fill(colors.st4);
  beginShape();
  vertex(389.39 - xOffset, 274.12 - yOffset);
  bezierVertex(357.95 - xOffset, 266.5 - yOffset, 335.22 - xOffset, 262.18 - yOffset, 297.64 - xOffset, 262.18 - yOffset);
  bezierVertex(260.06 - xOffset, 262.18 - yOffset, 237.33 - xOffset, 266.5 - yOffset, 205.89 - xOffset, 274.12 - yOffset);
  vertex(188.92 - xOffset, 386.74 - yOffset);
  bezierVertex(220.36 - xOffset, 379.12 - yOffset, 260.06 - xOffset, 374.8 - yOffset, 297.64 - xOffset, 374.8 - yOffset);
  bezierVertex(335.22 - xOffset, 374.8 - yOffset, 374.93 - xOffset, 379.12 - yOffset, 406.36 - xOffset, 386.74 - yOffset);
  vertex(389.39 - xOffset, 274.12 - yOffset);
  endShape(CLOSE);
}

class Star {
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.s = s;
  }
  show() {
    noStroke();
    ellipse(this.x, this.y, this.s);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  textFont('Courier New')
  textStyle(BOLD);
  pixelDensity(displayDensity())

  textSize(32);
  for (let i = 0; i < 50; i++) {
    stars.push(new Star(random(-width / 2, width / 2), random(-height / 2, 0), random(5, 8)));
  }
}

function draw() {
  
  background(242, 155, 136);

  if (windowWidth < 1050) {
    rectMode(CORNER)
    // Mobiler Code
    fill(36, 45, 66)
    textSize(16);
    textAlign(CENTER)
    text("BITTE AM COMPUTER AALUEGE", width / 2, 100);

    textAlign(LEFT, TOP)
    textSize(16);

    let textBoxWidth = windowWidth * 0.8; // Textfeld ist 80% der Bildschirmbreite
    let textBoxX = (windowWidth - textBoxWidth) / 2; // Zentriere das Textfeld
    let textBoxY = height / 4;

    text("• Ich möcht mi Geburtsdaag mit dir fiire\n• Zischtig, 10.12.2024\n• Träffpunkt: 18:20 Wild Maa-Fähri, Grossbasel Site\n• Keini Gschängg. Wär möcht, ka sich am Ässe beteilige\n• Bitte gib mr kurz Bscheid, ob du kasch drbi si. Uffgrund vom Platz isches ohni Begleitig.\n",textBoxX + 10,
      textBoxY,
      textBoxWidth - 20,
      600);


  } else {



  let c1 = map(mouseX, 0, width, width * 0.4, width * 0.6);
  let c2 = map(mouseX, 0, width, width * 0.162, width * 0.825);
  let ySeil = map(c1, 0, width, 100, 180);
  let hFähre = height * 0.8;

  push();
  translate(width / 2, height / 2);
  
  let sunPos = {
    x: sin(a) * windowWidth / 2.2,
    y: cos(a) * windowHeight / 2.3
  };

  fill(251, 232, 112);
  noStroke();
  ellipse(-sunPos.x, sunPos.y, 50);

  fill(0, map(sunPos.y, -(windowHeight / 4), windowHeight / 7, 0, 255));
  rect(0, 0, width, height);

  fill(255, map(sunPos.y, -(windowHeight / 4), windowHeight / 7, 0, 255));
  for (let star of stars) star.show();

  a = (a > 5) ? 1.2 : a + 0.003;
  pop();

  image(mySvg, 0, 0, width, height);

  push();
  translate(c2 - 57, hFähre - 135);
  rectMode(CORNER);
  scale(0.5);
  fähre();
  pop();

  noFill();
  stroke(0);
  strokeWeight(3);
  bezier(c1, ySeil, c1, hFähre * 0.9, c2, hFähre, c2, hFähre);

  strokeWeight(1);
  line(0, 100, width, 180);

  push();
  translate(c1, ySeil);
  let rSize = 30;
  rotate(0.03);
  fill(1);
  rect(0, -rSize / 2, rSize, rSize);
  
  fill(255);
  textSize(rSize - 10);
  textAlign(CENTER)
  text(mouseX < width / 2 ? '26' : '27', 0, -rSize / 2.2);
  pop();

  fill(255);
  noStroke();
  ellipse(width - 75, 75, 50);
  fill(0);
  textAlign(CENTER)
  textSize(30)
  text('?', width - 75, 75);

  if (showText) {
    fill(0);
    textAlign(LEFT);
    textSize(16);
    fill(36, 45, 66)
    text("• Ich möcht mi Geburtsdaag mit dir fiire\n• Zischtig, 10.12.2024\n• Träffpunkt: 18:20 Wild Maa-Fähri, Grossbasel Site\n• Keini Gschängg. Wär möcht, ka sich am Ässe beteilige\n• Bitte gib mr kurz Bscheid, ob du kasch drbi si. Uffgrund vom Platz isches ohni Begleitig.\n", 110, height-50);
  }


}

}

function mousePressed() {
  let d = dist(mouseX, mouseY, width - 75, 75);
  showText = d < 25 ? !showText : false;
}