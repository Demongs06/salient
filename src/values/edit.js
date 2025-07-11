import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	MediaPlaceholder,
	BlockControls,
	MediaReplaceFlow,
	InspectorControls,
	RichText
} from '@wordpress/block-editor';

import {
	withNotices,
	Spinner,
	ToolbarButton,
	PanelBody,
	TextareaControl,
	TextControl
} from '@wordpress/components';
import { isBlobURL, revokeBlobURL } from '@wordpress/blob';
import { useEffect, useState } from '@wordpress/element';
import './editor.scss';

function Edit({ attributes, setAttributes, noticeOperations, noticeUI }) {
	const {url, alt, id, heading, subheading, subheadingtwo, buttonText } = attributes;
	const [blobURL, setBlobURL] = useState();

	const onChangeHeading = (newHeading) => setAttributes({ heading: newHeading });
	const onChangeSubheading = (newSubheading) => setAttributes({ subheading: newSubheading });
	const onChangeSubheadingTwo = (newSubheadingTwo) => setAttributes({ subheadingtwo: newSubheadingTwo });
	
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

				<PanelBody title={ __( 'Button Settings', 'blox-site' ) }>
					<TextControl
						label={ __( 'Button Text', 'blox-site' ) }
						value={ buttonText }
						onChange={ ( newText ) =>
							setAttributes( { buttonText: newText } )
						}
					/>
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
				<div className='values flex flex-col items-center gap-8 p-7 md:p-12 lg:flex-row lg:px-[3.75rem] xl:px-[85px]'>
					<div>
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
								<img src={url} alt={alt} className="" />
								{isBlobURL(url) && <Spinner />}
							</div>
						)}
					</div>

					<div className='right w-full lg:pl-[3.75rem]'>
						<RichText
							className="text-3xl block overflow-hidden xl:text-[43px]"
							placeholder="Heading"
							tagName="h2"
							value={ heading }
							onChange={ onChangeHeading }
							allowedFormats={ [ 'core/italic' ] }
						/>
						<RichText
							className="my-6 lg:text-xs xl:text-base"
							placeholder="Info"
							tagName="p"
							value={ subheading }
							onChange={ onChangeSubheading }
							allowedFormats={ [ 'core/italic' ] }
						/>
						<RichText
							className="mb-6 lg:text-xs xl:text-base"
							placeholder="Info"
							tagName="p"
							value={ subheadingtwo }
							onChange={ onChangeSubheadingTwo }
							allowedFormats={ [ 'core/italic' ] }
						/>
						<RichText
							tagName="a"
							value={ buttonText }
							placeholder={ __( 'Enter button text', 'blox-site' ) }
							className="font-medium text-lg px-9 py-3 border rounded-full shadow hover:border-black"
							onChange={ ( newText ) =>
								setAttributes( { buttonText: newText } )
							}
						/>
					</div>

				</div>
			</div>
		</>
	);
}



export default withNotices(Edit);