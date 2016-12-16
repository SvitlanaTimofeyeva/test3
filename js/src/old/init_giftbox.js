﻿

    var canvas, stage, exportRoot;
    function init_giftbox() {
        canvas = document.getElementById("giftbox");
        images = images || {};
        ss = ss || {};
        var loader = new createjs.LoadQueue(false);
        loader.addEventListener("fileload", handleFileLoad);
        loader.addEventListener("complete", handleComplete);
        loader.loadManifest(lib1.properties.manifest);


    }
    function handleFileLoad(evt) {
        if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
    }
    function handleComplete(evt) {
        //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
        var queue = evt.target;
        var ssMetadata = lib1.ssMetadata;
        for (i = 0; i < ssMetadata.length; i++) {
            ss[ssMetadata[i].name] = new createjs.SpriteSheet({ "images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames })
        }
        exportRoot = new lib1.Giftbox_animation();
        stage = new createjs.Stage(canvas);
        stage.addChild(exportRoot);

        //Registers the "tick" event listener.
        createjs.Ticker.setFPS(lib1.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);

        //Code to support hidpi screens and responsive scaling.
        (function (isResp, respDim, isScale, scaleType) {
            var lastW, lastH, lastS = 1;
            window.addEventListener('resize', resizeCanvas);
            resizeCanvas();
            function resizeCanvas() {
                var w = lib1.properties.width, h = lib1.properties.height;
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
                canvas.width = w * pRatio * sRatio;
                canvas.height = h * pRatio * sRatio;
                canvas.style.width = w * sRatio + 'px';
                canvas.style.height = h * sRatio + 'px';
                stage.scaleX = pRatio * sRatio;
                stage.scaleY = pRatio * sRatio;
                lastW = iw; lastH = ih; lastS = sRatio;
            }
        })(false, 'both', false, 1);
    }
    init_giftbox();


