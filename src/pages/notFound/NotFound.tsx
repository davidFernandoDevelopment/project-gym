import './notFound.scss';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className='not-found'>
            <div className="not-found__container container">
                <h2 className='not-found__text'>Page Not Found</h2>
                <Link to="/" className='btn'>Go to Home</Link>
            </div>
        </section>
    );
};

export default NotFound;