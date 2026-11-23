// 折れ線グラフ
function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(60, 100); // 60以上100未満のランダムな数を代入
  }

  // 横線を引く
  const n = 10;
  for(let i = 0; i < n; i++){ line(0, height * i / n, width, height * i / n); }

  // ここからが本番
  noFill();
  stroke(0); // 線の色


  let px, py; // 線を引くために一つ前の点を覚えておく変数
  for(let i = 0; i < scores.length; i++){ 
    // BLANK[1]
    const dx = width / scores.length;
    const dy = height * scores[i] / 100;

    ellipse(i * dx + dx / 2, height - dy, 10, 10);

    beginShape();
    
    vertex(i * dx + dx / 2, height - dy)
    vertex(px, height - py);
    
    endShape();
  }
}
