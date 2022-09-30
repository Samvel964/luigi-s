import './bannerCart.scss';

const BannerCart = () => {
    return(
        <>
        <section className="bg-10 h-500x main-slider pos-relative">
            <div className="triangle-up pos-bottom"></div>
            <div className="container h-100">
                <div className="dplay-tbl">
                    <div className="dplay-tbl-cell center-text color-white pt-90">
                        <h5><b>Your cart</b></h5>
                        <h2 className="mt-30 mb-15 beauty-title pizzaria">Buy and enjoy</h2>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default BannerCart
