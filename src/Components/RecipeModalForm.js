import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";

const RecipeModalForm = ({ open, handleClose, refresh, setRefresh }) => {
    const [formData, setFormData] = useState({
        // Define your form fields here
        id: '',
        tittle: 'Sayuran',
        content: ''
    });

    const handleInputChange = (e) => {
        console.log(e)
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted with data:', formData);
        axios.post('http://localhost:1234/recipes', formData)
            .then(response => {
                console.log('POST Response:', response.data);
                setRefresh(!refresh)
            })
            .catch(error => {
                console.error('POST Error:', error);
            });
        handleClose(); // Close the modal after submission
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                }}
            >
                <h2 id="modal-title">Modal Form</h2>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="ID"
                        name="id"
                        value={formData.id}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Title"
                        name="tittle"
                        value={formData.tittle}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Content"
                        name="content"
                        value={formData.content}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                    />
                    <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                        Submit
                    </Button>
                </form>
            </Box>
        </Modal>
    );
};

export default RecipeModalForm;
