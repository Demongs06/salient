<?php

if (!function_exists('render_team_wrapper')) {
	function render_team_wrapper($attributes) {
		ob_start();
		?>
		<div class="grid grid-cols-1 md:grid-rows-4 md:grid-cols-6 gap-4 w-full max-w-[1200px] mx-auto min-h-[800px]">
			<?php for ($i = 1; $i <= 5; $i++): 
				$url = $attributes["url$i"] ?? '';
				$title = $attributes["title$i"] ?? '';
				$info = $attributes["info$i"] ?? '';
				$alt = $attributes["alt$i"] ?? '';
				
				$colSpan = ($i <= 2) ? 3 : 2;
				$colStart = ($i == 1) ? 1 : (($i == 2) ? 4 : (($i == 3) ? 1 : (($i == 4) ? 3 : 5)));
				$rowSpan = 2;
				$rowStart = ($i <= 2) ? 1 : 3;
			?>
			<div class="h-[23rem] w-[23rem] md:h-auto md:w-auto md:row-span-<?php echo $rowSpan; ?> md:col-span-<?php echo $colSpan; ?> md:row-start-<?php echo $rowStart; ?> md:col-start-<?php echo $colStart; ?>">
				<div class="group relative w-full h-full overflow-hidden border-4 border-white transition-all duration-500 hover:border-8">
					<div class="relative w-full aspect-square overflow-hidden">
						<?php if ($url): ?>
							<img
								src="<?php echo esc_url($url); ?>"
								alt="<?php echo esc_attr($alt); ?>"
								class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 scale-125 group-hover:scale-150"
							/>
						<?php endif; ?>
					</div>
					<div class="p-2 bg-white h-2/6">
						<h2 class="text-sm lg:text-lg leading-none"><?php echo esc_html($title); ?></h2>
						<p class="text-base font-medium lg:text-2xl xl:text-3xl leading-none"><?php echo esc_html($info); ?></p>
					</div>
				</div>
			</div>
			<?php endfor; ?>
		</div>
		<?php
		return ob_get_clean();
	}
}
