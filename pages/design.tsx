
import Head from "next/head";
import Image from "next/image";
import { useRef } from "react";
import { Card } from "../node_modules/react-bootstrap/esm/index";


function Design() {
  return (
    <>
  <Head>
    <title>Shaun Fields Portfolio Design </title>
  </Head>
  
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
							<a className='nav-link' href='/'>
								Home
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='/design'>
								Design Process
							</a>
						</li>
					</ul>
				</div>
			</nav>
    <div className="design_container">
      <div className="row">
        <div className="col-12">
            <table className="table table-container">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Question</th>
                    <th scope="col">Answer</th>
                  </tr>
                </thead>
                <tbody className="table table-container">
                    <tr>
                        <th scope="row"></th>
                        <td>What type of online shopper are you? For 
                            example, do you buy on a whim or do you 
                            have a pre- planned idea of what products 
                            you will purchase?</td>
                        <td style="d-sm-none d-md-block d-block">
                            Pre-planner. I never shop without an idea of 
                            what I am buying. I often use physical 
                            shops to test the products before I buy it 
                            cheaper online.</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>How long do you browse for a product on 
                            average? Is there a cut-off point?</td>
                        <td style="d-sm-none d-md-block d-block">
                            15-25 mins but after lock down I use the 
internet more regularly to shop.</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>Which was the better online store?</td>
                        <td style="d-sm-none d-md-block d-block">
                            DNA because it was like other sites I have 
                            used.</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>What stores have you used and would 
                            recommend?</td>
                        <td style="d-sm-none d-md-block d-block">
                            Amazon, I find amazon easy to use. </td>
                    </tr>
                   
                </tbody>
              </table>
  
      </div>

      </div>
    </div>
  </body >
);
}

export default Design;
