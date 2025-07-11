import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

export default function Save({ attributes }) {
	const { title, info } = attributes;

	return (
		<>
			<section {...useBlockProps.save({
				className: 'bg-white py-16 px-6 md:px-12'
			})}>
				<div class="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-10 relative">
					<InnerBlocks.Content />
				</div>
			</section>
		</>
	);

}
