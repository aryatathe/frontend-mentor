import { autocompleteClasses } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import bg from "./images/pattern-bg.png";

const globalTheme = () => {
  const sm = useMediaQuery("(min-width:600px)");
  const md = useMediaQuery("(min-width:900px)");
  const xl = useMediaQuery("(min-width:1610px)");
  return {
    typography: {
      fontFamily: "Rubik",
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 500,
      fontWeightBold: 700,
      h1: {
        margin: "auto",
        color: "white",
        fontSize: sm ? 30 : 24,
        lineHeight: 1,
      },
      h2: {
        color: "hsl(0, 0%, 59%)",
        fontSize: md ? 10 : 8,
      },
      body1: {
        color: "hsl(0, 0%, 19%)",
        fontSize: md ? 24 : 18,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: "#285943",
            backgroundImage: `url(${bg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
            backgroundSize: xl ? "100% auto" : "auto 280px",
          },
        },
      },
    },
  };
};

export default globalTheme;
