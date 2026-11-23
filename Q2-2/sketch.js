// チェッカー
function setup() {
  createCanvas(200, 200);
  const size = width / 8; // マスの一辺の長さ

  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] ヒント： rectのx座標は size * i, y座標は size * j
      if ((i + j) % 2 == 0){
        fill(255);
      } else {
        fill(125);
              stroke(125); // 境界線の色を指定
      rect(size * i, size * j, size, size); // マスを描く
        // 円を描く
          if (j < 3){
            fill(255, 0, 0);
            stroke(255, 0, 0);
            ellipse(size * (i + 0.5), size * (j + 0.5), size * 0.8, size * 0.8);
          } else if (j > 4){
            fill(0, 0, 0);
            stroke(0, 0, 0);
            ellipse(size * (i + 0.5), size * (j + 0.5), size * 0.8, size * 0.8);
          }
      }
    }
  }
}