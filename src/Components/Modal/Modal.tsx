export const Modal = function () {
    return (
        <>
            <div className="modal hidden" id="modal">
                <div className="modal-header">
                    <h2 id="modalTitle"></h2>
                    <button onClick={() => {
                        const modal = document.getElementById("modal")
                        if (modal) {
                            modal?.classList.add("hidden")
                            document.getElementById("modalTitle")!.textContent = "";
                            document.getElementById("modalMessage")!.textContent = "";
                        }
                    }} id="exitModal">
                        X
                    </button>
                </div>
                <div className="modal-body">
                    <p id="modalMessage"></p>
                </div>
            </div>
        </>
    )
}