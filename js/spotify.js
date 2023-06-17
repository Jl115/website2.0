window.onSpotifyIframeApiReady = (IFrameAPI) => {
    const element = document.getElementById('embed-iframe');
    const options = {
        width: '100%',
        height: '80',
        uri: 'spotify:track:3JRPTo5duVeClewOpIlLxn?si=32ce338b5d454f4c'
    };
    const callback = (EmbedController) => {
        document.querySelectorAll('.episode').forEach(
            episode => {
                episode.addEventListener('click', () => {
                    EmbedController.loadUri(episode.dataset.spotifyId)
                });
            })
    };
    IFrameAPI.createController(element, options, callback);
};