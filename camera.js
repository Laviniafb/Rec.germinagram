var camera = document.querySelector("video");
navigator.mediaDevices.getUserMedia({video:true}).then(stream => {
    camera.srcObject = stream;
    camera.play();
} ).catch(console.error(error));

document.querySelector(".camera").addEventListener('click', (e) => {
    var canvas = document.querySelector('canvas');
    console.log(canvas)
    e.preventDefault()
    canvas.height = video.videoHeight;
    canvas.width = video.videoWidth;
    var context = video.getContext('2d');
    context.drawImage(video, 0, 0);
    var link= document.createElement('a');
    link.download = "foto.png";
    link.href = canvas.toDataURL();
    link.textContent = "Clique aqui para baixar a foto";
    document.body.appendChild(link);
});

