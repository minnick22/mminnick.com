/**
 * jQuery Folder Slideshow
 * Michael Minnick
 * 3/30/2017
 */

/*
 * @Params
 * img - references to the img html tag of class slideshow
 * path - path to the folder where the images are stored
 * time - time each image is displayed (seconds)
 * fade - time of each fade transition (milliseconds)
 */
function doSlideshow(img, path, time, fade) {
    var path_to_php = "res/php/parse_dir.php"; // Make sure this is where you installed the pares_dir.php script.
    $.post(path_to_php, {"dir": path}, function (data) {
        var paths = data.split("|||"); //Split on delimiter specified as $BREAK in parse_dir.php
        var index = 0;
        preload(paths, path); //Comment out to save bandwidth, but may be choppy transitions
        setInterval(function() {
            if (index >= (paths.length - 1)){
                index = 0;
            }
            img.fadeOut(fade, function() {
                console.log("Showing " + index);
                img.attr("src", path+paths[index]);
                index ++;
            }) .fadeIn(fade);
        }, time * 1000);
    });
}


/*
 * To ensure smooth transitions between each image, leave this function call in doSlideshow.
 * This loads all of the images from the folder so that the slides flow seamlessly.
 * To conserve bandwidth (if you don't plan on viewing every image of the folder), comment out
 * or remove this call above.
 */
function preload(imgs, path) {
    $(imgs).each(function() {
        (new Image()).src = path + this;
    })
}