// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import { Button, Card, CardActions, CardContent, FormControl, TextField } from '@mui/material' ;
import { useState } from 'react';

const ContactForm = ({fnAddContact}) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const initialState = {
        name: '',
        phone: '',
        email: '',
        photo: '',
    };
    
    const [ newContact, setNewContact ] = useState(initialState);

    const handleChange = ( name, value ) => {
        setNewContact({...newContact, [name] : value})
    }

    const handleSubmit = (x) => {
        x.preventDefault();
        fnAddContact(newContact);
        setNewContact(initialState);
    }

    return (
        <>
            <Card sx={{ maxWidth: 500, margin: 'auto', backgroundColor: '#FFF5E4' }}>
                <form onSubmit={handleSubmit} >
                    <CardContent>
                        <FormControl fullWidth margin='normal'>
                            <TextField required id="outlined-required" label='Name' name='name' value={newContact.name} onChange={ (x) => handleChange('name', x.target.value) } />
                        </FormControl>
                        <FormControl fullWidth margin='normal'>
                            <TextField required id="outlined-required" label='Phone' name='phone' value={newContact.phone} onChange={ (x) => handleChange('phone', x.target.value) } />
                        </FormControl>
                        <FormControl fullWidth margin='normal'>
                            <TextField required id="outlined-required" label='Email' name='email' value={newContact.email} onChange={ (x) => handleChange('email', x.target.value) } />
                        </FormControl>
                        <FormControl fullWidth margin='normal'>
                            <TextField required id="outlined-required" label='Photo Url' name='photo' value={newContact.photo} onChange={ (x) => handleChange('photo', x.target.value) } />
                        </FormControl>
                    </CardContent>
                    <CardActions>
                        <Button size='small' type='submit'>Add New</Button>
                    </CardActions>
                </form>
            </Card>
        </>
    );
}

export default ContactForm;