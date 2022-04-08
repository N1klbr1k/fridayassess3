console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let catPic = document.querySelector('img');

const catAlert = (evt) => {
	evt.preventDefault();

	alert('you magnanimous wanderer');
}

catPic.addEventListener('mouseover', catAlert )