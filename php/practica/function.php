<?php

function render_template(string $template, array $data = [])
{
    extract($data);
    require "templates/$template.php";
}

function get_data(string $url): array
{
    $data = file_get_contents($url);
    return json_decode($data, true);
}
