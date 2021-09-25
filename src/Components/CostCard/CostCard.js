import React from 'react';
import './CostCard.css';

const CostCard = (props) => {
    let { title, date, amount } = props.cost;
    console.log(title, date, amount);
    return (
        <div className="cost-card">
            <div>
                <p className="costcard-title">{title}</p>
                <p className="costcard-date">{date}</p>
            </div>
            <p className="costcard-amount">$ {amount}</p>
        </div>
    );
};

export default CostCard;