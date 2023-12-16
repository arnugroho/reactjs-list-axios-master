import * as React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import axios from "axios";

const RecipeCard = ({card, refresh, reload}) => {

    const handleDelete = (currentData) => {
        console.log("Proses delete data")
        axios.delete('http://localhost:1234/recipes/' + currentData.id).then(res => {
            console.log(res)
            reload(!refresh)
        }).catch(reason => {

        })
    }

    return (
        <>
            <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card>
                    <CardMedia
                        image={card.image}
                        title={card.tittle}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {card.tittle}
                        </Typography>
                        <Typography>
                            {card.content}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">View</Button>
                        <Button size="small">Edit</Button>
                        <Button size="small" onClick={() => {
                            handleDelete(card)
                        }}>Delete</Button>
                    </CardActions>
                </Card>
            </Grid>
        </>
    );
};
export default RecipeCard;
