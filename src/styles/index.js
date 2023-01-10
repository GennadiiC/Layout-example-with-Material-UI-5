import { createTheme } from '@mui/material'

export const Colors = {
  primary: "#00adb5",
  secondary: "#00c7c0",
  success: "#4caf50",
  info: "#00d5ff",
  danger: "#FF5722",
  warning: "#FFC107",
  dark: "#22414d",
  light: "#aaa",
  muted: "#abafb3",
  border: "#DDDFE1",
  inverse: "#2F3D4A",
  shaft: "#333",
  dove_gray: "#d5d5d5",
  body_bg: "#f3f6f9",
  white: "#fff",
  black: "#000",
};

// TODO: define overrides object to create theme
const overrides = { 
  dark: Colors.dark,
  bodyBG: Colors.body_bg,
  white: Colors.white,
  shaft: Colors.shaft,
  light: Colors.light,
  palette: {
    neutral: {
      main: Colors.white
    },
    primary: {
      main: Colors.muted
    },
    secondary: {
      main: Colors.primary,
    },
    light: {
      main: Colors.light
    }
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: Colors.dark
        }
      }
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          color: Colors.light
        }
      }
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: Colors.dark, 
          color: Colors.light
        }
      }
    }
  }
};

// TODO: use overrides object to create theme
const theme = createTheme(overrides);

export { overrides };
export default theme;
