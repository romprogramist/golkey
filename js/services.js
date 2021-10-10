console.log(params.has("dropId"));
if (params.has("dropId")) {
  dropId = params.get("dropId");
  const dropEl = document.querySelector(`#drop${dropId}`);
  dropEl.nextElementSibling.classList.remove("d-none");
  dropEl.children[1].classList.add("arrowDegree");
  window.location.href = `#drop${dropId}`;
}
