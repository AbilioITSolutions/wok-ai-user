import {
  Container,
  Box,
  Grid,
  Typography,
  TextField,
  colors,
} from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import StarIcon from "@mui/icons-material/Star";
import EditLocationIcon from "@mui/icons-material/EditLocation";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const Cards = ({ data }) => {
  return (
    <Box mt={5}>
      <Container maxWidth={"lg"}>
        <Grid container spacing={2}>
          <Grid item key={data.id} size={{ xs: 12, md: 4 }}>
            <Card sx={{ boxShadow: "none", border: "1px solid lightgrey" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={data.image}
                  alt={data.name}
                />
                <CardContent>
                  <Box sx={{ display: "flex", gap: 15 }}>
                    <Typography gutterBottom variant="h6" component="div">
                      <span
                        style={{ color: "#368ADD", fontFamily: "Albert Sans" }}
                      >
                        {data.name}
                      </span>
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        fontFamily: "Albert Sans",
                      }}
                    >
                      <Typography gutterBottom variant="body1">
                        {" "}
                        <StarIcon fontSize="small" />
                        <span style={{ height: "10px", color: "#000000" }}>
                          {data.rating}
                        </span>
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", fontFamily: "Albert Sans" }}>
                    <Typography variant="body2" color="text.secondary">
                      {" "}
                      <span sx={{ fontSize: "1.2rem" }}>
                        <EditLocationIcon />
                      </span>
                      <span style={{ fontSize: "18px", color: "#A9A9A9" }}>
                        {data.location}{" "}
                      </span>
                      <span style={{ color: "#A9A9A9" }}>{data.reviews}</span>
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", gap: 2, fontFamily: "Albert Sans" }}
                  >
                    {data.specialties.map((val) => {
                      return (
                        <Button
                          size="small"
                          variant="contained"
                          color="primary"
                          gutterBottom
                          sx={{ fontSize: "10px", height: "20px" }}
                        >
                          {val}
                        </Button>
                      );
                    })}
                  </Box>
                  <Typography
                    gutterBottom={2}
                    variant="body2"
                    color="text.secondary"
                    sx={{ color: "#A9A9A9", fontFamily: "Albert Sans" }}
                  >
                    📞 {data.phone}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ color: "#A9A9A9", fontFamily: "Albert Sans" }}
                  >
                    📧 {data.email}
                    <hr sx={{ color: "'#A9A9A9'" }} />
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#A9A9A9", fontFamily: "Albert Sans" }}
                  >
                    💰 Price Range :{" "}
                    <span style={{ color: "red" }}> {data.priceRange}</span>
                    <hr />
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "Albert Sans",
                }}
              >
                <Button variant="contained" disableElevation fullWidth>
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Cards;
