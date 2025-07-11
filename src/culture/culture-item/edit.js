import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText
} from '@wordpress/block-editor';
import './editor.scss';

function Edit({ attributes, setAttributes}) {
	const { heading, subheading, number } = attributes;

	const onChangeHeading = (newHeading) => setAttributes({ heading: newHeading });
	const onChangeSubHeading = (newSubHeading) => setAttributes({ subheading: newSubHeading });
	const onChangeNumber = (newNumber) => setAttributes({ number: newNumber });

	return (
		<>
			<div {...useBlockProps()}>
				
				<div className="flex items-start justify-between pb-6">
					<div className="max-w-xl pr-8 xl:max-w-full">
							
						<RichText
							className="text-[27px] mb-2 md:text-3xl lg:text-xl xl:text-3xl"
							placeholder="Heading"
							tagName="h3"
							value={heading}
							onChange={onChangeHeading}
						/>

						<RichText
							className="text-[17px]"
							placeholder="Subheading"
							tagName="h3"
							value={subheading}
							onChange={onChangeSubHeading}
						/>

					</div>			

					<RichText
						className="text-[46px] my-auto md:text-7xl xl:text-[100px]"
						placeholder="No."
						tagName="h3"
						value={number}
						onChange={onChangeNumber}
					/>
						
				</div>
				
			</div>
		</>
	);
}



export default(Edit);