/*function mostrarModal(){
    const modal = new bootstrap.Modal(document.getElementById('#modal'));
    modal.show();
}*/

const modal = document.getElementById('modal')
const input = document.getElementById('input')

modal.addEventListener('shown.bs.modal', () => {
  input.focus()
})