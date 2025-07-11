import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

export default function Save({ attributes }) {
	const { title, info, alt, url, id } = attributes;

	return (
		<>
			<section {...useBlockProps.save({
				className: 'max-w-7xl mx-auto text-center py-12 ffre brands'
			})}>
				{/* <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl lg:text-4xl">We are Trusted by Top Companies Across
					Globe</h2> */}
				<RichText.Content
					className="text-2xl font-bold text-gray-800 sm:text-3xl lg:text-4xl"
					value={title}
					tagName="h2"
				/>
				{/* <p className="mt-2 text-gray-600">Helping business building technology</p> */}
				<RichText.Content
					className="mt-2 text-gray-600"
					value={info}
					tagName="p"
				/>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-12">
					<InnerBlocks.Content />
				</div>
			</section>
		</>
	);

}
