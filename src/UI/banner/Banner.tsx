import './banner.scss';

interface Props {
    title?: string;
    image?: string;
    children?: React.ReactNode;
}

const Banner = ({ title, image, children }: Props) => {
    return (
        <header className='banner'>
            <div className="banner__container container">
                <div className="banner__image">
                    <img className="banner__img" src={image} alt="Element banner" />
                </div>
                <div className="banner__content">
                    <h2 className='banner__title'>{title}</h2>
                    <p className='banner__description'>{children}</p>
                </div>
            </div>
        </header>
    );
};

export default Banner;