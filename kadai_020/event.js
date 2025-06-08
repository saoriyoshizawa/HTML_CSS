// output-btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

/// メッセージを表示する要素を取得
const messageElement = document.getElementById('message');

// ボタンがクリックされたときのイベント処理
btn.addEventListener('click', () => {
  // メッセージを表示
  messageElement.textContent = 'ボタンをクリックしました';
});