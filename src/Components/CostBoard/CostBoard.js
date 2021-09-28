import React from 'react';
import { Col } from 'react-bootstrap';
import './CostBoard.css';

const CostBoard = (props) => {
    return (
        <Col style={{ backgroundColor: props.background }} id={props.id} className="costboard">
            <p className="costboard-title">{props.title}</p>
            <p className="costboard-amount">$ {props.amount}</p>
        </Col>
    );
};

export default CostBoard;