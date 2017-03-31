<?php
/**
 * jQuery Folder Slideshow
 * Michael Minnick
 * Date: 3/30/17
 */

$ERR_PATH = "http://mminnick.com/slideshow";
$ALLOWED_EXTS = array("JPG", "PNG", "GIF", "jpg", "png", "gif");
$BREAK = "|||";

if (isset($_POST['dir'])) {
    $imgs = scandir("../images/");
    foreach ($imgs as $img) {
        $ext = pathinfo($img, PATHINFO_EXTENSION);
        if (in_array($ext, $ALLOWED_EXTS)) {
            echo $img.$BREAK;
        }
    }
} else {
    header("Location: $ERR_PATH");
}
?>