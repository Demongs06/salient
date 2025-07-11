import { RichText, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const {
		title,
		subtitle,
		testimonial,
		name,
		position,
		url,
		alt,
	} = attributes;

	return (
		<div className="team py-16 px-6 bg-white md:px-11 lg:px-[61px] xl:px-[85px]">
			<div className="flex flex-col gap-12 lg:flex-row lg:gap-20 xl:gap-32">

				{/* LEFT COLUMN */}
				<div className="lg:w-4/12 space-y-8"
					>
					{/* Title + Subtitle */}
					<div>
						<RichText.Content
							tagName="h3"
							className="text-3xl mb-4 md:text-[32px] lg:text-3xl xl:text-[43px]"
							value={title}
						/>
						<RichText.Content
							tagName="p"
							className="md:text-lg lg:text-[11px] lg:leading-loose xl:text-[15px]"
							value={subtitle}
						/>
					</div>

					<div className="space-y-6 md:px-14 lg:px-4 xl:px-8 xl:space-y-8">
						<hr className="block w-px h-8 bg-black border-0 mx-auto my-4" />

						<RichText.Content
							tagName="p"
							className="text-sm text-gray-500 font-medium"
							value={testimonial}
						/>

						{/* Image + Text Block */}
						<div className="flex items-center gap-4">
							{url && (
								<img
									src={url}
									alt={alt}
									className="w-16 h-16 rounded-full object-cover"
								/>
							)}
							<div>
								<RichText.Content
									tagName="h3"
									className="text-lg font-semibold md:text-base"
									value={name}
								/>
								<RichText.Content
									tagName="p"
									className="text-sm text-gray-500 font-medium"
									value={position}
								/>
							</div>
						</div>
					</div>
				</div>

				{/* RIGHT COLUMN */}
				<div className="right lg:w-8/12">
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
}
