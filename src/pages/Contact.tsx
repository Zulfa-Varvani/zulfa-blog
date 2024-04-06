import { Container, Typography, TextField, Button, Box } from '@mui/material';

const Contact = () => {
  return (
    <Box sx={{ backgroundColor: 'rgba(255, 248, 208, 0.281)', minHeight: '90vh' }}>
      <Container sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 4, borderRadius: 2 }} maxWidth="md">
        <Typography variant="h4" component="h1" gutterBottom>
          Contact Us
        </Typography>
        <Typography sx={{ marginTop: 2 }} variant="body2">
          Have an inquiry? Send us a message!
        </Typography>
        <form style={{ width: '100%', maxWidth: 600, marginTop: 2 }} noValidate autoComplete="off">
          <TextField fullWidth label="Title" variant="outlined" margin="normal" required sx={{ bgcolor: 'white' }} />
          <TextField fullWidth label="Email" variant="outlined" margin="normal" required type="email" sx={{ bgcolor: 'white' }} />
          <TextField fullWidth label="Message" variant="outlined" margin="normal" multiline rows={4} required sx={{ bgcolor: 'white' }} />
          <Button sx={{ marginTop: 2 }} variant="contained" color="primary" size="large">
            Send
          </Button>
        </form>
      </Container>
    </Box>
  );
}

export default Contact;
