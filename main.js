(function() {

    let player;
    let playerId;

    attachScript("https://cdn1.edgedatg.com/aws/apps/datg/web-player-unity/1.0.11.1/js/datg-player.min.js", scriptLoaded);

    function embed(playerType) {
        let targetDOM = $("#videoContainer")[0];
        let params = { autoplay: true };
        let videoId = $("#disneyVideo").val();

        playerId = "datgPlayer" + parseInt(Math.random() * 1000);

        params.partnerId = "";
        params.brand = "";
        params.videoId = videoId;
        
        // What is token ? Where does this value come from?
        params.token = "";

        player = datgPlayer.embed(playerId, targetDOM, playerType, params);

        player.on(datgPlayer.Events.PLAYER_READY, () => {
            console.log("Player is ready");
        })
    };

    function scriptLoaded() {
        datgPlayer.addEventsListener(evt => {
            console.log("datgPlayer", event.data.playerId, event.name, event.data);
        });

        console.log("\n ==============================")
        console.log("Script Loaded, Calling embed()");
        console.log("==============================\n")
        embed(datgPlayer.LIVE);
    };

    function errorCallback() {
        return !!errorCallback ? errorCallback(scriptUrl) : 0;
    };

    function attachScript(scriptUrl, readyCallback, errorCallback) {
        const head = document.getElementsByTagName("head")[0];

        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = scriptUrl;
        script.onreadystatechange = _readyCallback;
        script.onload = _readyCallback;
        script.onerror = _errorCallback;

        function _errorCallback() {
            return !!errorCallback ? errorCallback(scriptUrl) : 0;
        };

        function _readyCallback() {
            return !!readyCallback ? readyCallback(scriptUrl) : 0;
        };

        head.appendChild(script);
    };

})();