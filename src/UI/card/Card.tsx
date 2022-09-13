import './card.scss';

interface Props {
    p?: string;
    className?: string;
    children: React.ReactNode;
}

const Card = ({ p: parent, children, className = '' }: Props) => {
    const p = parent ? `${parent}-card` : '';

    return (
        <article
            className={`card ${p} ${className}`}
        >
            {children}
        </article>
    );
};

export default Card;