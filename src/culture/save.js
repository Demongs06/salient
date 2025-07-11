import {useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const {
		title
	} = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div className="culture py-16 px-6 bg-white md:px-12 lg:px-[61px] xl:px-[85px]">
				<div className="max-w-5xl mx-auto overflow-hidden xl:mx-0 xl:max-w-full">

					<RichText.Content
						tagName="h3"
						className="text-[42px] font-semibold m-0 flex overflow-hidden md:text-6xl lg:text-[5.75rem] xl:text-9xl"
						value={title}
					/>

					<InnerBlocks.Content />
					
				</div>
			</div>
		</div>
	);
}
