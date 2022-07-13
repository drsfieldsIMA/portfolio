/** @format */

import Head from "next/head";
import Image from "next/image";
import { useRef } from "react";
import { Card } from "../node_modules/react-bootstrap/esm/index";

function Home() {
	let myTarget = useRef();
	let myOutput = useRef();

	return (
		<>
			<div>
				<Head>
					<title>Welcome to shaun fields portfolio</title>
					<meta name='description' content='Generated by create next app' />
					<link rel='icon' href='/favicon.ico' />
				</Head>
			</div>
			<nav className='navbar navbar-expand-lg navbar-light bg-light'>
				<a className='navbar-brand' href='#'>
					<Image
						src='/logo_sf.svg'
						alt='Picture of the author'
						width={70}
						height={70}
					/>
				</a>

				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav'>
						<li className='nav-item active'>
							<a className='nav-link' href='index.html'>
								Home
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='design.html'>
								Design Process
							</a>
						</li>
					</ul>
				</div>
			</nav>
			<div className='ticker-wrapper'>
				<div className='bigHeading'>Breaking</div>
				<div className='text-update'>
					<p>
						You have a good way of abstrating code and so far have done well.
						The traingles add alot of energy to the project I cannot wait to see
						the final result
					</p>
				</div>
			</div>
			<main>
				<section className='one'>
					<div className='portfolio-bio'>
						<h1> Shaun Fields Portfolio</h1>
						<h2>Personal Statement</h2>
						<p className='bio'>
							I am happiest solving problems with concise computer code whether
							it be solving the trajectory of a satellite or coding the user
							interface in-front of you. I am developing websites currently with
							Javascript, Next, React and HTML. I have also taught engineering
							undergrads how to utilize engineering software and Virtual Reality
							applications using C++.
						</p>
					</div>
				</section>
				<div className='container_2'></div>
				<section className='two'>
					<h2>Websites</h2>
					<div className='image-grid'>
						<Card className='desktop-card'>
							<h3>GreenCycle</h3>
							<div className='img-block'>
								<Image
									src='/greencycle_desktop.png'
									alt='Picture of the author'
									width={680}
									height={365}
									className='desktop_img'
								/>
								<Image
									src='/greencycle_mob.png'
									alt='Picture of the author'
									width={150}
									height={365}
								/>
							</div>
							<p>
								Ever wondered how you can recycle more phones, furniture,
								clothes and scrap metal. By leveraging the power of the internet
								and the large GreenCycle community we can give 2nd hand products
								and 2nd life.
							</p>
							<div className='btn-block'>
								<a
									href='https://feu-2-final-exam-3.vercel.app/'
									className='btn-primary'>
									GreenCycle Site
								</a>
								<a
									href='https://github.com/drsfieldsIMA/AIDA_development/tree/main'
									className='btn-primary'>
									Git hub
								</a>
							</div>
						</Card>
						<Card className='mob-card'>
							<h3>GreenCycle</h3>
							<Image
								src='/greencycle_mob.png'
								alt='Picture of the author'
								width={150}
								height={365}
							/>
							<p>
								Ever wondered how we can recycle more through our communities.
								We mean more of you and your networks phones, electrics, clothes
								and furniture recycled through this app. The GreenCycle
								community are here to safeguard and contribute to stewarding the
								Earth`s resources by leveraging the world wide web`s scale.
							</p>
							<div className='btn-block'>
								<a
									href='https://feu-2-final-exam-3.vercel.app/'
									className='btn-primary'>
									GreenCycle Site
								</a>
								<a
									href='https://github.com/drsfieldsIMA/AIDA_development/tree/main'
									className='btn-primary'>
									Git hub
								</a>
							</div>
						</Card>
						<Card className='desktop-card'>
							<h3>Level up news</h3>
							<div className='img-block'>
								<Image
									src='/lun_desktop.png'
									alt='Picture of the author'
									width={680}
									height={365}
									className='desktop_img'
								/>
								<Image
									src='/lun_mob.png'
									alt='Picture of the author'
									width={150}
									height={365}
								/>
							</div>
							<p>
								Level up news positive news stories. Level up news | Powered by
								Positivity
							</p>
							<div className='btn-block'>
								<a
									href='https://drsfields-ima-semester-project-2-resit-2.vercel.app/'
									className='btn-primary'>
									Level up News Site
								</a>
								<a
									href='https://github.com/drsfieldsIMA/drsfieldsIMA-semester-project-2-resit-2/tree/main'
									className='btn-primary'>
									Git hub
								</a>
							</div>
						</Card>
						<Card className='mob-card'>
							<h3>Level up news</h3>
							<Image
								src='/lun_mob.png'
								alt='Picture of the author'
								width={150}
								height={365}
							/>
							<p>Level up news positive news stories</p>
							<div className='btn-block'>
								<a
									href='https://drsfields-ima-semester-project-2-resit-2.vercel.app/'
									className='btn-primary'>
									Level up News Site
								</a>
								<a
									href='https://github.com/drsfieldsIMA/drsfieldsIMA-semester-project-2-resit-2/tree/main'
									className='btn-primary'>
									Git hub
								</a>
							</div>
						</Card>

						<Card className='desktop-card'>
							<h3>Letha Shoes</h3>
							<div className='img-block'>
								<Image
									src='/Letha_desktop.png'
									alt='Picture of the author'
									width={680}
									height={365}
									className='desktop_img'
								/>
								<Image
									src='/Letha_mob.png'
									alt='Picture of the author'
									width={150}
									height={365}
								/>
							</div>
							<p>Letha Shoes Leather Tannery</p>
							<div className='btn-block'>
								<a
									className='btn-primary'
									href='http://www.fishcab.no/portfolio/shoes/'>
									Letha Site
								</a>
								<a
									className='btn-primary'
									href='https://github.com/drsfieldsIMA/Letha_shoes/tree/main'>
									Github
								</a>
							</div>
						</Card>
						<Card className='mob-card'>
							<h3>Letha Shoes</h3>
							<Image
								src='/Letha_mob.png'
								alt='Picture of the author'
								width={150}
								height={365}
							/>
							<p>Letha Shoes Leather Tannery</p>
							<div className='btn-block'>
								<a
									className='btn-primary'
									href='http://www.fishcab.no/portfolio/shoes/'>
									Letha Site
								</a>
								<a
									className='btn-primary'
									href='https://github.com/drsfieldsIMA/Letha_shoes/tree/main'>
									Github
								</a>
							</div>
						</Card>
						<Card className='desktop-card'>
							<h3>Hikes, adventure and trails</h3>
							<div className='img-block'>
								<Image
									src='/hike_desktop.png'
									alt='Picture of the author'
									width={680}
									height={365}
									className='desktop_img'
								/>
								<Image
									src='/hike_mob.png'
									alt='Picture of the author'
									width={150}
									height={365}
								/>
							</div>
							<p>Hikes Adventure Trails</p>
							<div className='btn-block'>
								<a
									className='btn-primary'
									href='http://www.fishcab.no/portfolio/hikes/'>
									Hikes Adventures Trails
								</a>
								<a
									className='btn-primary'
									href=' https://github.com/drsfieldsIMA/hikes/tree/main'>
									Github
								</a>
							</div>
						</Card>
						<Card className='mob-card'>
							<h3>Hikes, adventure and trails</h3>
							<Image
								src='/hike_mob.png'
								alt='Picture of the author'
								width={150}
								height={365}
							/>
							<p>Hikes Adventure Trails</p>
							<div className='btn-block'>
								<a
									className='btn-primary'
									href='http://www.fishcab.no/portfolio/hikes/'>
									Hikes Adventures Trails
								</a>
								<a
									className='btn-primary'
									href=' https://github.com/drsfieldsIMA/hikes/tree/main'>
									Github
								</a>
							</div>
						</Card>
					</div>
				</section>
				<section className='three'>
					<h2>Github</h2>
					<div className='btn-grid'>
						<a
							className='btn btn-large btn-primary'
							href='https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-drsfieldsIMA'>
							<i className='fas fa-link pull-left'></i>Javascript Frameworks
						</a>
					</div>
				</section>
			</main>
			<footer className='footer'>
				<a
					href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'>
					Powered by{" "}
					<span className='logo'>
						<Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
					</span>
				</a>
			</footer>
		</>
	);
}

export default Home;
