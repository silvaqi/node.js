function myFunction(){
    const message = document.querySelector("#message").value
    const notes = document.querySelector(".notesLog")
    notes.innerHTML += `${message}<br>`

    localStorage.setItem('Message', 'Test')
}

document.addEventListener('keypress', function(event){
    if(event.keyCode == 13){
        document.getElementById("btn").click()
    }
})