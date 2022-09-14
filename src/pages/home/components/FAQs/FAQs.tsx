import { FaQuestion } from 'react-icons/fa';

import './FAQs.scss';
import FAQ from './FAQ';
import { SectionHead } from '../../../../components';
import { faqs } from '../../../../data';


const FAQs = () => {
    return (
        <section className='faqs'>
            <div className="faqs__container container">
                <SectionHead
                    title='FAQs'
                    icon={FaQuestion}
                />
                <div className="faqs__wrapper">
                    {
                        faqs.map(({ id, ...rest }) => (
                            <FAQ key={id} {...rest} />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default FAQs;