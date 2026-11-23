// 2D アニメーションゲームのようなインタラクション
let x, y;
let vx, vy;
const g = 1;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 0;
  vy = 0;
}

function windowResized(){ 
  resizeCanvas(windowWidth, windowHeight); // ウィンドウサイズが変わったときにキャンバスのサイズを変更する
}

function draw(){
  background(160, 192, 255);
  const size = height * 0.1; // キャラクターのサイズ

  // 地面を描く
  const groundY = height * 0.8;
  fill(64, 192, 64);
  rect(0, groundY, width, height - groundY);


  let speed = 1; // アニメーションの速さ
  // BLANK[1] キャラクターの左右移動

  if (keyIsDown(SHIFT)) {
    speed = 5; // Shiftキーが押されている間は、speed を 5 にする
  } 
  if (keyIsDown(LEFT_ARROW)) {
    x -= speed; // 左へ移動
  }
  if (keyIsDown(RIGHT_ARROW)) {
    x += speed; // 右へ移動
  }

  // BLANK[2] 重力とジャンプ
  vy += g; // 重力を加える

  if (y >= groundY - size / 2) { // キャラクターが地面に着地している場合
    y = groundY - size / 2; // キャラクターの位置を地面の上に固定
    vy = 0; // キャラクターの重力をリセット
  }
  if (keyIsDown(UP_ARROW)) { // 上矢印キーが押されている場合
      if (y >= groundY - size / 2) { // キャラクターが地面に着地している場合
        vy = -30; // ジャンプの速度を設定
      }
    vy = -30; // ジャンプの速度を設定
  }

  // 速くなりすぎないように制限
  vx = constrain(vx, -20, 20);
  vy = constrain(vy, -20, 20);

  // 位置を更新
  x += vx;
  y += vy;

  // キャラクターを描く
  fill(0);
  ellipse(x, y, size, size);
}