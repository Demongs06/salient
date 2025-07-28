<?php
/**
 * Render callback for Meet Team Left Side Block
 *
 * @param array $attributes Block attributes.
 * @return string Rendered HTML.
 */
function render_meet_team_left_side( $attributes ) {
	$title       = isset( $attributes['title'] ) ? esc_html( $attributes['title'] ) : '';
	$subtitle    = isset( $attributes['subtitle'] ) ? esc_html( $attributes['subtitle'] ) : '';
	$testimonial = isset( $attributes['testimonial'] ) ? esc_html( $attributes['testimonial'] ) : '';
	$name        = isset( $attributes['name'] ) ? esc_html( $attributes['name'] ) : '';
	$position    = isset( $attributes['position'] ) ? esc_html( $attributes['position'] ) : '';
	$url         = isset( $attributes['url'] ) ? esc_url( $attributes['url'] ) : '';
	$alt         = isset( $attributes['alt'] ) ? esc_attr( $attributes['alt'] ) : '';

	ob_start();
	?>
	<div class="meet-the-team-left-section w-full lg:w-1/3 space-y-6 self-start">
		<div class="w-full space-y-6 lg:sticky lg:top-16 self-start">
			
			<?php if ( $title ) : ?>
				<h2 class="info text-left text-[18px] text-gray-800 mt-2 ff-re"><?php echo $title; ?></h2>
			<?php endif; ?>

			<?php if ( $subtitle ) : ?>
				<p class="md:text-lg lg:text-[11px] lg:leading-loose xl:text-[15px]"><?php echo $subtitle; ?></p>
			<?php endif; ?>

			<div class="space-y-6 md:px-14 lg:px-4 xl:px-8 xl:space-y-8">
				<hr class="block w-px h-8 bg-black border-0 mx-auto my-4" />

				<?php if ( $testimonial ) : ?>
					<p class="text-sm text-gray-500 font-medium"><?php echo $testimonial; ?></p>
				<?php endif; ?>

				<div class="flex items-center gap-4">
					<?php if ( $url ) : ?>
						<div>
							<img src="<?php echo $url; ?>" alt="<?php echo $alt; ?>" class="w-16 h-16 rounded-full object-cover" />
						</div>
					<?php endif; ?>

					<div>
						<?php if ( $name ) : ?>
							<h3 class="text-lg font-semibold md:text-base"><?php echo $name; ?></h3>
						<?php endif; ?>

						<?php if ( $position ) : ?>
							<p class="text-sm text-gray-500 font-medium"><?php echo $position; ?></p>
						<?php endif; ?>
					</div>
				</div>
			</div>

		</div>
	</div>
	<?php
	return ob_get_clean();
}
