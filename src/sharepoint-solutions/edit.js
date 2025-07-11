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
	const { title, info, imgmsg, alt, url, id, buttonText, buttonLink } = attributes;
	const [blobURL, setBlobURL] = useState();



	// const onChangeTitle = (newTitle) => {
	// 	setAttributes({ title: newTitle });
	// };

	// const onChangeSubtitle = (newSubtitle) => {
	// 	setAttributes({ subtitle: newSubtitle });
	// };

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

			{/* <InspectorControls>
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
			)} */}

			{ /* End of Image settings */}



			<section {...useBlockProps({
				className: `resources bg-gradient-to-b from-blue-200/50 via-blue-200/40 to-transparent md:px-16 px-5 py-12 lg:py-14 ffre `
			})}>
				<div className="mx-auto max-w-7xl">

					<div className="py-4 lg:py-6 text-center ">
						{/* <h2 className="font-semibold lg:font-bold text-2xl md:text-3xl md:px-2">Our SharePoint Solutions</h2> */}
						<RichText
							className="font-semibold lg:font-bold text-2xl md:text-3xl md:px-2"
							placeholder="Title"
							tagName="h2"
							value={title}
							onChange={(newTitle) => setAttributes({ title: newTitle })}
						/>
						{/* <p className="lg:px-80 text-lg sm:text-lg mt-5 opacity-80">Empowering your business with tailored SharePoint
							solutions designed to enhance collaboration, streamline operations, and drive productivity.</p> */}
						<RichText
							className="info lg:px-80 text-lg sm:text-lg mt-5 opacity-80"
							placeholder="Info"
							tagName="p"
							value={info}
							onChange={(newInfo) => setAttributes({ info: newInfo })}
						/>
					</div>

					<div className="flex flex-col items-center gap-10 lg:flex-row my-5 sm:my-10">
						<div className="sm:w-1/2 lg:order-2 flex flex-col gap-8 items-center">
							<div>
								{/* <img src="/assets/sharepoint/sharepoint-right.png" alt="" /> */}
								{url ? (
									<>
										<img src={url} alt={alt} className='' />
										<ToolbarButton icon="trash" label="Remove Image" onClick={removeImage} />
									</>
								) : (
									<MediaPlaceholder
										onSelect={onSelectImage}
										onError={noticeOperations.createErrorNotice}
										accept="image/*"
										allowedTypes={['image']}
										notices={noticeUI}
									/>
								)}
							</div>
							<div className="text-center">
								{/* <p className="ffsb text-xl font-semibold lg:font-bold lg:text-2xl">Supercharge your Business with
									our
									Sharepoint Development</p> */}
								<RichText
									className="imgmsg lg:px-80 text-lg sm:text-lg mt-5 opacity-80"
									placeholder="Message"
									tagName="p"
									value={imgmsg}
									onChange={(newimgmsg) => setAttributes({ imgmsg: newimgmsg })}
								/>
								<div className="text-center m-9" {...useBlockProps()}>
									{/* <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-lg">Request a
										Free
										Quote</button> */}
									<RichText
										tagName="div"
										value={buttonText}
										placeholder={__('Enter button text', 'blox-site')}
										className="btn-main"
										onChange={(newText) =>
											setAttributes({ buttonText: newText })
										}
									/>

								</div>
							</div>
						</div>

						<div className="sm:w-1/2 space-y-4 lg:order-1">
							<InnerBlocks allowedBlocks={['create-block/single-solution']} />
						</div>

					</div>
				</div>
			</section>
		</>
	);
}

export default withNotices(Edit);
