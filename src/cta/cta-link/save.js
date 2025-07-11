import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function Save({ attributes }) {
	const { linkText } = attributes;

	return (
		<>
			<span className='not-prose'>
				<RichText.Content
					{...useBlockProps.save()}
					tagName="a"
					value={linkText}
					className="not-prose text-base font-semibold ml-4 leading-7 text-gray-900"
				/>
			</span>

			<span className="ml-[3px] not-prose" aria-hidden="true">
				→
			</span>
		</>
	);
}
