'use strict';

//FUNCIÓN ABRIR CONTENIDO disapear1
var content1 = document.querySelector('.disapear1')

function showContent1() {
	content1.classList.toggle('hidden1')
	// box1.classList.add('big-size')
}
var button1 = document.querySelector('.openbox1');

button1.addEventListener('click', showContent1)


//FUNCIÓN ABRIR CONTENIDO disapear2
var content2 = document.querySelector('.disapear2');

function showContent2() {
	content2.classList.toggle('hidden2')


}
var button2 = document.querySelector('.openbox2');

button2.addEventListener('click', showContent2)


//FUNCIÓN ABRIR CONTENIDO disapear3
var content3 = document.querySelector('.disapear3');

function showContent3() {
	content3.classList.toggle('hidden3')


}
var button3 = document.querySelector('.openbox3');

button3.addEventListener('click', showContent3)
