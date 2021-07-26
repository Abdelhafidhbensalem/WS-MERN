import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import { useDispatch } from 'react-redux';
import { deleteContact,getContact } from "../JS/actions/contacts"
import { Link } from 'react-router-dom';

const Contact = ({ contact }) => {
    const dispatch = useDispatch()
    return (
        <div>
            <Card>
                <Card.Content>
                    <Image
                        floated='right'
                        size='mini'
                        src='https://png.pngtree.com/png-vector/20191104/ourmid/pngtree-businessman-avatar-cartoon-style-png-image_1953664.jpg'
                    />
                    <Card.Header>{contact.name}</Card.Header>
                    <Card.Meta>{contact.email}</Card.Meta>
                    <Card.Description>
                        Steve wants to add you to the group <strong>best friends</strong>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Link to={`/edit/${contact._id}`}> <Button inverted color='green' onClick={()=>dispatch(getContact(contact._id))}>
                            Edit
                        </Button></Link>
                        <Button inverted color='red' onClick={() => dispatch(deleteContact(contact._id))}>
                            Remove
                        </Button>
                    </div>
                </Card.Content>
            </Card>
        </div>
    )
}

export default Contact
