import React, { useState } from 'react';
import './CostForm.css';

const CostForm = () => {
    let [title, setTitle] = useState("");
    let [amount, setAmount] = useState(0);
    let [date, setDate] = useState("");

    function handleSubmit(e) {
        //add cost
        console.log(title, amount, date);
        e.preventDefault();
    }
    return (
        <div>
            <form className="cost-form" onSubmit={e => handleSubmit(e)}>
                <input required maxLength="20" type="text" name="title" placeholder="Enter Title" value={title} onChange={e => setTitle(e.target.value)} />
                <input required min="1" maxLength="10" type="number" name="amount" placeholder="Enter Amount" value={amount} onChange={e => setAmount(e.target.value)} />
                <input required type="date" name="date" placeholder="Pick Date" value={date} onChange={e => setDate(e.target.value)} />
                <input type="submit" className="add-cost-button" value="ADD" />
            </form>
        </div>
    );
};

export default CostForm;