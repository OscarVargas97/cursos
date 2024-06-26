<?php

declare(strict_types=1);
require 'const.php';
require_once "function.php";
require_once "classes/NextMovie.php";

$next_movie = NextMovie::fetch_and_create_movie(API_URL);
$next_movie_data = $next_movie->get_data();
?>

<?php render_template('head', $next_movie_data); ?>
<?php render_template('main', array_merge(
    $next_movie_data,
    ["untilMessage" => $next_movie->get_util_message()]
)); ?>
<?php render_template('styles', $next_movie_data); ?>