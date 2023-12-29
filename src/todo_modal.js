const todoFormOpen = () => {
    if (modal == null) return
    modal.classList.add('active');
    overlay.classList.add('active');

};

const todoFormClose = () => {
    if (modal == null) return
    modal.classList.remove('active');
    overlay.classList.remove('active');

};

export { todoFormOpen, todoFormClose }