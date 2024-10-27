import React from 'react';
import './contacts.scss';

const Contacts = () => {
    return (
        <div className="contacts" id="contacts">
            <h2>Контакти</h2>
            <p>Телефон: +3809999999</p>
            <p>Email: info@ajaramarela.com</p>
            <p><a href="#">Telegram</a></p>
            <p><a href="#">Linkedin</a></p>
            <p>Адреса: вулиця Хмельницьке шосе, 95, м. Вінниця</p>
            <button className="cta-button">Замовити консультацію</button>
        </div>
    );
};

export default Contacts;