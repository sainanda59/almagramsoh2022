import React from 'react';
import './NextBtn.css'

function NextBtn(props) {
    const {onClick} = props;
    // console.log(props);
  return (
    <div className='next__btn' onClick={onClick}>
        <i class="fas fa-chevron-right"></i>
    </div>
  );
}

export default NextBtn;