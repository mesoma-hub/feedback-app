import React from 'react'
import { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);
    if(!feedback || feedback.length === 0) {
        return (<p>No feedback yet</p>);
    }

    // Version without animation
  // return (
  //   <div className='feedback-list'>{ feedback.map((item) => {
  //       return (<FeedbackItem key = {item.id} item = { item } handleDelete={handleDelete}/>);
  //   })}
  //   </div>
  // )

  // Version wwith animmation
  return (
    <div className='feedback-list'>
      <AnimatePresence>
    {/* since it's thhee FeedbackItem  we want to animate we wwrp it in a <motion.div></motion.div> tag*/}
    
      { feedback.map((item) => {
        return (
        <motion.div 
          key={item.id} 
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          >
          <FeedbackItem key = {item.id} item = { item } />
        </motion.div>
        );
    })
    }
      </AnimatePresence>
    </div>
  )
}

export default FeedbackList
