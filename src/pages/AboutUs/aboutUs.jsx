import './aboutUs.scss';
import ClientSection from './ClientSection/clientSection';
import Counter from './Counter/counter';
import about1 from '../../images/about-1-600x400.jpg';
import about2 from '../../images/about-2-600x400.jpg';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return(
        <>
        <section className="bg-4 h-500x main-slider pos-relative">
            <div className="triangle-up pos-bottom"></div>
            <div className="container h-100">
                <div className="dplay-tbl">
                    <div className="dplay-tbl-cell center-text color-white pt-90">
                        <h5><b>THE BEST IN TOWN</b></h5>
                        <h2 className="mt-30 mb-15 beauty-title pizzaria">About our Pizzaria</h2>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="story-area left-text center-sm-text">
            <div className="container">
                <div className="row">
                    <div className="col-md-6"><img className="mb-30" src={about1} alt=""/></div>
                    <div className="col-md-6"><img className="mb-30" src={about2} alt="" /></div>
                    <div className="col-md-12">
                        <div className="mt-50 mt-sm-30 mb-50 mb-sm-30 center-text"><h2 className='beauty-title pizzaria'>We are Lugais</h2></div>
                        <h5 className="center-text mb-50 mb-sm-30 plr-25 sans-serif">
                            Maecenas fermentum tortor id
                            fringilla molestie. In  hac habitasse platea dictumst. Morbi maximus lobortis
                            ipsum, ut blandit augue ullamcorper vitae.  Nulla dignissim leo felis, eget
                            cursus elit aliquet ut.
                        </h5>
                    </div>
                    <div className="col-md-6">
                        <p className="mb-15 sans-serif">
                            Maecenas fermentum tortor id fringilla molestie. In hac habitasse platea dictumst.  Morbi maximus
                            lobortis ipsum, ut blandit augue ullamcorper vitae. Nulla dignissim leo felis, eget cursus elit aliquet ut. Curabitur vel convallis
                            massa. Morbi tellus ortor, luctus et lacinia non, tincidunt in lacus.
                            Vivamus sed ligula imperdiet, feugiat magna vitae, blandit ex. Vestibulum id dapibus dolor, ac cursus nulla. 
                        </p>
                    </div>

                    <div className="col-md-6">
                        <p className="mb-15 sans-serif">
                            Maecenas fermentum tortor id fringilla molestie. In hac habitasse
                            platea
                            dictumst.Morbi maximus lobortis ipsum, ut blandit augue ullamcorper vitae.
                            Nulla dignissim leo felis, eget cursus elit aliquet ut. Curabitur vel
                            convallismassa. Morbi tellus tortor, luctus et lacinia non, tincidunt in lacus.
                            Vivamus sed ligula imperdiet, feugiat magna vitae, blandit ex. Vestibulumidda
                            pibus dolor, accursus nulla. 
                        </p>
                    </div>
                </div>

                <h6 className="center-text mt-40 mt-sm-30 mb-20">
                    <Link to="/menu" className="btn-primaryc plr-25 mb-10 mlr-5"><b>SEE TODAYS MENU</b></Link>
                    <Link to="/cart" className="btn-primaryc secondary plr-50 mlr-5 mb-10"><b>ORDER NOW</b></Link>
                </h6>
            </div>
        </section>

        <ClientSection />
        <Counter />
        </>
    )
}

export default AboutUs
