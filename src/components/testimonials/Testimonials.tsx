import { ImQuotesLeft } from 'react-icons/im';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';

import './testimonials.scss';
import { Card } from '../../UI';
import { useState } from 'react';
import { testimonials } from '../../data';
import SectionHead from '../sectionHead/SectionHead';


const Testimonials = () => {

    const [index, setIndex] = useState(0);
    const { name, quote, job, avatar } = testimonials[index];


    const prevTestimonial = () => setIndex(prev => Math.max(0, prev - 1));
    const nextTestimonial = () => setIndex(prev => Math.min(testimonials.length - 1, prev + 1));

    return (
        <section className='testimonials'>
            <div className="testimonials__container container">
                <SectionHead
                    title='Testimonials'
                    icon={ImQuotesLeft}
                    className='testimonials__head'
                />
                <Card p='testimonials__testimonial'>
                    <div className="testimonials__avatar">
                        <img className='testimonials__img' src={avatar} alt="Testimonial avatar" />
                    </div>
                    <p className='testimonials__quote'>
                        {`${quote}`}
                    </p>
                    <h5 className='testtimonials__name'>{name}</h5>
                    <small className='testimonials__job'>{job}</small>
                </Card>
                <div className="testimonials__btns">
                    <button
                        className="testimonials__btn"
                        onClick={prevTestimonial}
                    >
                        <IoIosArrowDropleftCircle />
                    </button>
                    <button
                        className="testimonials__btn"
                        onClick={nextTestimonial}
                    >
                        <IoIosArrowDroprightCircle />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;