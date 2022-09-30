import './counter.scss';
import icin1 from '../../../images/icin-1-200x200.png';
import icin2 from '../../../images/icin-2-200x200.png';
import icin3 from '../../../images/icin-3-200x200.png';
import icin4 from '../../../images/icin-4-200x200.png';

const  Counter = () => {
    return(
        <section className="counter-section section center-text" id="counter">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3">
                        <div className="mb-30 ">
                            <img src={icin1} className='image-icon' alt="Pizza" />
                            <h2><b><span className="counter-value beauty-title another" data-duration="400" data-count="574">574</span></b>
                            </h2>
                            <h5 className="semi-black"><b>Pizza per day</b></h5>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-3">
                        <div className="mb-30">
                            <img src={icin2} className='image-icon' alt="Sea food" />
                            <h2><b><span className="counter-value beauty-title another" data-duration="1400" data-count="14">14</span></b>
                            </h2>
                            <h5 className="semi-black"><b>Sea Food Dshes</b></h5>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-3">
                        <div className="mb-30">
                            <img src={icin3} className='image-icon' alt="Pastas" />
                            <h2>
                                <b><span className="counter-value beauty-title another" data-duration="300" data-count="3">3</span></b>
                            </h2>
                            <h5 className="semi-black"><b>Pasta Chefs</b></h5>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-3">
                        <div className="mb-30">
                            <img src={icin4} className='image-icon' alt="Salads" />
                            <h2><b><span className="counter-value beauty-title another" data-duration="1000" data-count="52">52</span></b>
                            </h2>
                            <h5 className="semi-black"><b>Salads per day</b></h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 

export default Counter
