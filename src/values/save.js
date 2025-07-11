import { useBlockProps, RichText } from '@wordpress/block-editor';
import './style.scss';

export default function save({ attributes }) {
	const { heading, subheading, subheadingtwo, url, alt, buttonText } = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div className="values flex flex-col items-center gap-8 p-7 md:p-12 lg:flex-row lg:px-[3.75rem] xl:px-[85px]">
				<div>
					{url && <img src={url} alt={alt} />}
				</div>

				<div className='right w-full lg:pl-[3.75rem]'>
					<RichText.Content className="text-3xl block overflow-hidden xl:text-[43px]" tagName="h2" value={heading} />
					<RichText.Content className="my-6 lg:text-xs xl:text-base" tagName="p" value={subheading} />
					<RichText.Content className="mb-6 lg:text-xs xl:text-base" tagName="p" value={subheadingtwo} />
					<RichText.Content className="font-medium text-lg px-9 py-3 border rounded-full shadow hover:border-black" tagName="a" value={buttonText} />
				</div>
			</div>
		</div>
	);
}
