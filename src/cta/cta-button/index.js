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
	parent: [ 'create-block/cta-block' ],
	attributes: {
		buttonText: {
			type: 'string',
			default: 'Get started',
		},
		buttonLink: {
			type: 'string',
			default: '#', // Set a default link if needed
		},
		linkObject: {
			type: 'object',
		},
	},
	edit: Edit,

	save,
} );
