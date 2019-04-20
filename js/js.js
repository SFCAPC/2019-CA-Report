// Document ready
document.addEventListener('DOMContentLoaded', function () {
	inView.offset(150);

	inView('section')
		.on('enter', el => { el.classList.add('js-isInView') });
});
