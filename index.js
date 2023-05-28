/* Первая задача */
let out = document.getElementById('out');
const mas = ['Марков К. И.', 'Меркулов В. Я.', 'Денисов А. Ю.', 'Еремина А. М.', 'Иванова К. А.', 'Давыдов Ю. П.', 'Соловьева М. М.', 'Козлов А. К.', 'Новиков С. М.', 'Туманова В. А.'];
let max = 5;
let min = 2;
let str = ' ';

for (let i = 0; i < mas.length; i++) {
	str += mas[i] + " - " + Math.floor(Math.random() * (max - min + 1) + min) + '<br>';
}

out.innerHTML = str;

/* Вторая задача */
let img_coin = document.getElementById('img_coin');
let btn_cast = document.getElementById('btn_cast');
let text_coin = document.getElementById('text_coin');

btn_cast.onclick = fun_cast;

function fun_cast(){
	let coin = Math.floor(Math.random() * 2);
	if(coin == 0){
		img_coin.src = '/img/ru_orel.png'
		text_coin.innerText = "Выпал орел"
	}
	else{
		img_coin.src = '/img/ru_reshka.png'
		text_coin.innerText = "Выпала решка"
	}
}