import React, { useState } from 'react';
import styled from 'styled-components';

const FAQs = () => {
    const faqs = [
        {
            question: "What is StockSage?",
            answer: "StockSage is a platform that provides insights and analytics on stock market investments."
        },
        {
            question: "How can I create an account?",
            answer: "You can create an account by clicking on the Sign Up button on the homepage and filling in the required details."
        },
        {
            question: "How do I contact customer support?",
            answer: "You can contact our customer support via the Contact Us page or by emailing support@stocksage.com."
        },
        {
            question: "What is a Buy zone?",
            answer: "We indicate to our subscribers a certain price range in which they can purchase a stock. When you see 'Buy' in the action zone, you have not missed the train, you can still go ahead and buy."
        },
        {
            question: "What is a Hold zone?",
            answer: "When the price of the stock goes beyond the buy range, the action zone will display 'Hold'. This implies that users ought to keep the stock until another update is given. Users are suggested not to buy stock in this action zone."
        },
        {
            question: "What is a Exit zone?",
            answer: "We advise our subscribers to exit our recommended stock when the 'Exit' indication is given in the action zone."
        },
        {
            question: "What is a Multibagger Portfolio?",
            answer: "Stocks under Multibagger are long term picks which can give significant higher returns."
        },
        {
            question: "I am not getting any recommendations to buy, what should I do?",
            answer: "We will give advice on buying stock when all our requirements are met, so it's important to be patient and we'll provide the proper guidance when the time is right."
        },
        {
            question: "Can I use my broker account to buy stocks?",
            answer: "Yes, you can use your own broker or demat account to buy and sell stocks. StockSage is merely an advisory product to recommend what to buy, when to buy, and when to sell."
        },
        {
            question: "How much should I invest in each recommendation?",
            answer: "StockSage suggests deploying an equal amount of money in every recommendation. We cannot suggest the quantum of your pocket size."
        },
        {
            question: "What is the refund policy?",
            answer: "StockSage strictly has no refund policy. Please read our T&C before subscribing."
        },
        {
            question: "Do we offer a trial period or any discount?",
            answer: "No, we do not offer any trial period, and our subscription charges are heavily discounted."
        },
        {
            question: "How do we calculate profits on our stock recommendation?",
            answer: "We calculate the profit based on the CMP when our system generates the call. We maintain that CMP as a low range and offer subscribers a range of 1% to 1.5% on the higher side to buy. The buying range depends on the stock's float. Please be aware that the returns may vary because your buying price will differ from the CMP when the recommendation was generated. Hence, it is advisable to place limit orders near our buy range to maximize profit, and also use limit orders while selling the stock, else you can skip the trade."
        }
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null); // Collapse the current accordion item if it's already open
        } else {
            setActiveIndex(index); // Expand the clicked accordion item
        }
    };

    return (
        <FAQContainer>
            <h2>Frequently Asked Questions (FAQs)</h2>
            <FAQTable>
                <tbody>
                    {faqs.map((faq, index) => (
                        <FAQRow key={index}>
                            <QuestionCell onClick={() => toggleAccordion(index)}>
                                {faq.question}
                                <DropdownIcon className={activeIndex === index ? 'active' : ''} />
                            </QuestionCell>
                            <AnswerRow active={activeIndex === index}>
                                <td colSpan="2">{faq.answer}</td>
                            </AnswerRow>
                        </FAQRow>
                    ))}
                </tbody>
            </FAQTable>
        </FAQContainer>
    );
};

const FAQContainer = styled.div`
    padding: 2rem;
    text-align: center;
`;

const FAQTable = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

const FAQRow = styled.tr`
    border-bottom: 1px solid #ccc;

    &:last-child {
        border-bottom: none;
    }
`;

const QuestionCell = styled.td`
    padding: 1rem;
    cursor: pointer;
    position: relative;

    &:hover {
        background-color: #f0f0f0;
    }
`;

const DropdownIcon = styled.div`
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #000;
    transition: transform 0.3s ease-in-out;

    &.active {
        transform: translateY(-50%) rotate(180deg);
    }
`;

const AnswerRow = styled.tr`
    display: ${props => props.active ? 'table-row' : 'none'};
    background-color: #f9f9f9;

    td {
        padding: 1rem;
    }
`;

export default FAQs;
