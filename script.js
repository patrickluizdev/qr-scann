const scanner = new Instascan.Scanner({
    video: document.getElementById('webcam')
})

scanner.addListener('scan', content =>{
    console.log(content)
})

