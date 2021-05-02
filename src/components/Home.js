import React from 'react'
import "./Home.css";

export function Home() {
    return (
        <div>
            <div className="offerSection">
            <img
                className="offerSectionImage"
                 src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/4/28/a70471ea-3613-4eb9-afd2-5c78e25a84a31619610673464-desktop-men.jpg"
                alt="offerSectionHeroImage"
            />
            </div>

            <h4 className="subHeading">
                Best offers on Top Brands
            </h4>
            <div className="brandListingSection">
                <div className="brandCard">
                <img
                src="https://d168jcr2cillca.cloudfront.net/uploadimages/logo/us-polo-assn-2019071711.png"
                alt="offerSectionBrandImage"
                />
                <h5>Up-to 50% OFF</h5>
                </div>
                <div className="brandCard">
                <img
                    src="https://dkr0pu7ej5xex.cloudfront.net/wp-content/uploads/2020/01/15110027/Levis-Logo.jpg"
                    alt="offerSectionBrandImage"
                    height="100px"
                />
                <h5>Min 20% OFF</h5>
                </div>
                <div className="brandCard">
                <img
                    src="https://jaroland74.files.wordpress.com/2015/07/nike.jpg"
                    alt="offerSectionBrandImage"        
                />    
                <h5>20-30% OFF</h5>
                </div>
                <div className='brandCard'>
                    <img
                    src="https://i.pinimg.com/280x280_RS/7a/a6/a4/7aa6a4e41573ca7243046005170d40f5.jpg"
                    alt="offerSectionBrandImage"
                    />
                    <h5>Up-to 20% OFF</h5>
                </div>

                <div className="brandCard">
                    <img src="https://bit.ly/3eJu2Ew" alt="offerSectionBrandImage" />
                    <h5>FLAT 10%</h5>
                </div>


                <div className="brandCard">
                    <img
                    src="https://www.youfirst.co.in/pub/media/catalog/product/cache/5cf0cd67d985c5a2729a2007397294b6/u/n/unitedcolorofbentton_5.jpeg"
                    alt="offerSectionBrandImage"
                />
                <h5>Min. 30% OFF</h5>
                </div>
            </div>
        </div>
    )
}


