import { useState } from 'react';
import React from 'react'
import Card from './shared/Card';
import Button from './shared/Button';
function FeedbackForm() {
    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');
    const [rating, setRating] = useState(10);


    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true);
            setMessage(null)
        }
        else if (text !== '' && text.trim().length <= 10) {
            setBtnDisabled(true);
            setMessage('Text must be greater than 10 characters to submit')
        }
        else {
            setMessage(null);
            setBtnDisabled(false);
        }
        setText(e.target.value);

    }
  return (
    <Card>
        <form action="">
            <h2> Please rate your service with us</h2>



            <div className="input-group">
                <input onChange={handleTextChange} type="text" placeholder="Write a review"
                value={text}/>
                <Button type="submit" isDisabled={btnDisabled}> Send </Button>
            </div>

            {message && <div className="message">
                {message}</div>}

        </form>
    </Card>
  )
}

export default FeedbackForm
