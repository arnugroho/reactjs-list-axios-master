import * as React from 'react';
import {useEffect, useState} from 'react';
import RecipeCard from './RecipeCard'
import axios from "axios";
import {Button, Container, Grid, Typography} from "@mui/material";
import RecipeModalForm from "./RecipeModalForm";



export default function Recipes() {
  const [cards, setCards] = useState([])
  const [refresh, setRefresh] = useState(true)
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //deps = [] -- dijalankan hanya sekali
  useEffect(()=>{
    axios.get('http://localhost:1234/recipes').then(res => {
      setCards(res.data)
    }).catch(reason => {

    })
  },[refresh])

  const doRefresh = () => {
    setRefresh(!refresh)
  }

  return (
    <React.Fragment>
      <main>
        <div>
          <Container maxWidth="sm">

            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Recipes
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Aneka macam ide resep masakan dan makanan yang simpel
              tersaji disini untuk memberi panduan dan mempermudah dalam menentukan hidangan lezat untuk
              keluarga anda
            </Typography>
            <div>
              <Button onClick={doRefresh}>Refresh</Button>
              <Button onClick={handleOpen}>Tambah Data</Button>
            </div>
          </Container>
        </div>
        <Container maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (

              <RecipeCard key={card.id} card={card} refresh={refresh} reload={setRefresh} />
            ))}
          </Grid>
        </Container>
      </main>
      <RecipeModalForm open={open} handleClose={handleClose} refresh={refresh} setRefresh={setRefresh}/>
    </React.Fragment>
  );
}
