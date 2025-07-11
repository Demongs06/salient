import { __ } from '@wordpress/i18n';
import {
	RichText,
	InspectorControls,
	useBlockProps,
} from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	RadioControl
} from '@wordpress/components';
// import { useState } from "@wordpress/element"

import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { buttonText, iconClass, alignValue } = attributes;

	const onChangeIconClass = (newIconClass) => {
		setAttributes({ iconClass: newIconClass })
	}
	const onChangeAlignOption = (newAlignOption) => {
		setAttributes({ alignValue: newAlignOption })
	}

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody title={__('Button Settings', 'blox-site')}>
					<TextControl
						label={__('Button Text', 'blox-site')}
						value={buttonText}
						onChange={(newText) =>
							setAttributes({ buttonText: newText })
						}
					/>
				</PanelBody>
				<PanelBody title="Text Panel Settings">
					<TextControl
						label="Enter FA Icon Class"
						value={iconClass}
						onChange={onChangeIconClass}
					/>
					<RadioControl
						label="Alignment options"
						selected={alignValue}
						options={[
							{ label: 'Align Left', value: 'align-left' },
							{ label: 'Align Right', value: 'align-right' },
						]}
						onChange={onChangeAlignOption}
					/>
				</PanelBody>
			</InspectorControls>

			<div className='rounded-md inline bg-indigo-600 px-4 mt-12 py-2 text-base font-semibold leading-7 text-white hover:text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
				{iconClass && alignValue === 'align-left' ? <i className={`px-2 ${iconClass}`}></i> : ""}
				<RichText
					tagName="span"
					value={buttonText}
					placeholder={__('Enter button text', 'blox-site')}
					className=""
					onChange={(newText) =>
						setAttributes({ buttonText: newText })
					}
				/>
				{iconClass && alignValue === 'align-right' ? <i className={`px-2 ${iconClass}`}></i> : ""}
			</div>
		</div>
	);
}
