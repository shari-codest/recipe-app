import {
    Card,
    CardContent,
    CardMedia,
    Container,
    Grid,
    TextField,
    Typography,
    CardActionArea,
  } from "@mui/material";
  
  import { useState, useEffect } from "react";
  
  export default function Recipes() {
    const [recipes, setRecipes] = useState([]);
  
    const getRecipes = () => {
      //prepare URL
      const url = new URL("https://api.spoonacular.com/recipes/complexSearch");
      url.searchParams.append("apiKey", "9d52b9adc5e0428f81c39c700c343cfc");
      //fetch recipes from API
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
         setRecipes(data.results)
          // console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    useEffect(getRecipes, []);
    return (
      <Container sx={{ my: "2rem" }}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Want to cook? Enter the meal name here to find the Recipe!"
          variant="outlined"
        />
        <Grid sx={{ mt: "1rem" }} container spacing={3}>
          {recipes.map(recipe => (<Grid key={recipe.id} item xs={4}>
            <Card sx={{ maxWidth: 345, height: "100%"}}>
              <CardActionArea sx={{height:'100%'}}>
                <CardMedia
                  component="img"
                  height="140"
                  image={recipe.image}
                  alt={recipe.title}
                />
                <CardContent sx={{height: "100%"}}>
                  <Typography gutterBottom variant="h5" component="div">
                   {recipe.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>))}
          <Grid item xs={4}></Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </Container>
    );
  }