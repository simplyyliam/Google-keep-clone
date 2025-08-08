document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  const firstBtn = sidebar.querySelector(".nav-btn:first-child");
  const firstBtnIcon = firstBtn.querySelector("svg");
  const firstBtnText = firstBtn.querySelector("h1");

  const createModal = document.querySelector(".create-note-modal");
  const titleInput = createModal.querySelector("#title");
  const textInput = createModal.querySelector("#text");
  const actionTools = createModal.querySelector(".action-tools");
  const closeBtn = createModal.querySelector("#close");

  function closeSidebar() {
    sidebar.style.width = "max-content";

    sidebar.querySelectorAll(".nav-btn h1").forEach((h1) => {
      h1.style.display = "none";
    });

    firstBtn.style.backgroundColor = "transparent";
    firstBtn.style.borderRadius = "0";
    firstBtnIcon.style.backgroundColor = "#FFC10750";
    firstBtnIcon.style.borderRadius = "50%";
    firstBtnIcon.style.padding = "6px";
    firstBtnIcon.style.display = "block";
  }

  function openSidebar() {
    sidebar.style.width = "280px";

    sidebar.querySelectorAll(".nav-btn h1").forEach((h1) => {
      h1.style.display = "block";
    });

    firstBtn.style.backgroundColor = "#FFC10750";
    firstBtn.style.borderRadius = "0 25px 25px 0";

    firstBtnIcon.style.backgroundColor = "transparent";
    firstBtnIcon.style.borderRadius = "0";
    firstBtnIcon.style.padding = "0";
    firstBtnIcon.style.display = "inline";
  }

  closeSidebar();

  sidebar.addEventListener("mouseenter", openSidebar);
  sidebar.addEventListener("mouseleave", closeSidebar);

  function closeModal() {
    titleInput.style.display = "none";
    actionTools.style.display = "none";
  }

  closeModal();

  textInput.addEventListener("focus", () => {
    titleInput.style.display = "block";
    actionTools.style.display = "flex";
  });

  window.addEventListener('click', () => {
    closeModal()
  })

  textInput.addEventListener('click', (e) => {
    e.stopPropagation()
  })
});
