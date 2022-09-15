import './trainer.scss';
import { Card } from '../../../../UI';

interface Props {
    image: string;
    name: string;
    job: string;
    socials?: { icon: React.ReactNode; link: string; }[];
}

const Trainer = ({
    image, job, name, socials
}: Props) => {
    return (
        <Card className='trainer'>
            <div className="trainer__img">
                <img src={image} alt="Trainer" />
            </div>
            <h3 className='trainer__name'>{name}</h3>
            <p className='trainer__job'>{job}</p>
            <div className="trainer__socials">
                {
                    socials?.map(({ icon, link }, i) => (
                        <a
                            key={i}
                            href={link}
                            target='_blank'
                            rel="noreffer noopener"
                            className='trainer__social'
                        >
                            {icon}
                        </a>
                    ))
                }
            </div>
        </Card>
    );
};

export default Trainer;