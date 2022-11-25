$.modal = function(options) {
    function _createModal(options) {
        const modal = document.createElement('div');
        modal.classList.add('modal_1');
        modal.insertAdjacentHTML('afterbegin', `
            <div class="modal-overlay">
                <div class="modal-window">
                    <div class="modal-header">
                        <span class="modal-title">Title</span>
                        <span class="modal-close">&times;</span>
                    </div>
                    <div class="modal-body">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div class="modal-footer">
                        <button id="ok-btn" class="btn btn-primary" style="margin-right: 5px">Ok</button>
                        <button id="cancel-btn" class="btn btn-danger">Cancel</button>
                    </div>
                </div>
            </div>
        `)
        document.body.appendChild(modal);
        return modal
    };

    const $modal = _createModal(options);

    return {
        open() {
            $modal.classList.add('open');
        },
        close() {
            $modal.classList.remove('open');
        },
        destroy() {}
    };
};