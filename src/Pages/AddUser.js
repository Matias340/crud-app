import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createUsersRequested } from '../redux/actions/action';


const AddUser = () => {

  const initialState = {
    name: "",
    password: "",
    email: "",
    contact: "",
    address: "",
  };

  const [formValue, setFormValue] = useState(initialState);
  const [error, setError] = useState("");  
  const { name, password , email, contact, address } = formValue;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => { 
     e.preventDefault();
     if(!name || !password || !email || !contact || !address) {
       setError("Por favor llene los campos");
   } else {
     dispatch(createUsersRequested(formValue));
     setTimeout(() => navigate("/"), 500);
     setError("");
   }
  };

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

    return (
        <Box
        sx={{  '& .MuiTextField-root': { m: 1, width: '25ch' }, marginTop: '80px', marginLeft: 'auto' , 
        marginRight: 'auto',display: 'flex', flexDirection: 'column',alignItems: 'center'}}
        noValidate
        autoComplete="off"
      >
       <div>
         <h2>Add User</h2>
         {error && <h3 style={{ color: "red" }}>{error}</h3>}
         <form onSubmit={handleSubmit}>
          <TextField style={{ width: "500px" }} id="outlined-name" label="Name" value={formValue.name} name="name" type="text" onChange={onInputChange}/>
          <br />
          <TextField style={{ width: "500px" }} id="outlined-password" label="Password" value={formValue.password} name="password" type="password" onChange={onInputChange}/>
          <br />
          <TextField style={{ width: "500px" }} id="outlined-password" label="Email" value={formValue.email} name="email" type="email" onChange={onInputChange}/>
          <br />
          <TextField style={{ width: "500px" }} id="outlined-email" label="Contact" value={formValue.contact} name="contact" type="number" onChange={onInputChange}/>
          <br />
          <TextField style={{ width: "500px" }} id="outlined-address" label="Address" value={formValue.address} name="address" type="text" onChange={onInputChange}/>
          <br />
          <Button 
          style={{ width: "100px", marginTop: "20px", marginRight: "20px"}}
          variant='contained' 
          color='error'
          type='submit'>
           <Link style={{ textDecoration: 'none', color: 'white' }} to="/">
            Go Back
          </Link>   
          </Button>

          <Button 
           style={{ width: "100px", marginTop: "20px" }}
           variant='contained' 
           color='primary'
           type='submit'>
             Add
          </Button>
         </form>
     </div>   
      </Box>
    )
}

export default AddUser;