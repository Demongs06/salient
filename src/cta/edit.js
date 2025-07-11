import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { heading, subheading } = attributes;

	const onChangeHeading = ( newHeading ) => {
		setAttributes( { heading: newHeading } );
	};

	const onChangeSubheading = ( newSubHeading ) => {
		setAttributes( { subheading: newSubHeading } );
	};

	// console.log(...useBlockProps());
	return (
		<div
			{ ...useBlockProps() }
			className="border-2 border-gray-300 bg-white py-8 px-6 sm:px-6 sm:py-16 lg:px-8"
		>
			<div className="mx-auto max-w-2xl md:text-center text-left">
				<RichText
					className="text-4xl mb-6 font-bold tracking-tight text-gray-900"
					placeholder="Heading for CTA"
					tagName="h2"
					value={ heading }
					onChange={ onChangeHeading }
					allowedFormats={ [ 'core/italic' ] }
				/>
				<RichText
					className="mx-auto my-6 text-lg leading-8 text-gray-600"
					placeholder="Subheading for CTA"
					tagName="p"
					value={ subheading }
					onChange={ onChangeSubheading }
					allowedFormats={ [ 'core/italic' ] }
				/>
				<InnerBlocks
					allowedBlocks={ [
						'create-block/cta-button',
						'create-block/cta-button-icon',
						'create-block/cta-link',
					] }
					template={
						[
							['create-block/cta-button'], ['create-block/cta-link']
						]
					}
				/>
			</div>
		</div>
	);
}
