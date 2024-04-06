import { Container, Typography, List, ListItem, ListItemText, Link, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: 'black', padding: '10px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 100 }}>
      {/* Contact Information */}
      <div>
        <Typography variant="body1" sx={{ color: 'rgba(255, 248, 208, 0.9)' }}>
          Contact Information:
          <br />
          Email: zulfa.varvani@torontomu.ca
          <br />
          Phone: 647-915-8586
        </Typography>
      </div>
      
      {/* Countries */}
      <div>
        <Typography variant="body1" sx={{ color: 'rgba(255, 248, 208, 0.9)' }}>
          Countries:
        </Typography>
        <List sx={{ color: 'rgba(255, 248, 208, 0.9)' }}>
          <ListItem button component={RouterLink} to="/kenya" sx={{height: 10}}>
            <ListItemText primary="Kenya" />
          </ListItem>
          <ListItem button component={RouterLink} to="/palestine" sx={{height: 10}}>
            <ListItemText primary="Palestine" />
          </ListItem>
          <ListItem button component={RouterLink} to="/egypt" sx={{height: 10}}>
            <ListItemText primary="Egypt" />
          </ListItem>
        </List>
      </div>

      {/* Resources */}
      <div>
        <Typography variant="body1" sx={{ color: 'rgba(255, 248, 208, 0.9)' }}>
          More Resources:
        </Typography>
        <List sx={{ display: 'flex', gap: '10px', color: 'rgba(255, 248, 208, 0.9)' }}>
          <Link href="https://bakeithalal.ca/" target="_blank" rel="noopener" color="inherit">
            <ListItemText primary="BakeItHalal" />
          </Link>
          <Link href="https://www.palestineonaplate.com/" target="_blank" rel="noopener" color="inherit">
            <ListItemText primary="Palestine On A Plate" />
          </Link>
          <Link href="https://amiraspantry.com/" target="_blank" rel="noopener" color="inherit">
            <ListItemText primary="Amira's Pantry" />
          </Link>
        </List>
      </div>
    </Box>
  );
}

export default Footer;
