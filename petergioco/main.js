var swfobject = {};

swfobject.embedSWF = function(url, cont){
    var ruffle = window.RufflePlayer.newest(),
        container = document.getElementById(cont),
        player = Object.assign(container.appendChild(ruffle.createPlayer()), {
            style: 'width: 100%; height: 100%;',
        });

    player.load({ url: url });

    // Aggiungi il supporto per il fullscreen
    container.addEventListener('click', function() {
        if (container.requestFullscreen) {
            container.requestFullscreen();
        } else if (container.mozRequestFullScreen) {
            container.mozRequestFullScreen();
        } else if (container.webkitRequestFullscreen) {
            container.webkitRequestFullscreen();
        } else if (container.msRequestFullscreen) {
            container.msRequestFullscreen();
        }
    });
}
