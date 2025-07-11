import { __ } from '@wordpress/i18n';
import {
	RichText,
	InspectorControls,
	useBlockProps,
} from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	Popover,
	ToolbarGroup,
	ToolbarButton,
} from '@wordpress/components';
// import { useState } from "@wordpress/element"

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { buttonText } = attributes;

	// const [isLinkPickerVisible, setIsLinkPickerVisible] = useState(false);

	// const buttonHandler = () => {
	// 	setIsLinkPickerVisible
	// }

	return (
		<div { ...useBlockProps() }>
			<InspectorControls>
				<PanelBody title={ __( 'Button Settings', 'blox-site' ) }>
					<TextControl
						label={ __( 'Button Text', 'blox-site' ) }
						value={ buttonText }
						onChange={ ( newText ) =>
							setAttributes( { buttonText: newText } )
						}
					/>
				</PanelBody>
			</InspectorControls>

			{ /* <BlockControls>
				<ToolbarGroup>
					<ToolbarButton>
						Cijij
					</ToolbarButton>
				</ToolbarGroup>
			</BlockControls> */ }

			<RichText
				tagName="span"
				value={ buttonText }
				placeholder={ __( 'Enter button text', 'blox-site' ) }
				className="rounded-md inline bg-indigo-600 px-4 mt-12 py-2 text-base font-semibold leading-7 text-white hover:text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				onChange={ ( newText ) =>
					setAttributes( { buttonText: newText } )
				}
			/>
		</div>
	);
}
