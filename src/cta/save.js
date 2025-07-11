import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

export default function Save( { attributes } ) {
	const { heading, subheading } = attributes;

	return (
		<div
			{ ...useBlockProps.save() }
			className="bg-white py-8 px-6 sm:px-6 sm:py-16 lg:px-8 cta-outer"
		>
			<div className="mx-auto max-w-2xl md:text-center text-left cta-content">
				<RichText.Content
					className="text-4xl font-bold tracking-tight text-gray-900 cta-heading"
					value={ heading }
					tagName="h2"
				/>
				<RichText.Content
					className="mx-auto text-lg my-6 leading-8 tracking-wide text-gray-600/80 cta-text"
					value={ subheading }
					tagName="p"
				/>

				<InnerBlocks.Content />
			</div>
		</div>
	);
}
