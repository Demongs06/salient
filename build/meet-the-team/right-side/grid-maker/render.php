<?php

if (!function_exists('render_grid_maker_block')) {
function render_grid_maker_block( $attributes, $content ) {
    $columns = isset($attributes['columns']) ? intval($attributes['columns']) : 2;
    return '<div class="wp-block-create-block-team-wrapper grid gridcols' . esc_attr($columns) . ' gap-10">' . $content . '</div>';
}
}