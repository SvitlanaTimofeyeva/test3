var canvas3, stage, exportRoot;
function init3() {
    canvas3 = document.getElementById("giftbox");
    images3 = images3 || {};
    ss = ss || {};
    var loader = new createjs1.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("complete", handleComplete);
    loader.loadManifest(lib3.properties.manifest);
}
function handleFileLoad(evt) {
    if (evt.item.type == "image") { images3[evt.item.id] = evt.result; }
}
function handleComplete(evt) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var queue = evt.target;
    var ssMetadata = lib3.ssMetadata;
    for (i = 0; i < ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet({ "images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames })
    }
    exportRoot = new lib3.Giftbox_animation();
    stage = new createjs1.Stage(canvas3);
    stage.addChild(exportRoot);
    //Registers the "tick" event listener.
    createjs1.Ticker.setFPS(lib3.properties.fps);
    createjs1.Ticker.addEventListener("tick", stage);
    //Code to support hidpi screens and responsive scaling.
    (function (isResp, respDim, isScale, scaleType) {
        var lastW, lastH, lastS = 1;
        window.addEventListener('resize', resizecanvas3);
        resizecanvas3();
        function resizecanvas3() {
            var w = lib3.properties.width, h = lib3.properties.height;
            var iw = window.innerWidth, ih = window.innerHeight;
            var pRatio = window.devicePixelRatio, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
            if (isResp) {
                if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                    sRatio = lastS;
                }
                else if (!isScale) {
                    if (iw < w || ih < h)
                        sRatio = Math.min(xRatio, yRatio);
                }
                else if (scaleType == 1) {
                    sRatio = Math.min(xRatio, yRatio);
                }
                else if (scaleType == 2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            canvas3.width = w * pRatio * sRatio;
            canvas3.height = h * pRatio * sRatio;
            canvas3.style.width = w * sRatio + 'px';
            canvas3.style.height = h * sRatio + 'px';
            stage.scaleX = pRatio * sRatio;
            stage.scaleY = pRatio * sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
        }
    })(false, 'both', false, 1);
}

init3();