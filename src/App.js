import  react from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import PageRoutes from "./Routes/PageRoutes";
import { BookingProvider } from "./Context/BookingContext";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import './App.css';


const ScrollToTopOnRouteChange = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log('🔄 Route changed to:', pathname, '- Resetting all scroll positions');

    // Method 1: Reset main scroll containers immediately
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Method 2: Comprehensive scroll reset for all scrollable containers
    const resetAllScrollableElements = () => {
      const allElements = document.querySelectorAll('*');
      let resetCount = 0;

      allElements.forEach(element => {
        try {
          // Check if element is scrollable and has content
          const computedStyle = window.getComputedStyle(element);
          const hasOverflow = (
            computedStyle.overflow === 'auto' ||
            computedStyle.overflow === 'scroll' ||
            computedStyle.overflowY === 'auto' ||
            computedStyle.overflowY === 'scroll'
          );

          if (hasOverflow && element.scrollHeight > element.clientHeight + 1 && element.scrollTop > 0) {
            element.scrollTop = 0;
            resetCount++;
          }
        } catch (e) {
          // Skip elements that can't be accessed
        }
      });

      console.log(`✅ Route change: Reset ${resetCount} scrollable containers`);
    };

    // Method 3: Target specific common containers
    const resetCommonContainers = () => {
      const containers = [
        document.querySelector('#root'),
        document.querySelector('.App'),
        document.querySelector('main'),
        document.querySelector('[data-reactroot]'),
      ];

      containers.forEach(container => {
        if (container && container.scrollTop > 0) {
          container.scrollTop = 0;
        }
      });
    };

    // Execute comprehensive scroll reset
    resetAllScrollableElements();
    resetCommonContainers();

    // Method 4: Final verification after brief delay
    setTimeout(() => {
      const finalScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

      if (finalScroll > 0) {
        console.log('⚠️ Route change: Final scroll still > 0, forcing reset');
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        resetAllScrollableElements();
      }

      console.log('🎯 Route change scroll reset complete for:', pathname);
    }, 100);

  }, [pathname]);

  return null;
};

const theme = createTheme({
  palette: {
    success: {
      main: "#4BCE97",
      background: "#EDFAF5",
    },
    primary: {
      main: "#7e60bf",
      background: "#F7F8FA",
      border: "#C3C3C3"
    },
    secondary: {
      main: "#BCBCBC",
      sidemenutext: "#000000",
      background: "#FFFFFF",
      textColor: "#C3C3C3"
    },
    error: {
      main: "#FF0000",
    },
    default: {
      main: "#445371",
      background: "#44537126",
    },
  },
  typography: {
    fontFamily: ["Albert Sans", "sans-serif"].join(","),
    fontSize: 14,
    fontWeightBold: 500,
    h1: {
      fontFamily: "Albert Sans, sans-serif",
      fontWeight: 300,
      fontSize: "80px",
    },
    h2: {
      fontFamily: "Albert Sans, sans-serif",
      fontWeight: 300,
      fontSize: "48px",
    },
    h3: {
      fontFamily: "Albert Sans, sans-serif",
      fontWeight: 500,
      fontSize: "22px",
    },
    h4: {
      fontFamily: "Albert Sans, sans-serif",
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "23.12px",
      letterSpacing: "0.00735em",
    },
    h5: {
      fontFamily: "Albert Sans, sans-serif",
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "26.67px",
    },
    h6: {
      fontFamily: "Albert Sans, sans-serif",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "25.6px",
    },
    tableheading: {
      fontFamily: "Albert Sans, sans-serif",
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "25.6px",
    },
    body1: {
      fontFamily: "Albert Sans, sans-serif",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
    },
    body2: {
      fontFamily: "Albert Sans, sans-serif",
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "20px",
      letterSpacing: "0.01071em",
      color: "#000000",
    },
    button: {
      fontFamily: "Albert Sans, sans-serif",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "24.5px",
      letterSpacing: "0.02857em",
      textTransform: "none",
    },
    caption: {
      fontFamily: "Albert Sans, sans-serif",
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "19.92px",
      letterSpacing: "0.03333em",
    },
    overline: {
      fontFamily: "Albert Sans, sans-serif",
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "21.33px",
      letterSpacing: "0.08333em",
      textTransform: "uppercase",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          textTransform: "none",
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
        outlined: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          "& .MuiOutlinedInput-root": {
            borderColor: "primary.border",
            "& fieldset": {
              borderColor: "primary.border",
            },
            "&:hover fieldset": {
              borderColor: "primary.border",
            },
            "&.Mui-focused fieldset": {
              borderColor: "primary.border",
            },
          },
          "& .MuiInputBase-input": {
            fontSize: "14px",
            fontFamily: "Albert Sans, sans-serif",
            color: "primary.main",
          },
        },
      },
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BookingProvider>
        <div id="scroll-top-anchor" style={{ position: 'absolute', top: 0, left: 0, width: '1px', height: '1px', zIndex: -1 }} />
        <Box
          sx={{
            width: '100%',
            minHeight: '100vh',
            overflowX: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            p: 0,
            m: 0
          }}
        >
          <ScrollToTopOnRouteChange />
          <PageRoutes />
          <ScrollToTopButton />
        </Box>
      </BookingProvider>
    </ThemeProvider>
  );
}

export default App;
