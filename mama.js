function enviarMensaje() {
    var mensaje = document.getElementById("message").value;
    window.open("mailto:bertacecilia40@gmail.com?subject=Consulta&body=" + mensaje);
}
