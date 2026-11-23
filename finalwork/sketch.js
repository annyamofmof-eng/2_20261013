 // 最終課題を制作しよう
const cycle = 20; // 1周期のフレーム数（定数）
let count = 0; // 現在のフレーム数（変数）

let x, y; // 位置
let vx, vy; // 速度
const a = 0.1; // 加速度

let sx, sy, speed; // 星の位置と速度
let r; // キャラクターの半径

let ky = 0; // 雲のy座標
let my = 200; // 雲のy座標

function setup(){ //初期設定
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height - 100;
  vx = 0;
  vy = 0;

  starset();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(30, 90, 210);
  fill(255, 255, 255, 100);
  ellipse(100, ky, 320, 70);
  ky += 4;
  if(ky > height){ ky = 0; }
  if(ky < 0){ ky = height; }
  ellipse(width - 300, my, 320, 70);
  my += 4;
  if(my > height){ my = 0; }
  if(my < 0){ my = height; }

  count = (count + 1) % cycle;
  const size = height * 0.1;
  r = size / 2;

  if (keyIsDown(LEFT_ARROW)){vx -= a;}
  if (keyIsDown(RIGHT_ARROW)){vx += a;}
  if (keyIsDown(UP_ARROW)){vy -= a;}
  if (keyIsDown(DOWN_ARROW)){vy += a;}

  x = constrain(x, 0, width);
  y = constrain(y, 0, height);
  
  vx = constrain(vx, -20, 20);
  vy = constrain(vy, -20, 20);

  x += vx;
  y += vy;
  fill(255);
  ellipse(x, y, size, size);

  sy += speed;
  fill(255, 220, 50); 
  star(sx, sy, 20);

  d = dist(x, y, sx, sy);
    if (d < r + 20) {
      starset();
    }

  if (sy > height + 20) {  // 画面の一番下まで落ちたら、新しい星を上にセットし直す
    starset();
  }
}

function starset(){
  sx = random(0, width);
  sy = -20
  speed = random(1, 5)
  star(sx, sy, 10);
  sy += speed;
}

function star(cx, cy, cr){
  beginShape();    // 点つなぎを始める
  for(let i = 0; i < 5; i++){
    const theta = TWO_PI * i * 2 / 5 - HALF_PI;
    const x = cx + cos(theta) * cr;
    const y = cy + sin(theta) * cr;
    vertex(x, y);  
  }
  endShape(CLOSE); // 点つなぎを終わる
}


function keyPressed(){ //
  if(key == " "){ // スペースキーを押したらリセット
    x = width / 2;
    y = height - 100;
    vx = 0;
    vy = 0;
  }
}