import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const News = (news) => {
  console.log(news);
  return (
    <>
<div className="details">
<Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={5}>
          <Grid item xs={16}>
            <Item>
              <CardMedia
                component="img"
                height="10"
                image={news.pic}
                alt="news"
              />
           <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {news.news}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {news.body}
          </Typography>
        </CardContent>
            {/* <CardActions> */}



    
          
          {/* <form action={`/news/${news.id}`}>
            <Button type="submit" size="small">
              Details
            </Button> */}
          {/* </form> */}
        {/* </CardActions> */}
        </Item>
          </Grid>
        </Grid>
      </Box>













{/* <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="https://static-cse.canva.com/blob/847064/29.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {news.news}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {news.body}
          </Typography>
        </CardContent>
        <CardActions>

          <form action={`/news/${news.id}`}>
            <Button type="submit" size="small">
            More details
            </Button>
          </form>
        </CardActions>
      </Card> */}




</div>
    </>
  );
};

export default News;
