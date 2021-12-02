import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProjectCard({
  name,
  projectImage,
  description,
  projectLink,
  githubLink
}) {
  return (
    <Card sx={{ maxWidth: 275, m: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
      <CardMedia
        component="img"
        height="194"
        image={projectImage}
        alt="Project Screenshot"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between'}}>
        <Button size="small" onClick={() =>  window.open(projectLink)}>Project</Button>
        <Button size="small" onClick={() =>  window.open(githubLink)}>GitHub</Button>
      </CardActions>
    </Card>
  );
}