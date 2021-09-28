import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const CostForm = (props) => {
    let [title, setTitle] = useState("");
    let [amount, setAmount] = useState("");
    let [date, setDate] = useState("");
    return (
        <div>
            {/* <form className="cost-form" onSubmit={(e) => {
                props.costFormHandler(e, { title, date, amount });
                //clearing input fields
                setTitle("");
                setAmount("");
                setDate("");
            }}>
                <input required maxLength="20" type="text" name="title" placeholder="Enter Title" value={title} onChange={e => setTitle(e.target.value)} />
                <input required min="1" maxLength="10" type="text" name="amount" placeholder="Enter Amount" value={amount} onChange={e => setAmount(e.target.value)} />
                <input required type="date" name="date" placeholder="Pick Date" value={date} onChange={e => setDate(e.target.value)} />
                <Button type="submit" variant="contained">Contained</Button>
            </form> */}
            <Form onSubmit={(e) => {
                props.costFormHandler(e, { title, date, amount });
                //clearing input fields
                setTitle("");
                setAmount("");
                setDate("");
            }}>
                <Row xs={1} md={4} lg={4}>
                    <Col>
                        <Form.Control className="p-2" required maxLength="20" type="text" placeholder="Enter Title" value={title} onChange={e => setTitle(e.target.value)} />
                    </Col>
                    <Col>
                        <Form.Control className="p-2" required min="1" maxLength="20" type="number" placeholder="Enter Amount" value={amount} onChange={e => setAmount(e.target.value)} />
                    </Col>
                    <Col>
                        <Form.Control required className="p-2" type="date" name="date" placeholder="Pick Date" value={date} onChange={e => setDate(e.target.value)} />
                    </Col>
                    <Col>
                        <Button className="px-5 py-2" type="submit" variant="primary">ADD</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default CostForm;