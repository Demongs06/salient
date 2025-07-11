import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const { info, title, alt, url, id, columns } = attributes;

    return (
        <>
            
            <div {...useBlockProps.save({
                className: `relative overflow-hidden group`
            })}>
                <div class="overflow-hidden">
                    {/* <img src="images/team1.jpg" alt="Phil Martinez" class="team-member-img" /> */}
                    {url && (
                        <img
                            src={url}
                            alt={alt}
                            className={
                                id
                                    ? `wp-image-${id} team-member-img`
                                    : null
                            }
                        />
                    )}
                </div>
                <div class="mt-4">
                    {/* <h5 class="text-sm text-gray-500">CEO, Founder</h5> */}
                    <RichText.Content
                        className="info text-sm text-gray-500"
                        tagName="p"
                        value={info}
                    />
                    {/* <h3 class="text-lg font-bold">Phil Martinez</h3> */}
                    <RichText.Content
                        className="title text-lg font-bold"
                        tagName="p"
                        value={title}
                    />
                </div>
            </div>
        </>



    );
}