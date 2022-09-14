import './section.scss';

interface Props {
    image: string;
    className?: string;
    children: React.ReactNode;
}

const Section = ({ image, children, className }: Props) => {
    return (
        <section className='section'>
            <div className={`section__container container ${className}`}>
                <div className="section__image">
                    <img src={image} alt="Section" />
                </div>
                <div className="section__content">
                    {children}
                </div>
            </div>
        </section>
    );
};

export default Section;