import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersById, updateUsersRequested} from '../redux/actions/action';


const EditUser = () => {

  const initialState = {
    name: "",
    password: "",
    email: "",
    contact: "",
    address: "",
  };

  const [formValue, setFormValue] = useState(initialState);
  const [error, setError] = useState('');
  const { name, email, contact, address } = formValue;
  const navigate = useNavigate();
  const {id} = useParams();

  const handleSubmit = (e)  => { 
     e.preventDefault();
     if(formValue) {
     dispatch(updateUsersRequested(formValue, id));
     setTimeout(() => navigate("/"), 500);
     setError("");
   }
  };

  const dispatch = useDispatch();
  const userById = useSelector((state) => state.users.editUser);
  console.log(userById);

  useEffect(() => {
    dispatch(getUsersById(id));
  }, [])

  useEffect(()=> {
    if(userById)
    setFormValue({...formValue, 
    name: userById.name,
    email: userById.email,
    contact: userById.contact,
    address: userById.address})
  }, [userById]);

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
         <h2>Edit User</h2>
         {error && <h3 style={{ color: "red" }}>{error}</h3>}
         <form onSubmit={handleSubmit}>
          <TextField style={{ width: "500px" }} id="outlined-name" label="Name" value={name} name="name" type="text" onChange={onInputChange}/>
          <br />
          <TextField style={{ width: "500px" }} id="outlined-email" label="Email" value={email} name="email" type="email" onChange={onInputChange}/>
          <br />
          <TextField style={{ width: "500px" }} id="outlined-contact" label="Contact" value={contact} name="contact" type="number" onChange={onInputChange}/>
          <br />
          <TextField style={{ width: "500px" }} id="outlined-address" label="Address" value={address} name="address" type="text" onChange={onInputChange}/>
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
             Edit
          </Button>
         </form>
     </div>   
      </Box>
    )
}

export default EditUser;
