import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    RichText,
    InnerBlocks
} from '@wordpress/block-editor';
import {
    withNotices,
} from '@wordpress/components';

import './editor.scss';

function Edit({ attributes, setAttributes }) {
    const { title } = attributes;

    const onChangeTitle = (newTitle) => {
        setAttributes({ title: newTitle });
    };


    return (
        <>
            <div {...useBlockProps({
                className: `meet-the-team-left-section w-full lg:w-1/3 space-y-6 lg:sticky self-start`,
            })}>

                <div class="w-full  space-y-6 lg:sticky lg:top-16 self-start" data-aos="fade-up"
                    data-aos-duration="3000">

                    <RichText
                        className="info text-left text-[18px] text-gray-800 mt-2 ff-re"
                        placeholder="Title"
                        tagName="h2"
                        value={title}
                        onChange={onChangeTitle}
                    />

                    <InnerBlocks />
                </div>

                {/* We will add a separate block for the quote later */}
            </div>
        </>
    );
}

export default withNotices(Edit);