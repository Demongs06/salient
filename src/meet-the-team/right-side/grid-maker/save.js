import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const { columns } = attributes;

    return (
        <>
            <div {...useBlockProps.save({
                className: `grid gridcols${columns} gap-10`
            })}>
                <InnerBlocks.Content />
            </div>
        </>



    );
}