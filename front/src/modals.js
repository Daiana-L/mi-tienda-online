export function initModals() {
    document.querySelectorAll('[data-modal-target]').forEach(button => {
        button.addEventListener('click', (e) => {
        e.preventDefault();
        const modalId = button.getAttribute('data-modal-target');
        const modal = document.getElementById(modalId);
        modal.classList.remove('hidden');
});
    });
    document.querySelectorAll('.close-modal').forEach(button => {
    button.addEventListener('click', () => {
        button.closest('.fixed').classList.add('hidden');
    });
    });
}