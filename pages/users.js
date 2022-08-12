import React from 'react'
import { Container, Stack, Typography, Avatar, Button } from '@mui/material';
import { getAllUsers } from '../features/slices/fetchUsersSlice';
import { useSelector, useDispatch } from 'react-redux'

const Users = () =>
{
    const allusers = useSelector((state) => state.allReducers.getusers.users)
    const dispatch = useDispatch()
    
    return (
        <Container maxWidth='lg' sx={{mb:'20px',mt:'30px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center' }}>
            <Stack spacing={3} alignItems='stretch' direction='column'>
                <Button variant='contained' color='warning' onClick={() => {dispatch(getAllUsers())}}>Get All Users</Button>
                <Typography variant='h2' component='div'>All our Users:</Typography>
                {allusers.map((user) => (
                    <div key={user.id}>
                        <Stack spacing={3} direction='row' >
                            <Avatar alt={user.first_name} src={user.avatar} sx={{ width: 95, height: 95 }} />
                            <div>
                                <Typography variant='h3' component='div'>
                                    {user.first_name} {user.last_name}
                                </Typography>
                                <Typography variant='h6' component='div'>
                                    {user.email}
                                </Typography>
                            </div>
                        </Stack>
                    </div>
                ))}
            </Stack>
        </Container>
    )
}

export default Users