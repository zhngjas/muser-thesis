import "./App.css";
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';

import Musing from "./Musing";
import PastMusings from "./PastMusings";
import MyRoutine from "./MyRoutine";

const theme = createTheme({
  typography: {
    fontFamily: [
      'cocogoose',
      'panel',
    ].join(','),
    h1: {
      fontFamily: 'cocogoose',
      fontSize: '45px',
      lineHeight: '52px',
      color: '#3C342E',
    },
    h2: {
      fontFamily: 'cocogoose',
      fontSize: '32px',
      lineHeight: '35px',
      color: '#3C342E',
    },
    h3: {
      fontFamily: 'cocogoose',
      fontSize: '20px',
      lineHeight: '24px',
      color: '#3C342E',
    },
    body1: {
      fontFamily: 'panel',
      fontSize: '16px',
      lineHeight: '24px',
      color: '#3C342E',
    },
    body2: {
      fontFamily: 'panel',
      fontSize: '14px',
      lineHeight: '20px',
      color: '#3C342E'
    },
    subtitle1: {
      fontFamily: 'panel',
      fontSize: '14px',
      fontWeight: '500',
      lineHeight: '20px',
      color: '#3C342E',
    },
    subtitle2: {
      fontFamily: 'panel',
      fontSize: '12px',
      fontWeight: '700',
      lineHeight: '13px',
      color: '#3C342E',
    },
    h6: {
      fontFamily: 'panel',
      fontSize: '14px',
      fontWeight: '500',
      lineHeight: '20px',
      color: '#3C342E',
    },
  },
  palette: {
    primary:{
      main: '#27A7B1'
    },
    secondary:{
      main: '#EE9D4C'
    }
  }
  // components: {
  //   MuiTab: {
      // general overrides for your material tab component here
      // styleOverrides: {
        // root: {
        //   backgroundColor: 'orange',
        // },
        // selected: {
        //   backgroundColor: 'purple',
        // },
  //     }
  //   },
  // }
});

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}


function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ width:'100%' }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ backgroundColor: '#EEEBDF', borderRadius: '25px' }}>
            <Tabs value={value} onChange={handleChange} aria-label="tabs" variant="fullWidth"
              sx={{
                "& .MuiTabs-indicator": { display: "none" },
                "& button": {fontFamily: 'panel',
                  textTransform: 'none',
                  color: '#3C342E', fontWeight: 400},
                "& button.Mui-selected": {
                  color: '#FAF9F5', 
                  backgroundColor: '#3C342E', fontWeight: 700, fontStyle: "italic",
                  borderRadius: '25px'
                },
                "& button:hover": {
                  fontWeight: 700
                }
              }}>
              {/* <Tab label={(<Typography variant="body2">Musing</Typography>)} {...a11yProps(0)} /> */}
              <Tab label="Musing" {...a11yProps(0)} />
              <Tab label="Past Musings" {...a11yProps(1)} />
              <Tab label="My Routine" {...a11yProps(2)} />
              {/* <Tab label={(<Typography variant="body2">Past Musings</Typography>)} {...a11yProps(1)} />
              <Tab label={(<Typography variant="body2">My Routine</Typography>)} {...a11yProps(2)} /> */}
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Musing />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <PastMusings />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <MyRoutine />
          </CustomTabPanel>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
