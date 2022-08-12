import React from 'react'
import { Button, Container, Stack, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './slices/counterSlice'
import { persistor } from '../pages/_app'

const Counter = () => 
{
    const count = useSelector((state) => state.allReducers.counter.value)

    const dispatch = useDispatch()

    // useEffect(() => {
    //   dispatch(getUsers)
    //   console.log(allusers)
    // }, [])
    
    console.log(allusers)

    return(
        <Container maxWidth='md' sx={{height:'100vh',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center' }}>
            <Stack spacing={3} direction='column' sx={{display:'flex',justifyContent:'center',alignItems:'center' }}>
                <Typography variant='h2' component='div'>
                    Counter: {count}
                </Typography>
                <Stack spacing={3} direction='row'>
                    <Button variant='contained' onClick={() => dispatch(increment())}>
                        Increment
                    </Button>
                    <Button variant='contained' color='secondary' onClick={() => dispatch(incrementByAmount(5))}>
                        Increment By Amount
                    </Button>
                    <Button variant='contained' onClick={() => dispatch(decrement())}>
                        Decrement
                    </Button>
                </Stack>
                <Button variant='contained' color='error' onClick={() => {persistor.purge()}}>
                    Clear State
                </Button>
            </Stack>
        </Container>
    )
}

export default Counter