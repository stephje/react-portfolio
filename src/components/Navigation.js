import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';

import Project from './Project';
import About from './About';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Box>{children}</Box>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Navigation() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <React.Fragment>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label='navigation tabs'
                    >
                        <Tab label='About' {...a11yProps(0)} />
                        <Tab label='Projects' {...a11yProps(1)} />
                    </Tabs>
                    <Box sx={{ display: 'flex', alignItems: 'center', mx: 2}}>
                        <GitHubIcon sx={{ px: 1}} onClick={() => window.open('https://github.com/stephje')}/>
                        <LinkedInIcon sx={{ px: 1}} onClick={() => window.open('https://www.linkedin.com/in/stephje/')}/>
                        <EmailIcon sx={{ px: 1}} onClick={() => window.open('mailto:s.jenkins3018@gmail.com')}/>
                        <a href='../assets/files/Resume.pdf' download><DownloadIcon sx={{ px: 1}}/></a>
                    </Box>
                </Box>
                <TabPanel value={value} index={0}>
                    <About />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Project />
                </TabPanel>
            </Box>
        </React.Fragment>
    );
}
