var swfobject = {};

swfobject.embedSWF = function(url, cont){
    var ruffle = window.RufflePlayer.newest(),
        container = document.getElementById(cont),
        player = Object.assign(container.appendChild(ruffle.createPlayer()), {
            style: 'width: 100%; height: 100%;',
        });

    player.load({ url: url });
}
