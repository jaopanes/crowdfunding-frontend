/* bookmark */

const bookmark = document.querySelector(".bookmark")

bookmark.addEventListener("click", () => {
    bookmark.animate([
        { opacity: 0.6 },
        { opacity: 1 }
    ], {
        duration: 1000,
    })

    setTimeout(() => {
        bookmark.toggleAttribute("marked")

        if (bookmark.hasAttribute("marked")) {
            bookmark.innerHTML = "Bookmarked"
        } else {
            bookmark.innerHTML = "Bookmark"
        }
    }, 500)
})

/* animate progress bar */

const progressBar = document.querySelector(".progress .bar")

progressBar.animate([
    { width: '0%' },
    { width: '50%' },
], {
    duration: 1000,
})

/* pladges */

const selectsModal = document.querySelectorAll(".select-base")
const allPladges = document.querySelectorAll(".select-base label .pladge-option")

selectsModal.forEach(select => {
    const pladge = select.querySelector("label .pladge-option")
    const input = select.querySelector("input[name='select']")

    input.addEventListener("change", () => {
        select.animate([
            { opacity: 0.6 },
            { opacity: 1 }
        ], {
            duration: 1000,
        })

        setTimeout(() => {
            if (pladge != null && pladge.classList.contains("active")) {
                pladge.classList.remove("active")
            } else {
                allPladges.forEach(i => {
                    i.classList.remove("active")
                })

                pladge != null && pladge.classList.toggle("active")
            }
        }, 500)
    })
})

/* modal */

const modalTriggers = document.querySelectorAll(".modal-trigger")
const allModals = document.querySelectorAll(".modal-base")

modalTriggers.forEach(trigger => {
    const dataModal = trigger.dataset.modal
    const modalActive = document.querySelector(`[data-modal-name="${dataModal}"]`)
    const contentModal = document.querySelector(`[data-modal-name="${dataModal}"] .content-modal`)
    const btnExit = document.querySelector(`[data-modal-name="${dataModal}"] .content-modal .exit-modal`)

    if (modalActive) {
        trigger.addEventListener('click', () => {
            allModals.forEach(modal => {
                modal.classList.remove("modal-active")
            })

            modalActive.classList.add("modal-active")
        })

        window.addEventListener("keydown", (e) => {
            if (e.key === 'Escape') {
                modalActive.classList.remove("modal-active")
            }
        })

        contentModal.addEventListener('click', (e) => {
            e.stopPropagation()
        })

        modalActive.addEventListener('click', () => {
            modalActive.classList.remove("modal-active")
        })

        if (btnExit) {
            btnExit.addEventListener('click', () => {
                modalActive.classList.remove("modal-active")
            })
        }
    }
})