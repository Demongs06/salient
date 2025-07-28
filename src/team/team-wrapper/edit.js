import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	MediaPlaceholder,
	RichText
} from '@wordpress/block-editor'; 
import { isBlobURL } from '@wordpress/blob';
import { useState } from '@wordpress/element';
import './editor.scss';

function TeamMember({ setAttributes, prefix, attributes }) {
	const url = attributes[`url${prefix}`];
	const alt = attributes[`alt${prefix}`];
	const title = attributes[`title${prefix}`];
	const info = attributes[`info${prefix}`];

	const isUploading = isBlobURL(url);
	const blobURL = useState(isUploading ? url : '')[0];
	const set = (key, val) => setAttributes({ [`${key}${prefix}`]: val });

	return (
		<div className="group relative w-full h-full overflow-hidden border-4 border-white ">
			<div className="relative w-full aspect-square overflow-hidden">
				{!url && (
					<MediaPlaceholder
						onSelect={(img) => {
							if (img && img.url) {
								set('url', img.url);
								set('id', img.id);
								set('alt', img.alt);
							}
						}}
						onSelectURL={(newURL) => set('url', newURL)}
						onError={(msg) => console.error(msg)}
						accept="image/*"
						allowedTypes={['image']}
						disableMediaButtons={url}
					/>
				)}
				{url && (
					<img
						src={url}
						alt={alt || ''}
						className="absolute inset-0 w-full h-full object-cover"
					/>
				)}
			</div>
			<div className="p-2 bg-white h-2/6">
				<RichText
					tagName="h2"
					className="text-sm lg:text-lg leading-none"
					placeholder="Position"
					value={title}
					onChange={(val) => set(`title`, val)}
				/>
				<RichText
					tagName="p"
					className="text-base font-medium lg:text-2xl xl:text-3xl leading-none"
					placeholder="Name"
					value={info}
					onChange={(val) => set(`info`, val)}
				/>
			</div>
		</div>
	);
}


export default function Edit({ attributes, setAttributes }) {

	return (
		<div {...useBlockProps()}>
			<div className="grid grid-cols-1 md:grid-rows-4 md:grid-cols-6 gap-4 w-full max-w-[1200px] mx-auto min-h-[800px]">
                {/* Member 1: Top left (3x3) */}
                <div className="h-[23rem] w-[23rem] md:h-auto md:w-auto md:row-span-2 md:col-span-3 md:row-start-1 md:col-start-1">
                    <TeamMember setAttributes={setAttributes} attributes={attributes} prefix="1" />
                </div>

                {/* Member 2: Top right (3x3) */}
                <div className="h-[23rem] w-[23rem] md:h-auto md:w-auto md:row-span-2 md:col-span-3 md:row-start-1 md:col-start-4">
                    <TeamMember setAttributes={setAttributes} attributes={attributes} prefix="2" />
                </div>

                {/* Member 3: Bottom left (2x2) */}
                <div className="h-[23rem] w-[23rem] md:h-auto md:w-auto md:row-span-2 md:col-span-2 md:row-start-3 md:col-start-1">
                    <TeamMember setAttributes={setAttributes} attributes={attributes} prefix="3" />
                </div>

                {/* Member 4: Bottom middle (2x2) */}
                <div className="h-[23rem] w-[23rem] md:h-auto md:w-auto md:row-span-2 md:col-span-2 md:row-start-3 md:col-start-3">
                    <TeamMember setAttributes={setAttributes} attributes={attributes} prefix="4" />
                </div>

                {/* Member 5: Bottom right (2x2) */}
                <div className="h-[23rem] w-[23rem] md:h-auto md:w-auto md:row-span-2 md:col-span-2 md:row-start-3 md:col-start-5">
                    <TeamMember setAttributes={setAttributes} attributes={attributes} prefix="5" />
                </div>
            </div>

		</div>
	);
}
