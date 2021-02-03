import React, { Component } from 'react';
import Contact from './Contact';
import './style.css';

const contacts = [{
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male"
}, {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female"
}, {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666"
}, {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
}, {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
}, {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male"
}]

export default class Contacts extends Component {

    state = {
        contacts: contacts,
        search: '',
        filteredContacts: contacts
    }

    handleSearchChange = (e) => {
        const filteredContacts = this.state.contacts.filter(contact => `${contact.firstName}${contact.lastName}${contact.phone}`.toLowerCase().includes(e.target.value));
        this.setState({filteredContacts: filteredContacts});
        this.setState({search: e.target.value});
    }

    render() {
       return (
        <div>
            <input className='text-input' type='text' value={this.state.search} onChange={this.handleSearchChange} />
            {this.state.filteredContacts.map((contact, i) => <Contact {...contact} key={i} />)}
        </div>
       );
    }
}
