import React from 'react';
import Layout from '../components/Layout/Layout';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: 'center',
          p: 2,
          '& h4': {
            fontWeight: 'bold',
            my: 2,
            fontSize: '2rem',
          },
          '& p': {
            textAlign: 'justify',
          },
          '@media (max-width:600px)': {
            mt: 0,
            '& h4': {
              fontSize: '1.5rem',
            },
          },
        }}
      >
        <Typography variant='h4'>Welcome To My Resturant</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
          vero quibusdam corrupti ipsa debitis odit, rerum numquam reiciendis
          cum quidem suscipit odio aliquid magni aspernatur tenetur dolore amet
          velit saepe architecto. Minima molestias ea rerum cumque nesciunt
          tenetur quae sunt, molestiae temporibus mollitia perferendis magnam
          vero velit laboriosam! Porro, laboriosam sint? Quae facere, nesciunt
          molestiae debitis obcaecati optio iste provident commodi dignissimos
          eveniet laboriosam eius delectus. Nobis nisi at ratione, eligendi
          omnis, harum nihil obcaecati possimus nemo debitis deleniti, alias non
          rerum amet reiciendis? Dicta reiciendis sapiente laudantium! Quam
          quod, at ducimus officiis totam asperiores voluptates laboriosam
          beatae cumque optio?
        </p>
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit animi
          vitae sequi itaque? In facere praesentium nihil veniam iure voluptatem
          totam modi, perferendis temporibus molestias? Hic asperiores rerum
          tempore quae ullam sed totam laudantium reiciendis enim nam non, ex
          porro assumenda veritatis consequuntur possimus vero tempora sunt
          explicabo cupiditate perferendis rem. Voluptatem eveniet, rerum
          quisquam incidunt illum quibusdam ab deserunt reiciendis commodi
          pariatur quasi reprehenderit ullam ipsa nihil, sint tempore quia
          ipsam? Sed quisquam maiores temporibus earum quasi placeat, laboriosam
          sint est praesentium magnam. Dolorem quas repudiandae exercitationem
          aut enim voluptatem, eius quibusdam fugit qui debitis? A suscipit
          exercitationem eligendi.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
