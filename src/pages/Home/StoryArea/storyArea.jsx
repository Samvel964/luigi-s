import './storyArea.scss';
import heading_logo from '../../../images/heading_logo.png';

const StoryArea = () => {
    return(
        <section className="story-area left-text center-sm-text pos-relative">
            <div className="abs-tbl bg-2 w-20 z--1 dplay-md-none"></div>
            <div className="abs-tbr bg-3 w-20 z--1 dplay-md-none"></div>
            <div className="container">
                <div className="heading">
                    <img className="heading-img" src={heading_logo} alt="Heading logo" />
                    <h2 className='beauty-title our-story'>Our Story</h2>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <p className="mb-30">
                            Maecenas fermentum tortor id fringilla molestie. In hac habitasse
                            platea dictumst. Morbi maximus
                            lobortis ipsum, ut blandit augue ullamcorper vitae.
                            Nulla dignissim leo felis, eget cursus elit aliquet ut. Curabitur vel convallis
                            massa. Morbi tellus
                            tortor, luctus et lacinia non, tincidunt in lacus.
                            Vivamus sed ligula imperdiet, feugiat magna vitae, blandit ex. Vestibulum id
                            dapibus dolor, ac
                            cursus nulla.
                        </p>
                    </div>

                    <div className="col-md-6">
                        <p className="mb-30">
                            Maecenas fermentum tortor id fringilla molestie. In hac habitasse platea
                            dictumst.Morbi maximus lobortis ipsum, ut blandit augue ullamcorper vitae.
                            Nulla dignissim leo felis, eget cursus elit aliquet ut. Curabitur vel
                            convallismassa. Morbi tellus tortor, luctus et lacinia non, tincidunt in lacus.
                            Vivamus sed ligula imperdiet, feugiat magna vitae, blandit ex. Vestibulumidda
                            pibus dolor, accursus nulla. 
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StoryArea
