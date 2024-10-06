const emailButton = document.getElementById('copy')
emailButton.addEventListener('click', ()=>{ 
    const emailAddress ='kimberlyadelaidagomez@gmail.com'
    navigator.clipboard.writeText(emailAddress);
    emailButton.innerHTML='Copied!'
})