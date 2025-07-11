import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	MediaPlaceholder,
	BlockControls,
	MediaReplaceFlow,
	InspectorControls,
	InnerBlocks
} from '@wordpress/block-editor';
import {
	withNotices,
	Spinner,
	ToolbarButton,
	PanelBody,
	TextareaControl
} from '@wordpress/components';
import { isBlobURL, revokeBlobURL } from '@wordpress/blob';
import { useEffect, useState } from '@wordpress/element';

import './editor.scss';

function Edit({ attributes, setAttributes, noticeOperations, noticeUI }) {
	const { title, info, alt, url, id } = attributes;
	const [blobURL, setBlobURL] = useState();




	return (
		<>

			<section {...useBlockProps({
				className: 'bg-white py-16 px-6 md:px-12 ',
			})}>
				<div class="relative">
					<InnerBlocks
						// allowedBlocks={['create-block/meet-team-left-side', 'create-block/meet-team-right-side']}
						orientation="horizontal"
						template={[
							['create-block/meet-team-left-side'],
							['create-block/meet-team-right-side'],
						]}
					/>
				</div>
			</section>
		</>
	);
}

export default withNotices(Edit);
