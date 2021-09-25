import React, { useState } from 'react';
import './CostForm.css';

const CostForm = (props) => {
    let [title, setTitle] = useState("");
    let [amount, setAmount] = useState("");
    let [date, setDate] = useState("");
    return (
        <div>
            <form className="cost-form" onSubmit={(e) => {
                props.costFormHandler(e, { title, date, amount });
                //clearing input fields
                setTitle("");
                setAmount("");
                setDate("");
            }}>
                <input required maxLength="20" type="text" name="title" placeholder="Enter Title" value={title} onChange={e => setTitle(e.target.value)} />
                <input required min="1" maxLength="10" type="text" name="amount" placeholder="Enter Amount" value={amount} onChange={e => setAmount(e.target.value)} />
                <input required type="date" name="date" placeholder="Pick Date" value={date} onChange={e => setDate(e.target.value)} />
                <input type="submit" className="add-cost-button" value="ADD" />
            </form>
        </div>
    );
};

export default CostForm;