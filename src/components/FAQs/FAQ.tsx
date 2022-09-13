import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';

interface Props {
    answer: string;
    question: string;
}

const FAQ = ({ answer, question }: Props) => {

    const [open, setOpen] = useState(false);

    return (
        <article className='faq'>
            <div
                className='faq__main'
                onClick={() => setOpen(prev => !prev)}
            >
                <h4 className='faq__question'>{question}</h4>
                <button className='faq__icon'>
                    {
                        open
                            ? <AiOutlineMinus />
                            : <AiOutlinePlus />
                    }
                </button>
            </div>
            {open && <p className='faq__answer'>{answer}</p>}
        </article>
    );
};

export default FAQ;