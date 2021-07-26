import { GET_CONTACTS_FAIL, GET_CONTACTS_LOAD, GET_CONTACTS_SUCCESS,GET_CONTACT } from "../constants/contacts"
import axios from "axios";

export const getCantacts = () => async (dispatch) => {
    dispatch({ type: GET_CONTACTS_LOAD });
    try {
        let result = await axios.get('http://localhost:5000/api/contact/');
        dispatch({ type: GET_CONTACTS_SUCCESS, payload: result.data.response })
    } catch (error) {
        dispatch({ type: GET_CONTACTS_FAIL, payload: error })
        console.log(error)
    }
}

// delete contact

export const deleteContact = (id) => async dispatch => {
    try {
        const result = await axios.delete(`http://localhost:5000/api/contact/${id}`)
        dispatch(getCantacts())
    } catch (error) {
        console.log(error)
    }
}

export const addContact = (user) => dispatch => {
    axios.post("http://localhost:5000/api/contact/", user)
        .then((res) => dispatch(getCantacts()))
        .catch((err) => { console.log(err) })
}

export const getContact = (id) =>dispatch=> {
    axios
        .get(`http://localhost:5000/api/contact/${id}`)
        .then((res) => dispatch({ type: GET_CONTACT, payload: res.data.response }))
            .catch((err)=>console.log(err))
}
export const editContact = (user, id) => dispatch => {

    axios.put(`http://localhost:5000/api/contact/${id}`, user)
        .then((res) => dispatch(getCantacts()))
        .catch((err) => { console.log(err) })
}
