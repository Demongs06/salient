import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	MediaPlaceholder,
	BlockControls,
	MediaReplaceFlow,
	InspectorControls
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
	const [blobURL, setBlobURL] = useState();

	const blockProps = useBlockProps({
		className: 'relative',
	});



	const onChangeTitle = (newTitle) => {
		setAttributes({ title: newTitle });
	};

	const onChangeSubtitle = (newSubtitle) => {
		setAttributes({ subtitle: newSubtitle });
	};

	const onSelectImage = (image) => {
		if (!image || !image.url) {
			setAttributes({ url: undefined, id: undefined, alt: '' });
			return;
		}
		setAttributes({ url: image.url, id: image.id, alt: image.alt });
	};
	const onSelectURL = (newURL) => {
		setAttributes({ url: newURL, id: undefined, alt: '' });
	};

	const onUploadError = (message) => {
		noticeOperations.removeAllNotices();
		noticeOperations.createErrorNotice(message);
	};

	const removeImage = () => {
		setAttributes({
			url: undefined,
			alt: '',
			id: undefined,
		});
	};

	const onChangeAlt = (newAlt) => {
		setAttributes({ alt: newAlt });
	};

	useEffect(() => {
		if (!id && isBlobURL(url)) {
			setAttributes({
				url: undefined,
				alt: '',
			});
		}
	}, []);

	useEffect(() => {
		if (isBlobURL(url)) {
			setBlobURL(url);
		} else {
			revokeBlobURL(blobURL);
			setBlobURL();
		}
	}, [url]);

	return (
		<>
			{ /* Image settings */}

			<InspectorControls>
				<PanelBody title="Image Settings">
					{url && !isBlobURL(url) && (
						<TextareaControl
							label="Alt text"
							value={alt}
							onChange={onChangeAlt}
							help={
								'Alt text is good to explain search engines and for people who can not read it'
							}
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
					<ToolbarButton onClick={removeImage}>
						Remove Image
					</ToolbarButton>
				</BlockControls>
			)}

			{ /* End of Image settings */}



			{/* NFPC SPECIFIC */}

			<div {...blockProps}>
				{/* <!-- Image --> */}
				<MediaPlaceholder
					onSelect={onSelectImage}
					onSelectURL={onSelectURL}
					onError={onUploadError}
					accept="image/*"
					allowedTypes={['image']}
					disableMediaButtons={url}
					notices={noticeUI}
				/>
				{url && (
					// Outer most div, image div
					<div className={` ${isBlobURL(url) ? ' is-loading' : ''} `} >
						<img src={url} alt={alt} className="object-cover md:object-cover w-full h-[92vh] md:h-[80vh]" />
						{isBlobURL(url) && <Spinner />}
					</div>
				)}
				{/* <!-- Image --> */}
				<div
					class="relative bg-transparent">
					<div class="relative h-auto top-auto mx-auto max-w-screen-xl md:ml-6 px-4 sm:px-6">
						<div class="max-w-xl md:text-left text-center ">
							<RichText
								className="md:text-2xl text-[44px] leading-tight font-[600] sm:text-5xl lg:text-7xl mb-1 text-black tracking-wide"
								placeholder="Subtitle"
								tagName="h3"
								value={title}
								onChange={onChangeTitle}
							/>
							<RichText
								className="block font-[300] leading-tight text-black text-[22px] sm:text-2xl lg:text-2xl pt-6 my-3"
								placeholder="Subtitle"
								tagName="p"
								value={subtitle}
								onChange={onChangeSubtitle}
							/>
						</div>
					</div>
				</div>
			</div>

			{/* NFPC SPECIFIC */}
		</>
	);
}

export default withNotices(Edit);
