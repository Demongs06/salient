import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

export default function Save({ attributes }) {
	const { title, info, imgmsg, alt, url, id, buttonLink, buttonText } = attributes;

	return (
		<>
			<section {...useBlockProps.save({
				className: `resources bg-gradient-to-b from-blue-200/50 via-blue-200/40 to-transparent lg:px-24 md:px-16 px-5 py-12 lg:pt-12 lg:pb-8 ffre`
			})}>
				<div className="mx-auto max-w-7xl">

					<div className="py-4 lg:py-6 text-center ">
						{/* <h2 className="font-semibold lg:font-bold text-2xl md:text-3xl md:px-2">Our SharePoint Solutions</h2> */}
						<RichText.Content
							className="font-semibold lg:font-bold text-2xl md:text-3xl md:px-2"
							value={title}
							tagName="h2"
						/>
						{/* <p className="lg:px-80 text-lg sm:text-lg mt-5 opacity-80">Empowering your business with tailored SharePoint
                    solutions designed to enhance collaboration, streamline operations, and drive productivity.</p> */}
						<RichText.Content
							className="info lg:px-80 text-lg sm:text-lg mt-5 opacity-80"
							value={info}
							tagName="p"
						/>
					</div>

					<div className="flex flex-col items-center gap-10 lg:flex-row my-5 sm:my-10">
						<div className="sm:w-1/2 lg:order-2 flex flex-col gap-8 items-center">
							<div>
								{/* <img src="/assets/sharepoint/sharepoint-right.png" alt=""> */}
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
							<div className="text-center">
								{/* <p className="ffsb text-xl font-semibold lg:font-bold lg:text-2xl">Supercharge your Business with
									our
									Sharepoint Development</p> */}
								<RichText.Content
									className="imgmsg ffsb text-xl font-semibold lg:font-bold lg:text-2xl"
									value={imgmsg}
									tagName="p"
								/>
								<div className="text-center m-9">
									{/* <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-lg">Request a
										Free
										Quote</button> */}
									<RichText.Content
										tagName="div"
										className="btn-main"
										value={buttonText}
										href={buttonLink}
									/>
								</div>
							</div>
						</div>

						<div className="sm:w-1/2 space-y-4 lg:order-1">
							<InnerBlocks.Content />
						</div>

					</div>
				</div>
			</section>
		</>
	);

}
