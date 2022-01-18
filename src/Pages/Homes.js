import { useEffect } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { getUsers, deleteUsersRequested} from '../redux/actions/action';
import { useSelector, useDispatch } from 'react-redux';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

const Homes = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const handleDelete = (id) => {
    if(window.confirm("estas seguro de eliminar este ususario?")) {
      dispatch(deleteUsersRequested(id));
    }
  };

    return (
       <div>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 900, marginTop: 10 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align='center'>Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Contact</StyledTableCell>
              <StyledTableCell align="center">Address</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <StyledTableRow key={user.id}>
                <StyledTableCell align="center">{user.name}</StyledTableCell>
                <StyledTableCell align="center">{user.email}</StyledTableCell>
                <StyledTableCell align="center">{user.contact}</StyledTableCell>
                <StyledTableCell align="center">{user.address}</StyledTableCell>
                <StyledTableCell align="center">
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', '& > *': {m: 1,},}}>   
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                  <Button style={{ marginRight: "8px"}} color='error' onClick={() => handleDelete(user.id)}>Delete</Button>
                  <Button color='primary'>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to={`/editUser/` + user.id}>
                        Edit
                    </Link>
                  </Button>
                  </ButtonGroup>
                 </Box> 
                </StyledTableCell>
              </StyledTableRow>
            ))}
            </TableBody>
        </Table>
      </TableContainer>
      </div> 
    )
}

export default Homes;
