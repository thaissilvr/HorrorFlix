let success = document.getElementById('success')
let reset = document.getElementById('reset')

success.addEventListener('click', () => {
    if (success) {
        reset.innerHTML = 'Your request has been sent. Please, follow the instructions on your email.'
        reset.style.fontSize = '16px'
    }
})