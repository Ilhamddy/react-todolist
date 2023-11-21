import React from 'react'

const Stats = ({ toDolist }) => {
    let countList = toDolist.length;

    return (
        < div className='stats' >
            <p className='notify'>
                {countList === 0 ? 'you got everything' : `you got ${countList} item in your list`
                }
            </p></div >
    );
};

export default Stats