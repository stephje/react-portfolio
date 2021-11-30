import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import portrait from '../assets/images/portrait.png';


export default function About() {
    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap' }}>
                <Avatar alt="Stephanie Jenkins" src={portrait} sx={{ width: 250, height: 250, pb: '24px' }} />
                <Box sx={{ maxWidth: '70%'}}>
                    <Typography variant='body1' paragraph={true}>
                        I am a Network and Systems Administrator and aspiring Full-Stack Web Developer based in Perth, Western Australia.
                    </Typography>
                    <Typography variant='body1' paragraph={true}>
                        I'm passionate about creating positive user experiences by implementing simple and intuitive designs.
                    </Typography>
                    <Typography variant='body1' paragraph={true}>
                        A background in maintaining both large-scale service provider and smaller campus networks, as well as working with a wide variety of server technologies, has led me to develop a big-picture perspective on web development.
                    </Typography>
                    <Typography variant='body1' paragraph={true}>
                        Think I could add value to your project? Reach out via any of the contact methods in the header!
                    </Typography>
                </Box>
            </Box>
        </React.Fragment>
    )
}