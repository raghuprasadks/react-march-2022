import react, {useState,useEffect} from  'react'
import axios from 'axios'

const Jsonservergetapi = () => {

    const [contacts,setContacts]=useState([])
    useEffect(()=>{
        console.log('inside use effect');
        axios.get('http://localhost:3007/contacts')
        .then(response=>setContacts(response.data))
        //  .then(response=>console.log(response))
    },[])

    const rowdata =contacts.map((contact)=>
        <tr key={contact.id}>
            <td>{contact.id}</td>
            <th>{contact.name}</th>
            <th>{contact.email}</th>
            <th>{contact.mobile}</th>
        </tr>
    );
    console.log('contact')
    console.log(contacts)
    console.log('row data')
    console.log(rowdata)
    return (
        <div>
                        <h1>Contact List</h1>
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Mobile</td>
                    </tr>
                </thead>
                <tbody>                    
                {rowdata}           
            </tbody>
            </table>   
   </div>
    )
}

export default Jsonservergetapi
