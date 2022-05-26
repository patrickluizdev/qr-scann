const scanner = new Instascan.Scanner({
    video: document.getElementById('webcam')
})

scanner.addListener('scan', content =>{
    console.log(content)
})

Instascan.Camera.getCameras().then( cameras => {
    if(cameras.legth > 0 ){
        scanner.start(cameras[0])
    }
})