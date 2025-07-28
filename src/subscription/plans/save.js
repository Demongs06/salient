import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const {
		heading,
		subheading, 
		number
	} = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div className="flex items-start justify-between pb-6">
				
				<div className="max-w-xl pr-8 xl:max-w-full">
						
					<RichText.Content
						tagName="h3"
						className="text-[27px] mb-2 md:text-3xl lg:text-xl xl:text-3xl"
						value={heading}
					/>

					<RichText.Content
						tagName="h3"
						className="text-[17px]"
						value={subheading}
					/>

				</div>
		
				<RichText.Content
					tagName="h3"
					className="text-[46px] my-auto md:text-7xl xl:text-[100px]"
					value={number}
				/>
				
			</div>
		</div>
	);
}
