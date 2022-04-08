import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
  const { data } = props;
  const genre = data && data[0] ? data[0].name : 'N/A';
  const prob = data && data[0] ? data[0].probability + '%' : 'N/A';

  return (
    <Card sx={{ maxWidth: 500 }}>
      <Typography variant="h1" component="div" gutterBottom>
        {genre}
      </Typography>
      <CardContent>
        <Typography gutterBottom variant="h2" component="div" align="right">
        {prob}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Genre of the given lyrics is {genre} with {prob} probability.
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button>
        <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}
