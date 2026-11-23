// 心臓の鼓動のようなアニメーション
const cycle = 100; // 1周期のフレーム数
let count; // 何フレーム目か

function setup(){
  createCanvas(200, 200);
  count = 0;
}

function draw(){
  background(160, 192, 255); // 背景色を水色に

  
  let speed = 1; // アニメーションの速さ
  // BLANK[2]
  count = (count + speed) % cycle;// 1周期のフレーム数で割った余りを count に代入することで、count は 0 から cycle-1 までの値を繰り返す

  if (keyIsPressed) {
    count = (count + 2) % cycle; // キーが押されている間は、count を 2 ずつ増やす
  }

  // BLANK[1] 1周期の前半は size が大きくなり、後半は小さくなる
  if (count < cycle / 2) { //前半
    size = 50 + cycle - count; // size は 50 から 100 まで大きくなる;
  } else { //後半
    size = 50 + count; // size は 100 から 50 まで小さくなる;
  }
  ellipse(width / 2, height / 2, size);
}
