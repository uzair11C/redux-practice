import * as React from 'react';
import {Accordion, AccordionSummary, AccordionDetails,Typography, Container, Stack, Button} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link'

export default function HomeAccordian() {
  return (
    <Container maxWidth='md' sx={{height:'100vh',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center' }}>
      <Stack alignItems='stretch' spacing={0.3}>
        <Accordion sx={{padding:'10px',backgroundColor:'primary.main',color:'white'}}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon  sx={{color:'white'}}/>}
            aria-controls="panel1a-content"
            id="panel1a-header">
                <Typography variant='h5' component='p'>Get All Users</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{backgroundColor:'primary.dark',color:'white'}}>
                <Typography >
                    Using Redux, get all users dynamically from the API
                </Typography>
                <Button sx={{mt:'10px'}} variant='contained' color='secondary' >
                    <Link href='/users'>
                        GET
                    </Link>
                </Button>
            </AccordionDetails>
        </Accordion>

        <Accordion sx={{padding:'10px',backgroundColor:'primary.main',color:'white'}}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon  sx={{color:'white'}}/>}
            aria-controls="panel2a-content"
            id="panel2a-header">
                <Typography variant='h5' component='p'>Get All Resources</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{backgroundColor:'primary.dark',color:'white'}}>
                <Typography>
                    Using Redux, get all the available resources dynamically from the API
                </Typography>
                <Button sx={{mt:'10px'}} variant='contained' color='secondary' >
                    <Link href='/resources'>
                        GET
                    </Link>
                </Button>
            </AccordionDetails>
        </Accordion>

        <Accordion sx={{padding:'10px',backgroundColor:'primary.main',color:'white'}}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon  sx={{color:'white'}}/>}
            aria-controls="panel3a-content"
            id="panel3a-header">
                <Typography variant='h5' component='p'>Display Counter</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{backgroundColor:'primary.dark',color:'white'}}>
                <Typography>
                    Display the Redux Counter
                </Typography>
                <Button sx={{mt:'10px'}} variant='contained' color='secondary'>
                    <Link href='/counter'>
                        GET
                    </Link>
                </Button>
            </AccordionDetails>
        </Accordion>
      </Stack>
    </Container>
  );
}
