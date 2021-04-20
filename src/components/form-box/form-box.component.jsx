import React from 'react';
import './form-box.styles.css'

export const FormBox = ({mySubmitHandler, myChangeHandler}) => (
    <div className='form-list'>
        <form onSubmit={mySubmitHandler}>
            <label>Search</label>
            <input
                type='text'
                name='searchTerm'
                required
                onChange={myChangeHandler}
            />
            <label>Max cooking time (in minutes)</label>
            <input
                type='text'
                name='maxReadyTime'
                required
                onChange={myChangeHandler}
            />
            <input
                className='submitButton'
                type='submit'
            />
        </form>
    </div>
);