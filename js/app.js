//画面ドラッグ
let clickX;
let clickY;
let clickPosition;
let isClick = false;

const calcApp = document.querySelector('.calc_app');
const display = document.querySelector('.display');
const switches = document.querySelectorAll('.switch');
const calculations = document.querySelectorAll('.calculation');
const resets = document.querySelectorAll('.reset');
const results = document.querySelectorAll('.result');

calcApp.style.position = 'fixed';
calcApp.style.top = '20px';
calcApp.style.left = '40px';

calcApp.addEventListener('mousedown', function (e) {
    isClick = true;
    clickX = e.screenX;
    clickY = e.screenY;
    clickPosition = calcApp.getBoundingClientRect();
    console.log("X:" + e.screenX);
    console.log("Y:" + e.screenY);
    console.log("POS" + calcApp.style.left);
});

document.addEventListener('mousemove', function (e) {
    if (!isClick) return;
    calcApp.style.top = clickPosition.top + (e.screenY - clickY) + 'px';
    calcApp.style.left = clickPosition.left + (e.screenX - clickX) + 'px';
    console.log("moveX:" + calcApp.style.left);
    console.log("moveY:" + calcApp.style.top);
});

document.addEventListener('mouseup', function (e) {
    isClick = false;
    console.log("mouseup");
});

// 数値ボタンクリック
switches.forEach(function (button) {
    button.addEventListener('click', function (e) {
        console.log("switch:click" + e.target.textContent);
        display.textContent += e.target.textContent;
    });
});

// 計算ボタンクリック
calculations.forEach(function (button) {
    button.addEventListener('click', function (e) {
        console.log("calculation:click" + e.target.textContent);
        display.textContent += e.target.textContent;
    });
});

// クリアボタンクリック
resets.forEach(function (button) {
    button.addEventListener('click', function (e) {
        console.log("reset:click" + e.target.textContent);
        display.textContent += e.target.textContent;
    });
});

// イコールボタン（=）クリック
results.forEach(function (button) {
    button.addEventListener('click', function (e) {
        console.log("result:click" + e.target.textContent);
        display.textContent += e.target.textContent;
    });
});
