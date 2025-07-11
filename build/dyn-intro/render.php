<?php

function render_intro_dynamic($attributes, $content)
{
    // Extract attributes safely
    $title = isset($attributes['title']) ? esc_html($attributes['title']) : '';
    $subtitle = isset($attributes['subtitle']) ? esc_html($attributes['subtitle']) : '';
    $image_url = isset($attributes['url']) ? esc_url($attributes['url']) : '';
    $image_alt = isset($attributes['alt']) ? esc_attr($attributes['alt']) : '';
    $image_id = isset($attributes['id']) ? intval($attributes['id']) : 0;

    // Add the wp-image-ID class if ID exists
    $image_class = $image_id ? "wp-image-{$image_id} object-cover md:object-cover w-full h-[92vh] md:h-[80vh]" : '';

    ob_start();
?>
    <div <?php echo get_block_wrapper_attributes(array('class' => 'relative wp-block-intro-dynamic border-2 border-green-600')); ?>>
        <img src="<?php echo $image_url; ?>" alt="<?php echo $image_alt; ?>" class="<?php echo esc_attr($image_class); ?>" />

        <div class="absolute inset-0 bg-transparent sm:bg-gradient-to-r sm:from-black/95 sm:to-black/25 bg-gradient-to-t from-black/70 via-black/50 to-black/20">
            <div class="text-section-home-intro">
                <div class="max-w-xl">
                    <h1 class="md:text-2xl text-[44px] leading-tight font-[600] sm:text-5xl lg:text-7xl mb-1 text-white tracking-wide">
                        <?php echo $title; ?>
                    </h1>

                    <p class="block font-[300] leading-tight text-white text-[22px] sm:text-2xl lg:text-2xl pt-6 my-3">
                        <?php echo $subtitle; ?>
                    </p>
                </div>
            </div>
        </div>

        <div class="inner-blocks-wrapper">
            <?php echo $content; // 👈 This renders the InnerBlocks content 
            ?>
        </div>
    </div>
<?php
    return ob_get_clean();
}
