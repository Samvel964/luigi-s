import './errorPage.scss';
import pageNotFound from '../../images/pageNotFound.png';

const ErrorPage = () => {
    return(
        <div className='error_page'><img src={pageNotFound} alt="Page Not Found" /></div>
    )
}

export default ErrorPage
