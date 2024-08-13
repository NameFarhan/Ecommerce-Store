import { Box, Grid, Input, Typography, Link } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Box sx={{ padding: '6vh 10vw', background: '#000', color: '#fff' }}>
      <Grid container>
        <Grid item xs={6}>
          <Grid container>
            <Grid item xs={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Typography sx={{ fontSize: '24px', fontWeight: '800' }}>Exclusive</Typography>
                <Typography sx={{ fontSize: '20px', fontWeight: '400' }}>Subscribe</Typography>
                <Typography sx={{ fontSize: '16px', fontWeight: '500' }}>Get 10% off your first order</Typography>
                <Box sx={{ position: 'relative' }}>
                  <Input 
                    placeholder="Enter your email" 
                    disableUnderline 
                    sx={{
                      width: '243px',
                      height: '38px',
                      backgroundColor: '#000',
                      outline: 'none',
                      border: '1px solid #fff',
                      padding: '0 10px',
                      borderRadius: '4px',
                      color: '#FAFAFA',
                      '&::placeholder': {
                        color: '#FAFAFA',
                        opacity: 1,
                      },
                      '&:hover': {
                        borderColor: '#fff',
                      },
                      '&:focus': {
                        borderColor: '#fff',
                      },
                    }}
                  />
                  <SendOutlinedIcon sx={{ color: '#fff', position: 'absolute', right: '55px', top: '50%', transform: 'translateY(-50%)' }} />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Typography sx={{ fontSize: '20px', fontWeight: '400' }}>Support</Typography>
                <Typography sx={{ fontSize: '16px', fontWeight: '400' }}>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</Typography>
                <Typography sx={{ fontSize: '16px', fontWeight: '400' }}>exclusive@gmail.com</Typography>
                <Typography sx={{ fontSize: '16px', fontWeight: '400' }}>+88015-88888-9999</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={6}>
          <Grid container>
            <Grid item xs={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Typography sx={{ fontSize: '20px', fontWeight: '400' }}>Account</Typography>
                <Link component={RouterLink} to="/" sx={{ fontSize: '16px', fontWeight: '400', color: '#fff', textDecoration: 'none' }}>My Account</Link>
                <Link component={RouterLink} to="/cart" sx={{ fontSize: '16px', fontWeight: '400', color: '#fff', textDecoration: 'none' }}>Cart</Link>
                <Link component={RouterLink} to="/wishlist" sx={{ fontSize: '16px', fontWeight: '400', color: '#fff', textDecoration: 'none' }}>Wishlist</Link>
                <Link component={RouterLink} to="/" sx={{ fontSize: '16px', fontWeight: '400', color: '#fff', textDecoration: 'none' }}>Shop</Link>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <Link component={RouterLink} to="/" sx={{ fontSize: '16px', fontWeight: '400', color: '#fff', textDecoration: 'none' }}>Quick Link</Link>
              <Link component={RouterLink} to="/" sx={{ fontSize: '16px', fontWeight: '400', color: '#fff', textDecoration: 'none' }}>Privacy Policy</Link>
                <Link component={RouterLink} to="/" sx={{ fontSize: '16px', fontWeight: '400', color: '#fff', textDecoration: 'none' }}>Terms of Use</Link>
                <Link component={RouterLink} to="/" sx={{ fontSize: '16px', fontWeight: '400', color: '#fff', textDecoration: 'none' }}>Faq</Link>
                <Link component={RouterLink} to="/contact" sx={{ fontSize: '16px', fontWeight: '400', color: '#fff', textDecoration: 'none' }}>Contact</Link>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Typography sx={{ fontSize: '20px', fontWeight: '400' }}>Download App</Typography>
                <Typography sx={{ fontSize: '12px', fontWeight: '400', color: '#FAFAFA' }}>Save $3 with App New User Only</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" sx={{ color: '#fff', '&:hover': { color: '#ccc' } }}>
                    <FacebookIcon />
                  </Link>
                  <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" sx={{ color: '#fff', '&:hover': { color: '#ccc' } }}>
                    <XIcon />
                  </Link>
                  <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" sx={{ color: '#fff', '&:hover': { color: '#ccc' } }}>
                    <InstagramIcon />
                  </Link>
                  <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" sx={{ color: '#fff', '&:hover': { color: '#ccc' } }}>
                    <LinkedInIcon />
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
