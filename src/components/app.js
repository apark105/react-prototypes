import React, {Component} from 'React';
import ContactList from './contact_list';
import ContactForm from './contact_form';
import contactData from '../data/contact';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contacts: contactData
        }
    }

    addContact = (contact) => {
        console.log('App: AddComponent: ', contact);
        const {contacts} = this.state
        this.setState(
            {
                contacts: [...this.state.contacts, contact]
            }
        )
    }

    render() {
        return (
            <div className="container">
                <h1 className="text-center">Address Book</h1>
                <div className="row">
                    <div className="col-4">
                        <ContactForm add={this.addContact}/>
                    </div>
                    <ContactList contacts = {this.state.contacts}/>
                </div>
            </div>
        )
    }
}

export default App 