import { Box, Input, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const Navbar = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '38px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '6vh 10vw',
      }}
    >
      <Box>
        <Link
          component={RouterLink}
          to="/"
          sx={{
            color:'#000',
            fontSize: '24px',
            textDecoration: 'none',
            fontWeight:'800'
          }}
        >
          Exclusive
        </Link>
      </Box>


      <Box sx={{display:'flex', alignItems:'center', gap:'48px'}}>
  <Link
    component={RouterLink}
    to="/"
    sx={{
      position: 'relative',
      color: '#000',
      fontSize: '16px',
      textDecoration: 'none',
      fontWeight: '400',
      '&::after': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '2px',
        backgroundColor: 'gray',
        left: 0,
        bottom: '-4px', // Adjust the position of the line
        transform: 'scaleX(0)',
        transition: 'transform 0.3s ease-in-out',
        transformOrigin: 'bottom right',
      },
      '&:hover::after': {
        transform: 'scaleX(1)',
        transformOrigin: 'bottom left',
      },
    }}
  >
    Home
  </Link>
  <Link
    component={RouterLink}
    to="/contact"
    sx={{
      position: 'relative',
      color: '#000',
      fontSize: '16px',
      textDecoration: 'none',
      fontWeight: '400',
      '&::after': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '2px',
        backgroundColor: 'gray',
        left: 0,
        bottom: '-4px',
        transform: 'scaleX(0)',
        transition: 'transform 0.3s ease-in-out',
        transformOrigin: 'bottom right',
      },
      '&:hover::after': {
        transform: 'scaleX(1)',
        transformOrigin: 'bottom left',
      },
    }}
  >
    Contact
  </Link>
  <Link
    component={RouterLink}
    to="/about"
    sx={{
      position: 'relative',
      color: '#000',
      fontSize: '16px',
      textDecoration: 'none',
      fontWeight: '400',
      '&::after': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '2px',
        backgroundColor: 'gray',
        left: 0,
        bottom: '-4px',
        transform: 'scaleX(0)',
        transition: 'transform 0.3s ease-in-out',
        transformOrigin: 'bottom right',
      },
      '&:hover::after': {
        transform: 'scaleX(1)',
        transformOrigin: 'bottom left',
      },
    }}
  >
    About
  </Link>
  <Link
    component={RouterLink}
    to="/"
    sx={{
      position: 'relative',
      color: '#000',
      fontSize: '16px',
      textDecoration: 'none',
      fontWeight: '400',
      '&::after': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '2px',
        backgroundColor: 'gray',
        left: 0,
        bottom: '-4px',
        transform: 'scaleX(0)',
        transition: 'transform 0.3s ease-in-out',
        transformOrigin: 'bottom right',
      },
      '&:hover::after': {
        transform: 'scaleX(1)',
        transformOrigin: 'bottom left',
      },
    }}
  >
    Sign Up
  </Link>
</Box>




<Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
  <Box>
    <Input 
      placeholder="What are you looking for?" 
      disableUnderline 
      sx={{
        fontSize: '15px',
        width: '243px',
        height: '38px',
        backgroundColor: '#F5F5F5',
        outline: 'none',
        border: '1px solid transparent',
        padding: '0 10px',
        borderRadius: '4px',
        '&::placeholder': {
          color: '#000000', // Custom placeholder color
        },
        '&:hover': {
          borderColor: 'transparent',
        },
        '&:focus': {
          borderColor: 'transparent',
        },
      }}
    />
          <SearchIcon sx={{position:'absolute',right:'17.4%',top:'4.5%',}} />
  </Box>

  <Box sx={{display:'flex',alignItems:'center',gap:'30px',marginBottom:'-10px'}}>
  <Link sx={{color:'#000'}} component={RouterLink} to="/wishlist" >
    <FavoriteBorderIcon sx={{cursor:'pointer'}}/>
</Link>
<Link sx={{color:'#000'}} component={RouterLink} to="/cart" >
    <ShoppingCartOutlinedIcon sx={{cursor:'pointer'}}/>
</Link>
  </Box>


</Box>


    </Box>
  );
};

export default Navbar;
