const modal = $.modal()

const modalBtn = document.querySelector("#modal-win");

modalBtn.addEventListener('click', () => {
    modal.open()
});


const okBtn = document.querySelector('#ok-btn');
const cancelBtn = document.querySelector('#cancel-btn');

if (okBtn) {
    okBtn.addEventListener('click', () => {
        modal.close()
    })
}
if (cancelBtn) {
    cancelBtn.addEventListener('click', () => {
        modal.close()
    })
}