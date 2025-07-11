import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';


registerBlockType('create-block/team-wrapper', {
	edit: Edit,
	save: () => null, // Dynamic or same layout handled via PHP, or reusable if not saved.
}); 
