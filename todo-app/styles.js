import useMediaQuery from '@mui/material/useMediaQuery';

import lightDesktop from "./images/bg-desktop-light.jpg";
import lightMobile from "./images/bg-mobile-light.jpg";
import darkDesktop from "./images/bg-desktop-dark.jpg";
import darkMobile from "./images/bg-mobile-dark.jpg";

export const globalTheme = (palette) => {
  const sm = useMediaQuery('(min-width:600px)');
  const lg = useMediaQuery('(min-width:1440px)');
  return ({
    palette: palette,
    typography: {
      fontFamily: "Josefin Sans",
      fontWeightRegular: 400,
      fontWeightBold: 700,
      h1: {
        fontSize: sm?40:26,
        lineHeight: 1
      },
      body1: {
        fontSize: sm?18:12
      },
      body2: {
        color: palette.faintText,
        fontSize: sm?14:12
      },
      body3: {
        color: palette.faintText,
        fontSize: sm ? 14 : 12,
        textAlign: "center",
        marginTop: sm ? 50 : 105,
        marginBottom: 20
      }
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: palette.background,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
            transition: "all 0.25s ease",
            ...(sm
              ? {
                  backgroundImage: `url(${palette.bgDesktop})`,
                  backgroundSize: lg ? "100% auto" : "auto 300px"
                }
              : {
                  backgroundImage: `url(${palette.bgMobile})`,
                  backgroundSize: "contain"
                }
            ),
          }
        }
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            padding: "0 25px"
					}
				}
			},
      MuiStack: {
        variants: [
          {
            props: { variant: "main" },
            style: {
              width: sm?540:"auto",
              margin: "0 auto"
            }
          },
          {
            props: { variant: 'header' },
            style: {
              margin: sm?"75px 0 50px 0":"45px 0 35px 0",
              color: "#ffffff"
            }
          },
          {
            props: { variant: 'footer' },
            style: {
              height: 50,
              padding: sm ? "0 15px 0 25px" : "0 10px 0 20px",
              "& .MuiTypography-root": {
                margin: "auto 0"
							}
            }
          },
          {
            props: { variant: 'filters' },
            style: {
              ...(sm ? {} : {
                position: "absolute",
                bottom: -65,
                left: 0,
                width: "100%",
                height: 50,
                borderRadius: 5,
                backgroundColor: palette.list,
                boxShadow: "0 0 20px 0 #00000022",
							})
            }
          }
        ]
      },
      MuiIconButton: {
        variants: [
          {
            props: { variant: "modeSwitch" },
            style: {
              "& img": {
                height: "100%",
              }
						}
          },
          {
            props: { variant: "uncheck" },
            style: {
              height: sm?25:20,
              width: sm?25:20,
              margin: sm?"0 17px 0 25px":"0 13px 0 10px",
              background: palette.faintText,
              padding: 1,
              "&:hover": {
                background: "linear-gradient(135deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))"
							}
            }
          },
          {
            props: { variant: "check" },
            style: {
              height: sm?25:20,
              width: sm?25:20,
              margin: sm ? "0 17px 0 25px" : "0 13px 0 10px",
              background: "linear-gradient(135deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
              padding: 1
            }
          },
          {
            props: { variant: "cross" },
            style: {
              visibility: sm?"hidden":"visible",
              height: sm?36:33,
              width: sm ? 36 : 33,
              "& img": {
                height: sm?20:14,
              }
            }
          }
        ]
      },
      MuiIcon: {
        variants: [
          {
            props: { variant: "uncheck" },
            style: {
              height: sm ? 23 : 18,
              width: sm ? 23 : 18,
              backgroundColor: palette.list,
              borderRadius: "50%",
              "& img": {
                display: "none"
							}
						}
          },
          {
            props: { variant: "check" },
            style: {
              height: sm ? 23 : 18,
              width: sm ? 23 : 18,
              "& img": {
                width: "50%",
                marginBottom: sm?5:8
							}
            }
          }
        ]
			},
      MuiButton: {
        styleOverrides: {
          root: {
            minWidth: 0,
            padding: "0 10px",
            textTransform: "none",
            color: palette.faintText,
            fontSize: 14,
            fontWeight: 700,
            "&:hover": {
              backgroundColor: "transparent",
              color: palette.hoverText
            }
					}
				},
        variants: [
          {
            props: { variant: 'active' },
            style: {
              color: palette.activeText
            }
          },
          {
            props: { variant: 'inactive' },
            style: {
              fontWeight: 400,
              fontSize: sm?14:12
            }
          }
        ]
      },
      MuiInput: {
        styleOverrides: {
          root: {
            height: sm?65:50,
            fontSize: sm?18:12,
            marginBottom: sm?25:15,
            borderRadius: 5,
            boxShadow: "0 0 20px 0 #00000022",
            backgroundColor: palette.list,
            color: palette.listText,
            "& .MuiInputAdornment-root": {
              margin: 0
            },
            "& .MuiIconButton-root:hover": {
              background: palette.faintText,
              cursor: "default"
            },
            "& .MuiInput-input": {
              padding: "5px 0 0 0",
						}
					}
				}
			},
      MuiList: {
        styleOverrides: {
          root: {
            padding: 0,
            borderRadius: 5,
            boxShadow: "0 0 20px 0 #00000022",
            backgroundColor: palette.list,
            color: palette.listText,
          }
        }
      },
      MuiListItem: {
        styleOverrides: {
          root: {
            minHeight: sm?65:50,
            padding: "0 17px 0 0",
            borderBottom: `solid 1px ${palette.faintText}`,
            "&:hover .MuiIconButton-root:nth-of-type(2)": {
              visibility: "visible"
						}
          }
        }
      },
      MuiListItemText: {
        styleOverrides: {
          root: {
            wordBreak: "break-all"
					}
				},
        variants: [
          {
            props: { variant: "check" },
            style: {
              color: palette.faintText,
              textDecoration: "line-through"
						}
					}
        ]
			}
    }
  })
};

export const lightPalette = {
  mode: "light",
  bgDesktop: lightDesktop,
  bgMobile: lightMobile,
  background: "hsl(0, 0%, 98%)",
  list: "hsl(0, 0%, 100%)",
  listText: "hsl(235, 19%, 35%)",
  faintText: "hsl(233, 11%, 84%)",
  hoverText: "hsl(235, 19%, 35%)",
  activeText: "hsl(220, 98%, 61%)"
};

export const darkPalette = {
  mode: "dark",
  bgDesktop: darkDesktop,
  bgMobile: darkMobile,
  background: "hsl(235, 21%, 11%)",
  list: "hsl(235, 24%, 19%)",
  listText: "hsl(234, 39%, 85%)",
  faintText: "hsl(234, 11%, 52%)",
  hoverText: "hsl(236, 33%, 92%)",
  activeText: "hsl(220, 98%, 61%)"
};