import React from 'react';
import Layout from '../components/Layout/Layout';
import {
  Box,
  Table,
  TableContainer,
  TableRow,
  Typography,
  TableCell,
  Paper,
  TableHead,
  TableBody,
} from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 5, ml: 10, '& h4': { fontWeight: 'bold', mb: 2 } }}>
        <Typography variant='h4'>Contact My Resturant</Typography>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
          reprehenderit architecto suscipit repellendus animi alias laborum odio
          vel natus consectetur repellat dolor praesentium aut magni eum a,
          tempore numquam ad?
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: '600px',
          ml: 10,
          '@media (max-width:600px)': { width: '300px' },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label='contact table'>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: 'black', color: 'white' }}
                  align='center'
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: 'red', pt: 1 }} /> 1234-5678
                  (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: 'skyblue', pt: 1 }} /> help@naver.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: 'green', pt: 1 }} /> 010-1234-5678
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
