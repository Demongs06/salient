import { __ } from '@wordpress/i18n';
import {
	RichText,
	InspectorControls,
	useBlockProps,
} from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';

import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { linkText } = attributes;

	return (
		<div>
			<InspectorControls>
				<PanelBody title={__('Link Settings', 'blox-site')}>
					<TextControl
						label={__('Link Text', 'blox-site')}
						value={linkText}
						onChange={(newLinkText) =>
							setAttributes({ linkText: newLinkText })
						}
					/>
				</PanelBody>
			</InspectorControls>
			<RichText
				{...useBlockProps()}
				tagName="a"
				value={linkText}
				placeholder={__('Enter link text', 'blox-site')}
				className="text-base font-semibold leading-7 text-gray-900"
				onChange={(newLinkText) =>
					setAttributes({ linkText: newLinkText })
				}
			/>
			<span className="ml-[3px] not-prose" aria-hidden="true">
				→
			</span>
		</div>
	);
}
