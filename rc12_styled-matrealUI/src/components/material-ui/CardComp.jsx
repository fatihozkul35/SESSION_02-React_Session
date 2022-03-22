import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function CardComp() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="300"
        image="https://cdn.pixabay.com/photo/2021/09/24/10/00/chick-6652163_960_720.jpg"
        alt="chick"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

// import { Container, Grid, Paper } from "@mui/material";

// const CardComp = () => {
//   return (
//     <Container>
//       <Grid container justify="center" spacing={2}>
//         {[0, 1, 2].map((value) => (
//           <Grid key={value} item xs={4} sm={6}>
//             <Paper style={{ height: 90, marginBottom: 10 }} />
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default CardComp;
