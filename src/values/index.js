import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import Save from './save'; // Required if not using dynamic PHP rendering

registerBlockType('create-block/values', {
	edit: Edit,
	save: Save
});
