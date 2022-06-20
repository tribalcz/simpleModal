const toggleModal = () => {
    document.querySelector('.modal')
        .classList.toggle('modal_hidden');
}


//By uncommenting, the modal window will open automatically when the page is loaded.
//Zároveň je nutné zakomentovat nebo odstranit tlačítko a js controll tlačítka modálního okna
//window.onload = toggleModal();

document.querySelector('#show-modal')
    .addEventListener('click', toggleModal);

document.querySelector('.modal_close')
    .addEventListener('click', toggleModal);