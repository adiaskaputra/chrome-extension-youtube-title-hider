// Set new title
const newTitle = "Secret";

// Hapus judul tab saat halaman dimuat
document.title = "";

// Pantau perubahan judul dinamis khas YouTube (SPA)
const observer = new MutationObserver(() => {
  if (document.title !== "" && document.title !== newTitle) {
    document.title = newTitle;
  }
});

// Mulai observasi pada elemen <title>
observer.observe(document.querySelector("title"), {
  subtree: true,
  childList: true,
  characterData: true,
});
