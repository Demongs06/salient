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
	const { title, subtitle, testimonial, name, position, url, alt, id } = attributes;
	const [blobURL, setBlobURL] = useState();

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
							help="Alt text is good to explain search engines and for people who cannot read it"
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

			<div {...useBlockProps()}>
				<div className="team py-16 px-6 bg-white md:px-11 lg:px-[61px] xl:px-[85px]">
					<div className="flex flex-col gap-12 lg:flex-row lg:gap-20 xl:gap-32">

						{/* LEFT COLUMN */}
						<div className="lg:w-4/12 space-y-8">
							{/* Title + Subtitle */}
							<div>
								<RichText
									className="text-3xl mb-4 md:text-[32px] lg:text-3xl xl:text-[43px]"
									placeholder="Title"
									tagName="h3"
									value={title}
									onChange={onChangeTitle}
								/>
								<RichText
									className="md:text-lg lg:text-[11px] lg:leading-loose xl:text-[15px]"
									placeholder="Subtitle"
									tagName="p"
									value={subtitle}
									onChange={onChangeSubtitle}
								/>
							</div>

							<div className='space-y-6 md:px-14 lg:px-4 xl:px-8 xl:space-y-8'>

								<hr className="block w-px h-8 bg-black border-0 mx-auto my-4"/>

								<RichText
										className="text-sm text-gray-500 font-medium"
										placeholder="Testimonial"
										tagName="p"
										value={testimonial}
										onChange={onChangeTestimonial}
									/>

								{/* Image + Text Block */}
								<div className="flex items-center gap-4">
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
										<div className={`${isBlobURL(url) ? ' is-loading' : ''}`}>
											<img src={url} alt={alt} className="w-16 h-16 rounded-full object-cover" />
											{isBlobURL(url) && <Spinner />}
										</div>
									)}
									<div>
										<RichText
											className="text-lg font-semibold md:text-base"
											placeholder="Name"
											tagName="h3"
											value={name}
											onChange={onChangeName}
										/>
										<RichText
											className="text-sm text-gray-500 font-medium"
											placeholder="Position"
											tagName="p"
											value={position}
											onChange={onChangePosition}
										/>
									</div>
								</div>
							</div>
							
						</div>

						<div className='right lg:w-8/12'>

							{/* InnerBlocks for Team Wrapper */}
							<InnerBlocks
								allowedBlocks={['create-block/team-wrapper']}
								template={[['create-block/team-wrapper']]}
								templateLock="all"
							/>

						</div>

					</div>
				</div>
			</div>
		</>
	);
}



export default withNotices(Edit);