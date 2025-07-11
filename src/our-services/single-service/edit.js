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
    ToolbarButton,
    PanelBody,
    TextareaControl
} from '@wordpress/components';
import { isBlobURL, revokeBlobURL } from '@wordpress/blob';
import { useEffect, useState } from '@wordpress/element';

import './editor.scss';

function Edit({ attributes, setAttributes, noticeOperations, noticeUI }) {
    const { title, info, alt, url, id } = attributes;
    const [blobURL, setBlobURL] = useState();

    const onChangeTitle = (newTitle) => {
        setAttributes({ title: newTitle });
    };
    const onChangeInfo = (newInfo) => {
        setAttributes({ info: newInfo });
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

            {/* <section {...useBlockProps()}>
                {url ? (
                    <div className="bg-white flex justify-center items-center">
                        <img src={url} alt={alt} className="h-full w-full" />
                        <ToolbarButton icon="trash" label="Remove Image" onClick={removeImage} />
                    </div>
                ) : (
                    <MediaPlaceholder
                        onSelect={onSelectImage}
                        onError={noticeOperations.createErrorNotice}
                        accept="image/*"
                        allowedTypes={['image']}
                        notices={noticeUI}
                    />
                )}
            </section> */}

            <div {...useBlockProps({
                className: `bg-white p-6 rounded-lg shadow-md text-left`,
            })}>
                {/* <img src="assets/services/custome.png" alt="SharePoint Development" className="w-16 h-16 inline mb-6" /> */}
                {url ? (
                    <div>
                        <img src={url} alt={alt} className='w-16 height-auto inline mb-6' />
                        <ToolbarButton icon="trash" label="Remove Image" onClick={removeImage} />
                    </div>
                ) : (
                    <MediaPlaceholder
                        onSelect={onSelectImage}
                        onError={noticeOperations.createErrorNotice}
                        accept="image/*"
                        allowedTypes={['image']}
                        notices={noticeUI}
                    />
                )}
                {/* <h2 className="text-xl pb-4">Custom SharePoint Development</h2> */}
                <RichText
                    className="title text-xl pb-4"
                    placeholder="Title"
                    tagName="h2"
                    value={title}
                    onChange={onChangeTitle}
                />
                {/* <p className="text-gray-600 mb-4 text-base">Tailor SharePoint to your needs with scalable solutions.
                    We design workflows, dashboards, and user-friendly features to align with your goals.
                </p> */}
                <RichText
                    className="info text-gray-600 mb-4 text-base"
                    placeholder="Info"
                    tagName="p"
                    value={info}
                    onChange={onChangeInfo}
                />
            </div>
        </>
    );
}

export default withNotices(Edit);