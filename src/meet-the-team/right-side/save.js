import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const { info, title, alt, url, id, columns } = attributes;

    return (
        <>
            <div {...useBlockProps.save({
                className: 'meet-the-team-right-section  w-full lg:w-2/3 flex flex-col gap-10',
            })}>
                <InnerBlocks.Content />
            </div>
        </>
    );
}