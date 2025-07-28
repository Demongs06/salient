import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const { info, title, alt, url, id, columns } = attributes;

    return (
        <>
            <div {...useBlockProps.save({
                className: `w-full lg:w-1/3 space-y-6 lg:sticky lg:top-28 self-start meet-the-team-left`,
                'data-aos': 'fade-up',
                'data-aos-duration': '3000',
                'data-rellax-speed': '-2'
            })}>
                <RichText.Content
                    className="title text-2xl ff-sb font-semibold mt-4"
                    value={title}
                    tagName="h2"
                />

                <InnerBlocks.Content />

            </div>
        </>



    );
}