import React from 'react'
import { useState, useContext, useEffect } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
    let [text, setText] = useState('');
    let [rating, setRating] = useState(10);
    let [btnDisabled, setBtnDisabled] = useState(true);
    let [message, setMessage] = useState();

    const { addFeedback, feedbackEdit, updateFeedbackItem } = useContext(FeedbackContext);
    useEffect(() => {
        if(feedbackEdit.edit === true) {
            // enable the send button
            setBtnDisabled(false);
            setText(feedbackEdit.item.text);
            setRating(feedbackEdit.item.rating);
        }
    }, [feedbackEdit]);


    const handleTextChange = (e) => {
        if(text === '') {
            setBtnDisabled(true);
            setMessage(null);
        } else if(text !== '' && text.trim().length <= 10) {
            setMessage('Text must be at least 10 characters');
            setBtnDisabled(true);
        } else {
            setMessage(null);
            setBtnDisabled(false);
        }
        setText(e.target.value);
    }; 


    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim().length > 10) {
            const newFeedback = { 
                text,
                rating
        }; 
        
        if(feedbackEdit.edit === true) {
            updateFeedbackItem(feedbackEdit.item.id, newFeedback);
        } else {
            addFeedback(newFeedback);
        }
        // clear up the text field
        setText('');
        }
    };

  return (
    <Card>
        <form onSubmit = {handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select = {(rating) => setRating(rating)}/>
            <div className='input-group' >
                <input onChange={ handleTextChange } type="text" value={text} placeholder='Write a review'/>
                <Button type='submit' isDisabled={btnDisabled} >Send</Button> 
            </div>

            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  );
}

export default FeedbackForm
