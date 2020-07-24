import { createMuiTheme } from '@material-ui/core/styles';

const coBlue = "#3F889E";
const coPink = "#D6A4A1";
const coTeal = "#0B556B";
const coDarkPink = "#963F59";

const theme = createMuiTheme({
    palette: {
        common: {
            teal: `${coTeal}`,
            pink: `${coPink}`
        },
        primary: {
            main: `${coTeal}`
        },
        secondary: {
            main: `${coPink}`
        }
    },
    typography: {
        tab: {
            fontFamily: "Lato",
            textTransform: "none",
            fontWeight: 700,
            fontSize: "1rem"
        },
        h2: {
            fontFamily: "Oswald",
            fontWeight: 700,
            fontSize: "2rem",
            color: coTeal
        },
        h3: {
            fontFamily: "Lato",
            fontSize: "2.5rem",
            color: coTeal,
        },
        h4: {
            fontFmaily: "Oswald",
            fontSize: "1.75rem",
            fontWeight: 700,
            color: coTeal
        },
        subtitle1: {
            fontSize: "1.25rem",
            fontWeight: 300,
            color: coBlue
        },
        body1: {
            fontSize: "1.25rem",
            color: coTeal,
            fontWeight: 300
        }
    }
});