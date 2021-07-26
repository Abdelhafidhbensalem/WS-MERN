import React ,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import Contact from './Contact';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';
import {getCantacts} from "../JS/actions/contacts"

const ContactList = () => {
const dispatch = useDispatch()
const loadContacts = useSelector(state => state.contactReducer.loadContacts)
const contacts = useSelector(state => state.contactReducer.contacts)

useEffect(() => {
    dispatch(getCantacts())    
}, [])
    return (
        <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap'}}>
{loadContacts? <Segment>
      <Dimmer active>
        <Loader content='Loading' />
      </Dimmer>

      <Image src='/images/wireframe/short-paragraph.png' />
    </Segment>:contacts.map(contact=><Contact key={contact._id} contact={contact} />) 
}      
 </div>
    )
}

export default ContactList
