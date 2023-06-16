import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface MediaCardProps {
  image: string;
  title: string;
  description: string;
  imgHeight: number;
  imgWidth: number;
}

export default function MediaCard({ image, title, description, imgHeight, imgWidth }: MediaCardProps) {
  return (
    <Card sx={{ border: '0.7px solid gray', width: '100%', height: '450px' }}>
      <CardMedia
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 'auto',
          height: '280px',
          width: '90%',
          overflow: 'hidden',
        }}
        component="img" // コンポーネントをimgに設定
        src={image} // 画像のURLを指定
        alt={title} // 画像の代替テキストを指定
        style={{
          height: `${imgHeight}px`, // 引数で指定された高さに設定
          width: `${imgWidth}px`, // 引数で指定された幅に設定
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ maxHeight: '45px' }} color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">More</Button>
      </CardActions> */}
    </Card>
  );
}
