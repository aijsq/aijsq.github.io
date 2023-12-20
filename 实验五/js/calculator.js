const btn = document.getElementById('btn');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const num3 = document.getElementById('num3');

btn.onclick = function () {
    const average = (parseInt(num1.value) + parseInt(num2.value) + parseInt(num3.value)) / 3
    console.log(average);
    alert('平均值为：' + average);
}