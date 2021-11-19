document.addEventListener('DOMContentLoaded', () => {
	const openButton = document.querySelector('.js-open-modal');
	const modal = document.querySelector(openButton.dataset.target); //#modal

	openButton.addEventListener('click', () =>{
		modal.style.display = 'block';
	})

	modal.querySelector('.modal-dialog').addEventListener('click', event =>{
		event._isClickWithModal = true;
	})

	modal.addEventListener('click', event =>{
		if(event._isClickWithModal) return;
		modal.style.display = 'none';
	})
});