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
            <InspectorControls>
                <PanelBody title="Total items in grid">
                    <RangeControl
                        label="Row Span"
                        min={1}
                        max={4}
                        defaultValue={2}
                        onChange={onChangeColumns}
                        value={columns}
                    />
                </PanelBody>
            </InspectorControls>

            {/* Right side only of the meet the team block */}
            <div {...useBlockProps({
                className: 'meet-the-team-right-section w-full lg:w-2/3 flex flex-col gap-10',
            })}>
                <InnerBlocks
                    allowedBlocks={['create-block/grid-maker']}
                    template={[
                        ['create-block/grid-maker', { columns: 2 }],
                        ['create-block/grid-maker', { columns: 3 }],
                    ]}
                />
            </div>
        </>
    );
}

export default withNotices(Edit);