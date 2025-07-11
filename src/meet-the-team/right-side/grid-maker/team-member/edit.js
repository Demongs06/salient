import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    MediaPlaceholder,
    BlockControls,
    MediaReplaceFlow,
    InspectorControls,
    RichText,
    InnerBlocks
} from '@wordpress/block-editor';
import {
    withNotices,
    ToolbarButton,
    PanelBody,
    TextareaControl,
    RangeControl
} from '@wordpress/components';
import { isBlobURL, revokeBlobURL } from '@wordpress/blob';
import { useEffect, useState } from '@wordpress/element';

import './editor.scss';

function Edit({ attributes, setAttributes, noticeOperations, noticeUI }) {
    const { info, title, alt, url, id, columns } = attributes;
    const [blobURL, setBlobURL] = useState();

    const onChangeTitle = (newTitle) => {
        setAttributes({ title: newTitle });
    };
    const onChangeInfo = (newInfo) => {
        setAttributes({ info: newInfo });
    };

    // Column related settings
    const onChangeColumns = (newColumns) => {
        setAttributes({ columns: newColumns });
    };
    // End of column settings

    // Image related functions
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

    // End of Image related functions


    return (
        <>
            {/* Image settings */}

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




            <div class="relative overflow-hidden group" {...useBlockProps({
                className: `relative overflow-hidden group`
            })}>
                <div class="overflow-hidden">
                    {/* <img src="images/team1.jpg" alt="Phil Martinez" class="team-member-img" /> */}
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
                            <img src={url} alt={alt} className="team-member-img" />
                            {isBlobURL(url) && <Spinner />}
                        </div>
                    )}
                </div>
                <div class="mt-4">
                    {/* <h5 class="text-sm text-gray-500">CEO, Founder</h5> */}
                    <RichText
                        className="info text-sm text-gray-500"
                        placeholder="Info"
                        tagName="p"
                        value={info}
                        onChange={onChangeInfo}
                    />
                    {/* <h3 class="text-lg font-bold">Phil Martinez</h3> */}
                    <RichText
                        className="title text-lg font-bold"
                        placeholder="title"
                        tagName="p"
                        value={title}
                        onChange={onChangeTitle}
                    />
                </div>
            </div>
        </>
    );
}

export default withNotices(Edit);