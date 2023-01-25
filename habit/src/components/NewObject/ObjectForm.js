import React from 'react';
import "./ObjectForm.css";

const ObjectForm = () => {
    return <form>
        <div className="new-object__controls">
            <div className="new-object__control">
                <label>Title</label>
                <input type="text"/>
            </div>
            <div className="new-object__control">
                <label>Amount</label>
                <input type="Amount"/>
            </div>
            <div className="new-object__control">
                <label>Date</label>
                <input type="date"/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Object</button>
        </div>
    </form>

}


export default ObjectForm;