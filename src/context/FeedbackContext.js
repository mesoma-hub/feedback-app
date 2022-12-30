import { v4 as uuidv4 } from 'uuid'
import React from "react";
import { createContext, useState } from "react";
const FeedbackContext = createContext();

// Next we create a provider
export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([{
        id: 1,
        text: 'This is item 1',
        rating: 10
    },
    {
        id: 2,
        text: 'This is item 2',
        rating: 9
    },

    {
        id: 3,
        text: 'This is item 3',
        rating: 7
    }
]);

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    });

    // add item
    const addFeedback = (newFeedback) => {
        // add id property to the feedback
        newFeedback.id = uuidv4();
        // Add the newFeedback to the feedback state
// remember that state is immutable and can't change, so we need to make a copy of the current feedback items along with
// the new items and send them as an array.
        setFeedback([newFeedback, ...feedback]);
    };

    // set item to be deleted
    const deleteFeedback = (id) => { 
        if(window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter(item => item.id !== id));
        }
    };

    // Set item to be updated 
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    };

    // update feedback
    const updateFeedbackItem = (id, updatedItem) => {
        setFeedback(feedback.map((item) => item.id === id ? { ...item, ...updatedItem} : item));
    };

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedbackItem
    }}>
            { children }
    </FeedbackContext.Provider>
};

export default FeedbackContext