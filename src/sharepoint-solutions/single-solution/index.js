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
registerBlockType(metadata.name, {
	title: metadata.title,
	description: metadata.description,
	supports: {
		// disable edit as html option
		html: false,
		// make sure that the block is not possible to make reusable again or to create a new pattern
		// reusable: false,
		block: true,
		recover: true,
	},
	parent: [ 'create-block/sharepoint-solutions' ],
	attributes: {
		title: {
			type: 'string',
			selector: 'h2.title',
			source: 'html',
		},
		info: {
			type: 'string',
			selector: 'p.info',
			source: 'html',
		},
		alt: {
            type: 'string',
            source: 'attribute',
            selector: 'img',
            attribute: 'alt',
            default: '',
        },
        url: {
            type: 'string',
            source: 'attribute',
            selector: 'img',
            attribute: 'src',
        },
        id: {
            type: 'number',
        },
	},
	edit: Edit,

	save,
});
