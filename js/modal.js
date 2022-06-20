const toggleModal = () => {
    document.querySelector('.modal')
        .classList.toggle('modal_hidden');
}


//By uncommenting, the modal window will open automatically when the page is loaded.
//Added function for automatic opening of modal window after page loading
//window.onload = toggleModal();

document.querySelector('#show-modal')
    .addEventListener('click', toggleModal);

document.querySelector('.modal_close')
    .addEventListener('click', toggleModal);
