'use strict';

document.querySelector('.scroll').addEventListener('click', function(e){
	e.preventDefault();
	document.querySelector('header').scrollIntoView({
		behavior: 'smooth'});
});
