import React from 'react';
import './CostBoard.css';

const CostBoard = (props) => {
    return (
        <div style={{ backgroundColor: props.background }} id={props.id} className="costboard">
            <p className="costboard-title">{props.title}</p>
            <p className="costboard-amount">$ {props.amount}</p>
        </div>
    );
};

export default CostBoard;