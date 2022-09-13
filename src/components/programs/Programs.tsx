import { FaCrown } from 'react-icons/fa';
import { AiFillCaretRight } from 'react-icons/ai';

import './programs.scss';
import { SectionHead } from '..';
import { programs } from '../../data';
import { Card } from '../../UI';
import { Link } from 'react-router-dom';

const Programs = () => {
    return (
        <section className='programs'>
            <div className="programs__container container">
                <SectionHead
                    title='Programs'
                    icon={FaCrown}
                />
                <div className="programs__wrapper">
                    {
                        programs.map(({ id, icon: Icon, path, info, title }) => (
                            <Card className='programs__program' key={id}>
                                <span className='programs__program-icon'><Icon /></span>
                                <h4>{title}</h4>
                                <small>{info}</small>
                                <Link
                                    to={path}
                                    className='programs__program-btn btn btn--small'
                                >
                                    Learn More{<AiFillCaretRight />}
                                </Link>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Programs;