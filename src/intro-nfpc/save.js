import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
	const { title, subtitle, alt, url, id, paddingTop,
		paddingRight,
		paddingBottom,
		paddingLeft } = attributes;

	const blockProps = useBlockProps.save({
		className: 'relative',
		style: {
			paddingTop: `${paddingTop}px`,
			paddingRight: `${paddingRight}px`,
			paddingBottom: `${paddingBottom}px`,
			paddingLeft: `${paddingLeft}px`
		}
	});

	return (
		<>


			{/* NFPC SPECIFIC */}
			<div {...blockProps}>
				{url && (
					<img
						src={url}
						alt={alt}
						className={
							id
								? `wp-image-${id}  object-cover md:object-cover w-full h-[92vh] md:h-[80vh]`
								: null
						}
					/>
				)}
				<div
					class="absolute inset-0 bg-transparent sm:bg-gradient-to-r sm:from-black/95 sm:to-black/25 bg-gradient-to-t from-black/70 via-black/50 to-black/20">
					<div class="text-section-home-intro">
						<div class="max-w-xl">
							<RichText.Content
								className="md:text-2xl text-[44px] leading-tight font-[600] sm:text-5xl lg:text-7xl mb-1 text-white tracking-wide"
								value={title}
								tagName="h1"
							/>
							<RichText.Content
								className="block font-[300] leading-tight text-white text-[22px] sm:text-2xl lg:text-2xl pt-6 my-3"
								value={subtitle}
								tagName="p"
							/>
						</div>
					</div>
				</div>
			</div>
			{/* NFPC SPECIFIC */}

		</>
	);

}
