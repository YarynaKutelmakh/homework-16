import React from 'react';
import man from './img/man.png';
import girl from './img/girl.png';
import noname from './img/non-gender.png';
import Container from '@material-ui/core/Container';
import './style.css';

function Contact({ firstName, lastName, phone, gender }) {

    let genderImg;
    if (gender === 'male') {
        genderImg = man
    } else if (gender === 'female') {
        genderImg = girl
    } else {
        genderImg = noname
    }
    
    let fullName = firstName + ' ' + lastName;
    return (
        <div>
            <Container maxWidth="sm">
                <div className='information'>
                    <img src={genderImg} />
                    <div className='text'>
                        <p className='name'>{fullName}</p>
                        <p className='number'>{phone}</p>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Contact;