import { registerBlockType } from '@wordpress/blocks';

import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
	apiVersion: 2,
    title: metadata.title,
    category: metadata.category,
	supports: {
		// disable edit as html option
		html: false,
		// make sure that the block is not possible to make reusable again or to create a new pattern
		// reusable: false,
		block: true,
	},
	attributes: {
		heading: {
			type: 'string',
			selector: 'h2',
			source: 'html',
		},
		subheading: {
			type: 'string',
			selector: 'p',
			source: 'html',
		},
	},
	edit: Edit,

	save,
} );
