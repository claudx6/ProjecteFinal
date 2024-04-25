import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, LinearProgress } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { getProducts } from '../services/services';
import { useNavigate } from 'react-router-dom';

export default function ProductsCard() {
    const [isLoading,setLoading] = React.useState(false);
    const [categoryType, setCategoryType] = React.useState('food');
    const [animalType, setAnimalType] = React.useState('dogs');
    const [sortBy, setSortBy] = React.useState('high_price');
    const [data,setData] = React.useState([]);
    const navigate = useNavigate();
    const fetchProducts = async () => {
        try {
            setLoading(true)
            const payload = {
                "category_type" : animalType,
                "type" : categoryType,
                "sortBy" : sortBy
            } 
            const response = await getProducts(payload);
            if(response.data.status) {
                setTimeout(()=>{
                  setData(response.data.data);
                  setLoading(false)
                },1000)
            }
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }
    React.useEffect(()=>{
        fetchProducts();
    },[animalType,categoryType,sortBy])
  return (
    <Box sx={{ flexGrow: 1 }} className="container">
      {isLoading ? <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>  : ''}
    
    <div className='product-filters'>
    <FormControl variant="standard" sx={{ minWidth: 345 }}>
        <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={animalType}
          label="Type"
          onChange={(e)=>{
            setAnimalType(e.target.value);
          }}
        >
          <MenuItem value={'dogs'}>Perro</MenuItem>
          <MenuItem value={'cats'}>Gato</MenuItem>
          <MenuItem value={'fishes'}>Peces</MenuItem>
          <MenuItem value={'birds'}>Aves</MenuItem>
          <MenuItem value={'rodents'}>Roedores</MenuItem>
          <MenuItem value={'reptiles'}>Reptiles</MenuItem>
        </Select>
      </FormControl>
    <FormControl variant="standard" sx={{ minWidth: 345 }}>
        <InputLabel id="demo-simple-select-label">Categoría</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={categoryType}
          label="Type"
          onChange={(e)=>setCategoryType(e.target.value)}
        >
          <MenuItem value={'food'}>Comida</MenuItem>
          <MenuItem value={'accessory'}>Accesorios</MenuItem>
        </Select>
      </FormControl>
    <FormControl variant="standard" sx={{ minWidth: 345 }}>
        <InputLabel id="demo-simple-select-label">Ordenar por</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortBy}
          label="Type"
          onChange={(e)=>setSortBy(e.target.value)}
        >
          <MenuItem value={'high_price'}>Mayor precio</MenuItem>
          <MenuItem value={'low_price'}>Menor precio</MenuItem>
        </Select>
      </FormControl>
      </div>
      {!isLoading ?
      <Grid 
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}>
        {data.map((item,index)=>{
            return <Grid item xs={2} sm={4} md={4} key={index}>
            <Card sx={{ maxWidth: 345 }}>
            <CardActionArea onClick={()=>navigate(`/tienda/producto?productId=${item._id}`)}>
              <CardMedia
                  component="img"
                  image={item.image_url}
                  alt={item.title}
              />
              <CardContent>
                  <Typography gutterBottom variant="h7" component="div" style={{fontWeight : '600'}}>
                      {item.title}
                  </Typography>
                  <Typography variant="body2" style={{ color: 'red',fontWeight : 'bold' }}>
                      Precio: {item.price}€
                  </Typography>
              </CardContent>
            </CardActionArea>
            </Card>
          </Grid>
        })}
      </Grid> : '' }
    </Box>
  );
}