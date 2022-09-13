import './sectionHead.scss';

interface Props {
    title: string;
    icon: React.FC;
    className?: string;
}

const SectionHead = ({ icon: Icon, title, className }: Props) => {
    return (
        <div className={`section-head ${className}`}>
            <span className='section-head__icon'>
                <Icon />
            </span>
            <h2 className='section-head__title'>{title}</h2>
        </div>
    );
};

export default SectionHead;