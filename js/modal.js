const toggleModal = () => {
    document.querySelector('.modal')
        .classList.toggle('modal_hidden');
}

document.querySelector('#show-modal')
    .addEventListener('click', toggleModal);

document.querySelector('.modal_close')
    .addEventListener('click', toggleModal);