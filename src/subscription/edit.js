import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	InnerBlocks
} from '@wordpress/block-editor';
import './editor.scss';

function Edit({ attributes, setAttributes}) {
	const { title } = attributes;

	const onChangeTitle = (newTitle) => setAttributes({ title: newTitle });

	return (
		<>
			<div {...useBlockProps()}>
				<div>
					<InnerBlocks>
						
					</InnerBlocks>
				</div>
			</div>
		</>
	);
}



export default(Edit);