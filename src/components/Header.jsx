import React from 'react';
import PropTypes from 'prop-types'

function Header({ text, bgColor, textColor }) {
    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor
    };

  return (
     <header style={headerStyles}>
        <div className='container'>
            <h2>{text}</h2>
        </div>
    </header>
  )
}
// Setting default props
Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: 'ff6a95'
}

//  prop types enables you to specify if the prop to be passed in is to be a string or a number e.t.c
Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string
}


export default Header
