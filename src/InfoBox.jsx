import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { capitalize } from '@mui/material';
import "./InfoBox.css";
export default function InfoBox({info}){



    return(
        <div className='InfoBox'>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://cdn-icons-png.flaticon.com/128/831/831268.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Weather Details of {info.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <p>Temparature : {info.temp}&deg;C</p>
            <p>humidity: {info.humidity}</p>
            <p>weather: {info.weather}</p> 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </div>
    )
}