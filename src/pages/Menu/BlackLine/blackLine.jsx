import './blackLine.scss';

const BlackLine = ({text}) => {
    return(
        <section className="story-area bg-seller color-white pos-relative">
            <div className="pos-bottom triangle-up"></div>
            <div className="pos-top triangle-bottom"></div>
            <div className="container">
                <h4 className="font-30 font-sm-20  center-text mb-25">{text}</h4>
            </div>
        </section>
    )
}


export default BlackLine
