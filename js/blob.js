
function loadScript() {
const blob = KUTE.fromTo('#blob1',
    {path: '#blob1'},
    {path: '#blob2'},
    {repeat: 555, duration: 4000, yoyo: true}
    )
    blob.start();

const heartL = KUTE.fromTo('#heart-left',
    {path: '#heart-left'},
    {path: '#round-left'},
    {repeat: 555, duration: 4000, yoyo: true}
    )
    heartL.start();

const heartR = KUTE.fromTo('#heart-right',
    {path: '#heart-right'},
    {path: '#round-right'},
    {repeat: 555, duration: 4000, yoyo: true}
    )
    heartR.start();
} window.onload = loadScript;