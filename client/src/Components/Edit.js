import React,{useState,useEffect} from 'react'
import { Button, Form } from 'semantic-ui-react'
import {editContact} from "../JS/actions/contacts"
import {useDispatch,useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import {getContact } from "../JS/actions/contacts"

const Edit = ({match}) => {
const dispatch = useDispatch()
const oldUser = useSelector(state => state.contactReducer.contact)
const history=useHistory();

useEffect(() => {
  dispatch(getContact(match.params.id))
}, [match.params.id])

useEffect(() => {
  setUser({...oldUser})
}, [oldUser])
    const [user, setUser] = useState({name:"",email:"",Phone:""})
    
    const handleChange=(e)=>{
        e.preventDefault();
        setUser({...user,[e.target.name]:e.target.value});
       }

       const handleSubmit=(e)=>{
e.preventDefault()
dispatch(editContact(user,oldUser._id))
setUser({name:"",email:"",Phone:""})
      history.push("/") };

    return (
        <div>
           <Form onSubmit={handleSubmit}>
    <Form.Group unstackable widths={2}>
      <Form.Input label='Name' placeholder='Name' name="name" value={user.name} onChange={handleChange}/>
      <Form.Input label='Email' placeholder='Email' name="email" value={user.email} onChange={handleChange}/>
    </Form.Group>
    <Form.Group widths={2}>
      <Form.Input label='Phone' placeholder='Phone' name="Phone" value={user.Phone} onChange={handleChange}/>
    </Form.Group>
    <Form.Checkbox label='I agree to the Terms and Conditions' />
    <Button type='submit'>Submit</Button>
  </Form> 
        </div>
    )
}

export default Edit
