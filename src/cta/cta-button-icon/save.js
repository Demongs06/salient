import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function Save( { attributes } ) {
	const { buttonText, buttonLink, iconClass, alignValue } = attributes;

	return (
		<div
			{ ...useBlockProps.save( {
				className:
					'not-prose rounded-md inline bg-indigo-600 px-4 mt-12 py-3 text-base no-underline font-semibold leading-7 text-white hover:text-white focus:text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
				href: buttonLink,
			} ) }
		>
			{iconClass && alignValue === 'align-left' ? <i className={`px-2 ${iconClass}`}></i> : ""}
			<RichText.Content
				tagName="a" // Use "span" or any appropriate HTML tag
				value={ buttonText }
			/>
			{iconClass && alignValue === 'align-right' ? <i className={`px-2 ${iconClass}`}></i> : ""}
		</div>
	);
}
