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


            <div {...useBlockProps({
                className: `flex lg:items-center flex-col lg:flex-row gap-5 p-4 rounded-lg shadow-lg bg-white`,
            })}>
                <div className="w-14 h-14">
                    {/* <img src="/assets/sharepoint/SVG 1.png" alt="" /> */}
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
                </div>
                <div>
                    {/* <h2 className="font-bold text-lg ffsb">Document Management Solutions</h2> */}
                    <RichText
                        className="title font-bold text-lg ffsb"
                        placeholder="Title"
                        tagName="h2"
                        value={title}
                        onChange={(newTitle) => setAttributes({ title: newTitle })}
                    />
                    {/* <p className="lg:w-3/4 mt-1">Organize, share, and secure documents with streamlined
                            SharePoint-based management
                            systems.</p> */}
                    <RichText
                        className="info lg:w-3/4 mt-1"
                        placeholder="Info"
                        tagName="p"
                        value={info}
                        onChange={(newInfo) => setAttributes({ info: newInfo })}
                    />
                </div>
            </div>
        </>
    );
}

export default withNotices(Edit);