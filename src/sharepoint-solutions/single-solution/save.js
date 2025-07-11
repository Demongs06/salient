import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const { info, title, alt, url, id } = attributes;

    return (
        <>
            <div {...useBlockProps.save()} className="flex lg:items-center flex-col lg:flex-row gap-5 p-4 rounded-lg shadow-lg bg-white">
                <div className="w-14 h-14">
                    {/* <img src="/assets/sharepoint/SVG 1.png" alt="" /> */}

                    {url && (
                        <>
                            <img
                                src={url}
                                alt={alt}
                                className={
                                    id
                                        ? `wp-image-${id}`
                                        : null
                                }
                            />
                        </>
                    )}
                </div>
                <div>
                    {/* <h2 className="font-bold text-lg ffsb">Document Management Solutions</h2> */}
                    <RichText.Content
                        className="title lfont-bold text-lg ffsb font-semibold"
                        value={title}
                        tagName="h2"
                    />
                    {/* <p className="lg:w-3/4 mt-1">Organize, share, and secure documents with streamlined
                        SharePoint-based management
                        systems.</p> */}
                    <RichText.Content
                        className="info lg:w-3/4 mt-1"
                        value={info}
                        tagName="p"
                    />
                </div>
            </div>
        </>



    );
}