<?php
/**
 * Validates youtube id
 */
function validId($id) {
    return preg_match('/^[a-zA-Z0-9_-]{11}$/', $id) > 0;
}

$youtubeId = $_GET['youtubeid'];

if (validId($youtubeId) === false) {
    throw new \Exception('Wrong youtube id', 1526895820);
}

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://img.youtube.com/vi/' . $youtubeId . '/maxresdefault.jpg');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$output = curl_exec($ch);
curl_close($ch);


header('Pragma: public');
header('Cache-Control: max-age=86400');
header('Expires: '. gmdate('D, d M Y H:i:s \G\M\T', time() + 86400));
header('Content-type: image/jpeg');

echo $output;
