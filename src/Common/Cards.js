import { Container, Box, Grid, Typography, TextField, colors } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import img1 from '../ASSETS/one.png'
import img2 from '../ASSETS/two.png'
import img3 from '../ASSETS/three.png'
import StarIcon from '@mui/icons-material/Star';
import EditLocationIcon from '@mui/icons-material/EditLocation';
import FilterAltIcon from '@mui/icons-material/FilterAlt';





const clinics = [
  {
    id: "1",
    name: "Layers Clinic",
    location: "Jubilee Hills, Hyderabad",
    specialties: ["Cardiology", "Oncology", "Surgery"],
    rating: 4.8,
    reviews: "4,250+ reviews",
    phone: "+91 9000572727",
    email: "info@layersclinics.com",
    priceRange: "20K to 1.2K",
    image: img1,
    coordinates: [17.4239, 78.4483],
  },
  {
    id: "2",
    name: "Sikara clinics",
    location: "Kothapet, Hyderabad",
    specialties: ["Hair", "Skin", "Laser"],
    rating: 4.8,
    reviews: "4,250+ reviews",
    phone: "1800 4123 1867",
    email: "enquiry@sikaraclinics.com",
    priceRange: "45K to 1K",
    image: img2,
    coordinates: [17.3691, 78.5386],
  },
  {
    id: "3",
    name: "Hair Creations",
    location: "Dilsuknagar, Hyderabad",
    specialties: ["Hair Transplant", "GFC for Hair", "FUE"],
    rating: 4.8,
    reviews: "4,250+ reviews",
    phone: "+91 90528 72222",
    email: "haircreations@gmail.com",
    priceRange: "79K to 2.2K",
    image: img3,
    coordinates: [17.3682, 78.5265],
  },
  {
    id: "4",
    name: "Layers Clinic",
    location: "Jubilee Hills, Hyderabad",
    specialties: ["Cardiology", "Oncology", "Surgery"],
    rating: 4.8,
    reviews: "4,250+ reviews",
    phone: "+91 9000572727",
    email: "info@layersclinics.com",
    priceRange: "20K to 1.2K",
    image: img1,
    coordinates: [17.3682, 78.5265],
  },
  {
     id: "5",
    name: "Sikara clinics",
    location: "Kothapet, Hyderabad",
    specialties: ["Hair", "Skin", "Laser"],
    rating: 4.8,
    reviews: "4,250+ reviews",
    phone: "1800 4123 1867",
    email: "enquiry@sikaraclinics.com",
    priceRange: "45K to 1K",
    image: img2,
    coordinates: [17.3691, 78.5386],
  },
  {
    id: "6",
    name: "Hair Creations",
    location: "Dilsuknagar, Hyderabad",
    specialties: ["Hair Transplant", "GFC for Hair", "FUE"],
    rating: 4.8,
    reviews: "4,250+ reviews",
    phone: "+91 90528 72222",
    email: "haircreations@gmail.com",
    priceRange: "79K to 2.2K",
    image: img3,
    coordinates: [17.3682, 78.5265],
  },
]


const Cards = () => {
  return (
    <Box mt={5}>

      <Container maxWidth={'lg'}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          < TextField gutterBottom
            aria-label="empty textarea"
            placeholder="Search treatment, clinic or anything.."
            style={{ width: "83%", height: "40px" }}
          />
          <Button variant="contained" href="#contained-buttons" sx={{ mb: "39px", height: "55px", width: "15%" }}>
               <FilterAltIcon/>     Filter
          </Button>
        </Box>
        <Typography gutterBottom variant='h6' sx={{ color: '#368ADD' }}>Recommended Clinics</Typography>


        <Grid container spacing={2}>
          {clinics.map((e) => (
            <Grid item key={e.id} size={{ xs: 12, md: 4 }} >
              <Card sx={{ boxShadow: 'none', border: '1px solid lightgrey' }}>

                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={e.image}
                    alt={e.name}
                  />
                  <CardContent>
                    <Box sx={{ display: "flex", gap: 15 }}>
                      <Typography gutterBottom variant="h6" component="div">
                        <span style={{ color: "#368ADD" ,fontFamily:'Albert Sans' }}>{e.name}</span>
                      </Typography>
                      <Box sx={{ display: "flex", alignItems: "center",fontFamily:'Albert Sans' }}>
                        <Typography gutterBottom variant='body1'> <StarIcon fontSize='small' />
                          <span style={{ height: "10px" ,color:'#000000' }}>{e.rating}</span>
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: "flex",fontFamily:'Albert Sans'}} >
                      <Typography variant="body2" color="text.secondary"> <span sx={{ fontSize: "1.2rem" }}><EditLocationIcon  /></span>
                        <span style={{ fontSize: "18px", color:"#A9A9A9" }}>{e.location} </span>
                        <span style={{color:"#A9A9A9"}}>{e.reviews}</span>
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2 ,fontFamily:'Albert Sans'}}>

                      {e.specialties.map((val) => {
                        return (
                          <Button size="small" variant='contained' color='primary' gutterBottom sx={{ fontSize: "10px", height: "20px" }}>{val}</Button>)
                      })}
                    </Box>
                    <Typography gutterBottom={2} variant="body2" color="text.secondary" sx={{color:'#A9A9A9',fontFamily:'Albert Sans'}}>
                      📞 {e.phone}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{color:'#A9A9A9',fontFamily:'Albert Sans'}}>
                      📧 {e.email}<hr sx={{color:"'#A9A9A9'"}} />
                    </Typography>
                    <Typography variant="body2" sx={{color:'#A9A9A9',fontFamily:'Albert Sans'}}>
                      💰  Price Range : <span style={{ color: "red" }}>   {e.priceRange}</span>
                      <hr />
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions sx={{ display: 'flex', alignItems: 'center', justifyContent: "center", fontFamily:'Albert Sans'}}>
                  <Button variant="contained" disableElevation fullWidth   >View Details</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box >

  )
}

export default Cards






