import * as React from 'react';
import RecipeCard from './RecipeCard'
import {Container, CssBaseline, Grid, Typography} from "@mui/material";

const cards = [
  { id: 1, tittle: "Apel", content: "Sample text, bebas diisi apa saja yang baik-baik sesuka hati anda" },
  { id: 2, tittle: "Mangga", content: "Sample text, bebas diisi apa saja yang baik-baik sesuka hati anda" },
  { id: 3, tittle: "Melon", content: "Sample text, bebas diisi apa saja yang baik-baik sesuka hati anda" },
  { id: 4, tittle: "Durian", content: "Sample text, bebas diisi apa saja yang baik-baik sesuka hati anda" },
  { id: 5, tittle: "Jambu", content: "Sample text, bebas diisi apa saja yang baik-baik sesuka hati anda" },
  { id: 6, tittle: "Anggur", content: "Sample text, bebas diisi apa saja yang baik-baik sesuka hati anda" },
];

export default function Rother() {

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div >
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
            </div>
          </Container>
        </div>
        <Container maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <RecipeCard key={card.id} card={card} />
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
