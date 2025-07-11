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
				<div className="culture py-16 px-6 bg-white md:px-12 lg:px-[61px] xl:px-[85px]">
					<div className="max-w-5xl mx-auto overflow-hidden xl:mx-0 xl:max-w-full">	
							
						<RichText
							className="text-[42px] font-semibold m-0 flex overflow-hidden md:text-6xl lg:text-[5.75rem] xl:text-9xl"
							placeholder="Title"
							tagName="h3"
							value={title}
							onChange={onChangeTitle}
						/>

						<InnerBlocks
							allowedBlocks={['create-block/culture-item']}
							template={[
                                ['create-block/culture-item'],
                                ['create-block/culture-item'],
                                ['create-block/culture-item']                                ]}
							templateLock="all"
						/> 

					</div>
				</div>
			</div>
		</>
	);
}



export default(Edit);