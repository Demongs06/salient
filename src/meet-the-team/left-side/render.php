<?php
/**
 * Render callback for Meet the Team Left Section block
 */
if (!function_exists('render_meet_the_team_left_section')) {
function render_meet_the_team_left_section($attributes, $content) {
    ob_start();
    ?>
    <div class="w-full lg:w-1/3 space-y-6 lg:sticky lg:top-28 self-start meet-the-team-left"
         data-aos="fade-up"
         data-aos-duration="3000"
         data-rellax-speed="-2">
         
        
            <h2 class="title text-2xl ff-sb font-semibold mt-4">
                <?php echo esc_html($attributes['title']); ?>
            </h2>
        

        <?php echo $content; ?>
    </div>
    <?php
    return ob_get_clean();
    error_log('render_meet_the_team_left_section called');
}}
