
const testResult = document.querySelector('.result');

let d = 0;

var mic = document.querySelector('.main__images__content');
var img_div = document.createElement('div'); 
img_div.className = 'img_class';
img_div.id = d++;

mic.appendChild(img_div);

var mic_dop = document.querySelector('.img_class');

let images = ["var1","var2","var3"];
let dop_info = ["1","2","3"];

for (let i = 0; i < 3; i++)  {
	let img_out = document.createElement('img');
	img_out.setAttribute('data-key', dop_info[i]);
	img_out.className = 'main__images__content_pic';
	img_out.src = 'img/'+ images[i] + '.jpg';
	mic_dop.appendChild(img_out);
}

mic_dop.addEventListener('click', showInfo); 

function showInfo(event) {
	console.dir(event.target);
	const key = event.target.dataset['key'];
	if (key === undefined) {
		return true;
	}
	testResult.textContent = images[key-1];

	document.querySelectorAll('.main__images__content_pic').forEach(item => item.classList.remove('active'));

	event.target.classList.add('active');
}


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3));

let i = 2;

function RandomImg() {
   function getRandomInt(i) {
   let position = Math.floor(Math.random() * i);
   return position;
 }

 console.log(RandomImg())
}