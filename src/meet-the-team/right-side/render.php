<?php

if (!function_exists('render_meet_the_team_right_section')) {
function render_meet_the_team_right_section($attributes, $content) {
    $class = 'meet-the-team-right-section w-full lg:w-2/3 flex flex-col gap-10';

    return '<div class="' . esc_attr($class) . '">' . $content . '</div>';
}
}