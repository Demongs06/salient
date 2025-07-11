import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	return (
		<div {...useBlockProps.save()}>
			<div className="grid grid-cols-1 md:grid-rows-4 md:grid-cols-6 gap-4 w-full max-w-[1200px] mx-auto min-h-[800px]">

				{/* Member 1 */}
				<div className="h-[23rem] w-[23rem] md:h-auto md:w-auto md:row-span-2 md:col-span-3 md:row-start-1 md:col-start-1">
					<div className="group relative w-full h-full overflow-hidden border-4 border-white transition-all duration-500 hover:border-8">
						<div className="relative w-full aspect-square overflow-hidden">
							{attributes.url1 && (
								<img
									src={attributes.url1}
									alt={attributes.alt1 || ''}
									className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 scale-125 group-hover:scale-150"
								/>
							)}
						</div>
						<div className="p-2 bg-white h-2/6">
							<RichText.Content
								tagName="h2"
								className="text-sm lg:text-lg leading-none"
								value={attributes.title1}
							/>
							<RichText.Content
								tagName="p"
								className="text-base font-medium lg:text-2xl xl:text-3xl leading-none"
								value={attributes.info1}
							/>
						</div>
					</div>
				</div>

				{/* Member 2 */}
				<div className="h-[23rem] w-[23rem] md:h-auto md:w-auto md:row-span-2 md:col-span-3 md:row-start-1 md:col-start-4">
					<div className="group relative w-full h-full overflow-hidden border-4 border-white transition-all duration-500 hover:border-8">
						<div className="relative w-full aspect-square overflow-hidden">
							{attributes.url2 && (
								<img
									src={attributes.url2}
									alt={attributes.alt2 || ''}
									className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 scale-125 group-hover:scale-150"
								/>
							)}
						</div>
						<div className="p-2 bg-white h-2/6">
							<RichText.Content
								tagName="h2"
								className="text-sm lg:text-lg leading-none"
								value={attributes.title2}
							/>
							<RichText.Content
								tagName="p"
								className="text-base font-medium lg:text-2xl xl:text-3xl leading-none"
								value={attributes.info2}
							/>
						</div>
					</div>
				</div>

				{/* Member 3 */}
				<div className="h-[23rem] w-[23rem] md:h-auto md:w-auto md:row-span-2 md:col-span-2 md:row-start-3 md:col-start-1">
					<div className="group relative w-full h-full overflow-hidden border-4 border-white transition-all duration-500 hover:border-8">
						<div className="relative w-full aspect-square overflow-hidden">
							{attributes.url3 && (
								<img
									src={attributes.url3}
									alt={attributes.alt3 || ''}
									className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 scale-125 group-hover:scale-150"
								/>
							)}
						</div>
						<div className="p-2 bg-white h-2/6">
							<RichText.Content
								tagName="h2"
								className="text-sm lg:text-lg leading-none"
								value={attributes.title3}
							/>
							<RichText.Content
								tagName="p"
								className="text-base font-medium lg:text-2xl xl:text-3xl leading-none"
								value={attributes.info3}
							/>
						</div>
					</div>
				</div>

				{/* Member 4 */}
				<div className="h-[23rem] w-[23rem] md:h-auto md:w-auto md:row-span-2 md:col-span-2 md:row-start-3 md:col-start-3">
					<div className="group relative w-full h-full overflow-hidden border-4 border-white transition-all duration-500 hover:border-8">
						<div className="relative w-full aspect-square overflow-hidden">
							{attributes.url4 && (
								<img
									src={attributes.url4}
									alt={attributes.alt4 || ''}
									className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 scale-125 group-hover:scale-150"
								/>
							)}
						</div>
						<div className="p-2 bg-white h-2/6">
							<RichText.Content
								tagName="h2"
								className="text-sm lg:text-lg leading-none"
								value={attributes.title4}
							/>
							<RichText.Content
								tagName="p"
								className="text-base font-medium lg:text-2xl xl:text-3xl leading-none"
								value={attributes.info4}
							/>
						</div>
					</div>
				</div>

				{/* Member 5 */}
				<div className="h-[23rem] w-[23rem] md:h-auto md:w-auto md:row-span-2 md:col-span-2 md:row-start-3 md:col-start-5">
					<div className="group relative w-full h-full overflow-hidden border-4 border-white transition-all duration-500 hover:border-8">
						<div className="relative w-full aspect-square overflow-hidden">
							{attributes.url5 && (
								<img
									src={attributes.url5}
									alt={attributes.alt5 || ''}
									className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 scale-125 group-hover:scale-150"
								/>
							)}
						</div>
						<div className="p-2 bg-white h-2/6">
							<RichText.Content
								tagName="h2"
								className="text-sm lg:text-lg leading-none"
								value={attributes.title5}
							/>
							<RichText.Content
								tagName="p"
								className="text-base font-medium lg:text-2xl xl:text-3xl leading-none"
								value={attributes.info5}
							/>
						</div>
					</div>
				</div>

			</div>
		</div>
	);
}