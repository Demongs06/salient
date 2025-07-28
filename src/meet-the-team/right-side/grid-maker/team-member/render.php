<?php
/**
 * Server-side render for the Team Member block.
 *
 * @package blox-site
 */

function render_team_member_block( $attributes ) {
    $info    = isset( $attributes['info'] ) ? esc_html( $attributes['info'] ) : '';
    $title   = isset( $attributes['title'] ) ? esc_html( $attributes['title'] ) : '';
    $alt     = isset( $attributes['alt'] ) ? esc_attr( $attributes['alt'] ) : '';
    $url     = isset( $attributes['url'] ) ? esc_url( $attributes['url'] ) : '';
    $id      = isset( $attributes['id'] ) ? intval( $attributes['id'] ) : 0;

    ob_start();
    ?>
    <div class="wp-block-create-block-team-member relative overflow-hidden group">
        <div class="overflow-hidden">
            <?php if ( $url ) : ?>
                <img
                    src="<?php echo $url; ?>"
                    alt="<?php echo $alt; ?>"
                    class="<?php echo $id ? 'wp-image-' . $id : ''; ?> team-member-img"
                />
            <?php endif; ?>
        </div>
        <div class="mt-4">
            <p class="info text-sm text-gray-500"><?php echo $info; ?></p>
            <p class="title text-lg font-bold"><?php echo $title; ?></p>
        </div>
    </div>
    <?php
    return ob_get_clean();
}
