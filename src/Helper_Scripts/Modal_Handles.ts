export const showSuccessModal = function (message: string, title: string) {
    const modal = document.getElementById("modal")
    if (modal) {
        if (modal?.classList.contains("error")) {
            modal.classList.remove("error")
        }
        if (!(modal?.classList.contains("success"))) {
            modal.classList.add("success")
        }
        modal?.classList.remove("hidden")
        document.getElementById("modalTitle")!.textContent = title;
        document.getElementById("modalMessage")!.textContent = message;
    }
}
export const showErrorModal = function (message: string, title: string) {
    const modal = document.getElementById("modal")
    if (modal) {
        if (modal?.classList.contains("success")) {
            modal.classList.remove("success")
        }
        if (!(modal?.classList.contains("error"))) {
            modal.classList.add("error")
        }
        modal?.classList.remove("hidden")
        document.getElementById("modalTitle")!.textContent = title;
        document.getElementById("modalMessage")!.textContent = message;
    }
}