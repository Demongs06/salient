import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const { info, title, alt, url, id } = attributes;

    return (
        <>

            <div {...useBlockProps.save({
                className: 'bg-white p-6 rounded-lg shadow-md text-left'
            })}>
                {/* <img src="assets/services/custome.png" alt="SharePoint Development" className="w-16 h-16 inline mb-6" /> */}
                {url && (
                    <img
                        src={url}
                        alt={alt}
                        className={
                            id
                                ? `wp-image-${id} w-16 h-16 inline mb-6`
                                : null
                        }
                    />
                )}
                {/* <h2 className="text-xl pb-4">Custom SharePoint Development</h2> */}
                <RichText.Content
                    className="title text-xl pb-4"
                    value={title}
                    tagName="h2"
                />
                {/* <p className="text-gray-600 mb-4 text-base">Tailor SharePoint to your needs with scalable solutions.
                    We design workflows, dashboards, and user-friendly features to align with your goals.
                </p> */}
                <RichText.Content
                    className="info text-gray-600 mb-4 text-base"
                    value={info}
                    tagName="p"
                />
            </div>
        </>



    );
}