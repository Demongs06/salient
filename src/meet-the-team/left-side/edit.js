import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	MediaPlaceholder,
	BlockControls,
	MediaReplaceFlow,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	withNotices,
	Spinner,
	ToolbarButton,
	PanelBody,
	TextareaControl,
} from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import { isBlobURL, revokeBlobURL } from '@wordpress/blob';

import './editor.scss';

function Edit({ attributes, setAttributes, noticeOperations, noticeUI }) {
	const { title, subtitle, testimonial, name, position, url, alt, id } = attributes;
	const [blobURL, setBlobURL] = useState();

	// Handlers
	const onChangeTitle = (newTitle) => setAttributes({ title: newTitle });
	const onChangeSubtitle = (newSubtitle) => setAttributes({ subtitle: newSubtitle });
	const onChangeTestimonial = (newTestimonial) => setAttributes({ testimonial: newTestimonial });
	const onChangeName = (newName) => setAttributes({ name: newName });
	const onChangePosition = (newPosition) => setAttributes({ position: newPosition });
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
	const removeImage = () => setAttributes({ url: undefined, alt: '', id: undefined });
	const onChangeAlt = (newAlt) => setAttributes({ alt: newAlt });

	// Cleanup blob URLs
	useEffect(() => {
		if (!id && isBlobURL(url)) {
			setAttributes({ url: undefined, alt: '' });
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
			<InspectorControls>
				<PanelBody title="Image Settings">
					{url && !isBlobURL(url) && (
						<TextareaControl
							label="Alt text"
							value={alt}
							onChange={onChangeAlt}
							help="Describes the image for accessibility and SEO."
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
						{__('Remove Image', 'blox-site')}
					</ToolbarButton>
				</BlockControls>
			)}

			<div {...useBlockProps({
				className: 'meet-the-team-left-section w-full lg:w-1/3 space-y-6 lg:sticky self-start',
			})}>
				<div
					className="w-full space-y-6 lg:sticky lg:top-16 self-start"
					data-aos="fade-up"
					data-aos-duration="3000"
				>
					{/* Title */}
					<RichText
						className="info text-left text-[18px] text-gray-800 mt-2 ff-re"
						tagName="h2"
						placeholder={__('Enter title...', 'blox-site')}
						value={title}
						onChange={onChangeTitle}
					/>

					{/* Subtitle */}
					<RichText
						className="md:text-lg lg:text-[11px] lg:leading-loose xl:text-[15px]"
						tagName="p"
						placeholder={__('Enter subtitle...', 'blox-site')}
						value={subtitle}
						onChange={onChangeSubtitle}
					/>

					<div className="space-y-6 md:px-14 lg:px-4 xl:px-8 xl:space-y-8">
						<hr className="block w-px h-8 bg-black border-0 mx-auto my-4" />

						{/* Testimonial */}
						<RichText
							className="text-sm text-gray-500 font-medium"
							tagName="p"
							placeholder={__('Enter testimonial...', 'blox-site')}
							value={testimonial}
							onChange={onChangeTestimonial}
						/>

						{/* Image + Name + Position */}
						<div className="flex items-center gap-4">
							{!url && (
								<MediaPlaceholder
									onSelect={onSelectImage}
									onSelectURL={onSelectURL}
									onError={onUploadError}
									accept="image/*"
									allowedTypes={['image']}
									disableMediaButtons={url}
									notices={noticeUI}
								/>
							)}

							{url && (
								<div className={`${isBlobURL(url) ? ' is-loading' : ''}`}>
									<img
										src={url}
										alt={alt}
										className="w-16 h-16 rounded-full object-cover"
									/>
									{isBlobURL(url) && <Spinner />}
								</div>
							)}

							<div>
								<RichText
									className="text-lg font-semibold md:text-base"
									tagName="h3"
									placeholder={__('Enter name...', 'blox-site')}
									value={name}
									onChange={onChangeName}
								/>
								<RichText
									className="text-sm text-gray-500 font-medium"
									tagName="p"
									placeholder={__('Enter position...', 'blox-site')}
									value={position}
									onChange={onChangePosition}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default withNotices(Edit);
