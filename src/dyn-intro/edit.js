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
	const { title, subtitle, alt, url, id } = attributes;
	const [blobURL, setBlobURL] = useState(null);

	const onChangeTitle = (newTitle) => setAttributes({ title: newTitle });
	const onChangeSubtitle = (newSubtitle) => setAttributes({ subtitle: newSubtitle });
	const onChangeAlt = (newAlt) => setAttributes({ alt: newAlt });

	const onSelectImage = (image) => {
		if (!image || !image.url) {
			setAttributes({ url: undefined, id: undefined, alt: '' });
			return;
		}
		setAttributes({ url: image.url, id: image.id, alt: image.alt });
	};

	const onSelectURL = (newURL) => setAttributes({ url: newURL, id: undefined, alt: '' });

	const onUploadError = (message) => {
		noticeOperations.removeAllNotices();
		noticeOperations.createErrorNotice(message);
	};

	const removeImage = () => {
		setAttributes({ url: undefined, alt: '', id: undefined });
	};

	useEffect(() => {
		if (!id && isBlobURL(url)) {
			setAttributes({ url: undefined, alt: '' });
		}
	}, [id, url, setAttributes]);

	useEffect(() => {
		if (isBlobURL(url)) {
			setBlobURL(url);
		} else {
			if (blobURL) revokeBlobURL(blobURL);
			setBlobURL(null);
		}
	}, [url]);

	return (
		<>
			<InspectorControls>
				<PanelBody title="Image Settings">
					{url && !isBlobURL(url) && (
						<TextareaControl
							label="Alt text"
							value={alt}
							onChange={onChangeAlt}
							help="Alt text is important for accessibility and SEO."
						/>
					)}
				</PanelBody>
			</InspectorControls>

			{url && (
				<BlockControls group="inline">
					<MediaReplaceFlow
						onSelect={onSelectImage}
						onSelectURL={onSelectURL}
						onError={onUploadError}
						accept="image/*"
						allowedTypes={['image']}
						mediaId={id}
						mediaURL={url}
					/>
					<ToolbarButton onClick={removeImage}>Remove Image</ToolbarButton>
				</BlockControls>
			)}

			<div className="relative" {...useBlockProps()}>
				<MediaPlaceholder
					onSelect={onSelectImage}
					onSelectURL={onSelectURL}
					onError={onUploadError}
					accept="image/*"
					allowedTypes={['image']}
					disableMediaButtons={!!url}
					notices={noticeUI}
				/>
				{url && (
					<div className={isBlobURL(url) ? 'is-loading' : ''}>
						<img src={url} alt={alt} className="object-cover w-full h-[92vh] md:h-[80vh]" />
						{isBlobURL(url) && <Spinner />}
					</div>
				)}
				<div className="relative bg-transparent">
					<div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 md:ml-6">
						<div className="max-w-xl text-center md:text-left">
							<RichText
								className="md:text-2xl text-[44px] font-semibold sm:text-5xl lg:text-7xl text-black tracking-wide"
								placeholder="Title"
								tagName="h3"
								value={title}
								onChange={onChangeTitle}
							/>
							<RichText
								className="block font-light text-[22px] sm:text-2xl lg:text-2xl text-black pt-6 my-3"
								placeholder="Subtitle"
								tagName="p"
								value={subtitle}
								onChange={onChangeSubtitle}
							/>
							<InnerBlocks />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default withNotices(Edit);
