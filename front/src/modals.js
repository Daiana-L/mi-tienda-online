export function initModals() {
    document.addEventListener('click', (e) => {
    const button = e.target.closest('[data-modal-target]');
    if (button) {
        e.preventDefault();
        const modalId = button.getAttribute('data-modal-target');
        const modal = document.getElementById(modalId);
        if (modal) modal.classList.remove('hidden');
        }
        if (e.target.classList.contains('close-modal')) {
        const modal = e.target.closest('.fixed');
        if (modal) modal.classList.add('hidden');
    }
    });
}