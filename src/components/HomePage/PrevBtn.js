import React from 'react';
import './PrevBtn.css'

function PrevBtn(props) {
    const {onClick} = props;
  return (
    <div className='previous__btn' onClick={onClick}>
        <i className="fas fa-chevron-left"></i>
    </div>
  );
}

export default PrevBtn;