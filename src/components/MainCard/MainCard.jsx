import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
function MainCard() {
  return (
    <Card sx={{ maxWidth: 190 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://cdn.britannica.com/37/231937-050-9228ECA1/Drake-rapper-2019.jpg?w=400&h=300&c=crop"
        />

        <Typography gutterBottom variant="h6" component="div">
          Festivals
        </Typography>
        <Typography variant="body2" color="text.secondary">
          150k . Total songs
        </Typography>
      </CardActionArea>
    </Card>
  );
}

export default MainCard;
