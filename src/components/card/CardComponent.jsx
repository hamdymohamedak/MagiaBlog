import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function Home({title, para, share_btn, learn_btn,img }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={img}
                title="green iguana"
            />
            <CardContent>
                <Typography style={{color:"black"}} gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography style={{color:"black"}} variant="body2" color="text.secondary">
                    {para}
                </Typography>
            </CardContent>
            <CardActions>
                <Button style={{color:"white"}} variant='contained' size="small"> {learn_btn} </Button>
            </CardActions>
        </Card>
    )
}
