//Объявление глобальных переменных
const testResult = document.querySelector('.result');

let d = 0;

var mic = document.querySelector('.main__images__content');
var img_div = document.createElement('div'); 
img_div.className = 'img_class';
img_div.id = d++;

mic.appendChild(img_div);

var mic_dop = document.querySelector('.img_class');

let images = ["var1","var2","var3"];
let dop_info = ["Качество изображения - 99%", "Качество изображения - 91%", "Качество изображения - 94%"];

/*Функция, которая создает div для изображения и выводит его туда,
также тут в DOM-дерево записывается название изображения*/
function setImgInDoom() {
	let listImg = mixedImg(images)
	for (let i = 0; i < 3; i++) {
		let img_out = document.createElement('img');
		img_out.className = 'main__images__content_pic';
		img_out.src = 'img/' + listImg[i] + '.jpg';

		img_out.setAttribute('data-key', listImg[i]);

		mic_dop.appendChild(img_out);
		console.log(img_out.src)
	}
}

setImgInDoom()

mic_dop.addEventListener('click', showInfo); 

/*Функция, которая начинает отрабатывать после выбора изображения: 
1. Проверяет, что пользователь кликнул именно на фото.
2. Выводит под изображением значение его характеристики.
3. И меняет у активного блока класс*/
function showInfo(event) {
	console.dir(event.target);
	const key = event.target.dataset['key'];
	if (key === undefined) {
		return true;
	}
	
	if (key == "var1") {
	testResult.textContent = dop_info[0];
	var lastValue = localStorage.getItem('myRightClicks') ? parseInt(localStorage.getItem('myRightClicks')) : 0;
	let ClickRight = lastValue + 1;
	localStorage.setItem('myRightClicks', ClickRight);
	console.log(ClickRight);
	} else if (key == "var2") {
	testResult.textContent = dop_info[1];
	} else if (key == "var3") {
	testResult.textContent = dop_info[2];
	} 

	document.querySelectorAll('.main__images__content_pic').forEach(item => item.classList.remove('active'));

	event.target.classList.add('active');
	setTimeout(function(){location.reload()}, 2000)}

/*Функция, которая задает значения матерамическому рандому*/
function randomInteger(min, max) {
	// получить случайное число от (min-0.5) до (max+0.5)
	let rand = min - 0.5 + Math.random() * (max - min + 1);
	return Math.round(rand);
}

/*Функция, которая описывает правило перемешивания изображений при выводе*/
function mixedImg(itemsList){
	let num1 = randomInteger(0, 2)
	let num2 = randomInteger(0, 2)
	while (num1 == num2){
		num2 = randomInteger(0, 2)
	}
	let num3 = randomInteger(0, 2)
	while (num1 == num3 || num2 == num3){
		num3 = randomInteger(0, 2)
	}
	return [itemsList[num1], itemsList[num2], itemsList[num3]]
}

/*Функция, которая записывает кол-во перезагрузки страницы*/
function addClicks() {
    var currentValue = localStorage.getItem('myClicks') ? parseInt(localStorage.getItem('myClicks')) : 0;
    var newValue = currentValue  + 1;
    localStorage.setItem('myClicks', newValue);
    console.log(newValue);
}

addClicks(); 

/*Функция, которая считает процент верных ответов*/
function Count() {
let cliksCount = (localStorage.getItem('myClicks'));
let rightClicsCount = (localStorage.getItem('myRightClicks'));
let calculate = (rightClicsCount / cliksCount);
let prosent = calculate.toFixed(2)*100;
console.log(prosent);

return prosent;
}

Count()

/*Вывод процента верных ответов*/
const countResult = document.querySelector('.count');
countResult.textContent = Count() + '%';
let height = Count();

banner.style.setProperty('--element-height', height + 'px');
