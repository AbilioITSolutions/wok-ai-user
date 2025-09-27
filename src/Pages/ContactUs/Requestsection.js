import React from "react";
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Paper,
} from "@mui/material";
import mapimg from "../../Assets/contactusimages/Mapimage.png";
import Backgroundimg from "../../Assets/contactusimages/Backgroundimg.png";
import Cardsection from "./Cardsection";
import useResponsive from "../../Hooks/useResponsive";
export default function Requestsection() {
  const { isMobile } = useResponsive();
  return (
    <Box sx={{ minHeight: "80vh" }}>
      <Box
        sx={{
          position: "relative",
          height: isMobile ? "50vh" : "100vh",
          width: "100%",
          overflow: "hidden",
          backgroundImage: `url(${Backgroundimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // border: "solid 1px",
          display: "flex",
          flexDirection: "column",
          // alignItems: 'flex-end',
          // justifyContent: 'center',
          pb: 10,
          zIndex: -1,
          // color: '#fff',
        }}
      >
        <Box
          sx={{
            width: "80%",
            display: "flex",
            position: "relative",
            flexDirection: isMobile ? "column" : "",
            top: "31%",
            left: "5%",

            color: "#000000",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h2">Contact</Typography>
          <Box
            sx={{
              width: "500px",
            }}
          >
            <Typography
              variant="body2"
              marginRight="66px"
              fontFamily="Albert Sans"
            >
              We are here to help you. Contact us using the form below, and we
              will get back to you as soon as possible.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: isMobile ? "-50%" : "-25%",
        }}
      >
        <Paper
          sx={{
            maxWidth: "90%",
            borderRadius: 3,
            overflow: "hidden",
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {/* Left: Map */}
          <Box
            sx={{
              flex: { xs: "1 1 100%", md: "0 0 40%" },
              minHeight: { xs: 300, md: 400 },
              width: "55%",
            }}
          >
            <img
              src={mapimg}
              alt="map"
              style={{
                width: "100%",
                height: "85%",
                objectFit: "cover",
                padding: "10px 5px 10px",
                marginTop: "30px",
              }}
            />
          </Box>

          {/* Right: Form */}
          <Box
            sx={{
              p: { xs: 4, md: 6 },
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              width: "45%",
            }}
          >
            <Typography variant="h4" gutterBottom>
              Request Call Back
            </Typography>

            <Box
              component="form"
              noValidate
              autoComplete="off"
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <TextField
                label="Name"
                variant="standard"
                sx={{ width: { xs: "100%", sm: "80%", md: "100%" } }}
              />

              <TextField
                label="Email ID"
                type="email"
                variant="standard"
                sx={{ width: { xs: "100%", sm: "80%", md: "100%" } }}
              />

              <FormControl
                variant="standard"
                sx={{ width: { xs: "100%", sm: "80%", md: "100%" } }}
              >
                <InputLabel>Reason</InputLabel>
                <Select defaultValue="">
                  <MenuItem value="">Select Reason</MenuItem>
                  <MenuItem value="query">General Query</MenuItem>
                  <MenuItem value="support">Support</MenuItem>
                  <MenuItem value="feedback">Feedback</MenuItem>
                </Select>
              </FormControl>

              <TextField
                multiline
                rows={2}
                placeholder="Write your query..."
                variant="standard"
                sx={{ width: { xs: "100%", sm: "80%", md: "100%" } }}
              />

              <FormControlLabel
                control={<Checkbox />}
                label="I would like to receive monthly newsletter on energy market reports."
              />

              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  mt: 1,
                  width: "70px",
                  height: "40px",
                  textTransform: "none",
                  borderRadius: 2,
                  background: "#368ADD",
                  color: "white",
                  padding: "30px 70px ",
                  fontSize: "17px",
                  marginLeft: isMobile ? "50%" : "40%",
                }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
