if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./serviceWorker.js')
    .then(reg => console.log('Registro de SW exitoso', reg))
    .catch(err => console.log('Error al tratar de registar el sw', err))
}