<?php
/**
 * Render callback for the Grid Maker block.
 */

function render_grid_maker_block($attributes, $content) {
    $columns = isset($attributes['columns']) ? intval($attributes['columns']) : 2;
    $class = "grid gridcols-{$columns} gap-10";
    ?>
    <div class="<?php echo esc_attr($class); ?>">
        <?php echo $content; ?>
    </div>
    <?php
}
