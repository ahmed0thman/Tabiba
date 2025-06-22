const btnModalTogglers = Array.from(
  document.querySelectorAll(".btn-modal-toggler")
);
const modals = Array.from(document.querySelectorAll(".modal"));

if (modals.length > 0) {
  modals.map((modal) => {
    if (modal.dataset.behavior === "closable") {
      modal.addEventListener("click", (e) => {
        if (e.target === e.currentTarget) {
          modal.classList.remove("show");
        }
      });
    }
  });
}

if (btnModalTogglers.length > 0) {
  btnModalTogglers.map((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.dataset.target;
      const action = btn.dataset.action;
      const modalTarget = document.getElementById(targetId);
      if (action === "close") {
        modalTarget.classList.remove("show");
      } else {
        modalTarget.classList.add("show");
      }
    });
  });
}
