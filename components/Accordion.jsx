'use client'

import Image from 'next/image';
import { useState } from 'react';

const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    };

    const faq = [
        {
            question: 'What is a boutique hotel?',
            answer: 'Boutique hotels are typically smaller hotels with curated designs and more personalized services. They also showcase unique personalities. For instance, they can be housed inside a historic building or a small townhouse. Boutique hotels started mostly as independent hotels, but many boutique hotel groups have emerged in recent years, including Ace Hotel, Palisociety, Kimpton Hotels, Bunkhouse, and more.',
        },
        {
            question: 'Why boutique hotels?',
            answer: 'Boutique hotels are perfect for guests that prioritize impressive designs and thoughtful services. Unlike conventional hotels that come in underwhelming cookie-cutter designs, each boutique hotel features a different design that is one-of-a-kind. Thanks to their their smaller footprints, hotel staff are also able to offer better and more tailored services.',
        },
        {
            question: 'Are boutique hotels more expensive?',
            answer: 'No. Much like every other type of accommodation, boutique hotels come in a wide spectrum of prices, ranging from affordable to luxury hotels. The price is often determined by the hotel’s location, room size, amenities, service, etc.',
        },
        {
            question: 'How are hotels being picked?',
            answer: 'Boutiquehotels.org handpicks each boutique hotel according to its design, personality, amenities, and service. We try to curate a diverse collection of boutique hotels for each destination that accommodates every type of traveler.',
        },
    ]

    return (
        <div className='bg-gray-100 my-6 p-6'>
            <h2 className='font-bold text-xl'>Frequently Asked Questions</h2>

            {faq.map((faq, index) => (
                <div key={index} className='m-2 p-2 border-b-2'>
                    {/* Accordion Header */}
                    <div
                        className='flex space-x-2 items-center cursor-pointer'
                        onClick={() => toggleAccordion(index)}
                    >
                        <Image
                            src='/images/31.jpg'
                            height={20}
                            width={20}
                            alt='collapse'
                            className={`transition-transform  duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                        />
                        <h3 className='text-lg'>{faq.question}</h3>
                    </div>

                    {/* accordion cotent */}
                    {openIndex === index && (
                        <div className='mt-4'>
                            <p className='text-justify'>{faq.answer}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
