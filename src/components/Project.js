import * as React from 'react';
import ProjectCard from './ProjectCard';
import Box from '@mui/material/Box';

import shiftAssist from '../assets/images/projectImages/shiftassist.png';
import localDiscovery from '../assets/images/projectImages/local-discovery.png';
import workDayScheduler from '../assets/images/projectImages/work-day-scheduler.png';
import weatherDashboard from '../assets/images/projectImages/weather-dashboard.png';
import javascriptQuiz from '../assets/images/projectImages/javascript-quiz.png';

const projectArray = [
    {
        name: "ShiftAssist",
        projectImage: shiftAssist,
        description: "A helpful tool that significantly reduces the time and effort required to construct a volunteer roster.",
        projectLink: "https://shift-assist.herokuapp.com/",
        githubLink: "https://github.com/stephje/shift-assist"
    },
    {
        name: "Local Discovery",
        projectImage: localDiscovery,
        description: "A treasure-hunt style activity trail based on geolocation data.",
        projectLink: "https://local-discovery.herokuapp.com/",
        githubLink: "https://github.com/stephje/local-discovery-v2"
    },
    {
        name: "Work Day Scheduler",
        projectImage: workDayScheduler,
        description: "A simple calendar application that allows users to save events for each hour of the day.",
        projectLink: "https://stephje.github.io/work-day-scheduler/",
        githubLink: "https://github.com/stephje/work-day-scheduler"
    },
    {
        name: "Weather Dashboard",
        projectImage: weatherDashboard,
        description: "A weather dashboard that utilises the OpenWeather One Call API.",
        projectLink: "https://stephje.github.io/weather-dashboard/",
        githubLink: "https://github.com/stephje/weather-dashboard"
    },
    {
        name: "Javascript Quiz",
        projectImage: javascriptQuiz,
        description: "An interactive, timed JavaScript quiz that stores a high score leaderboard in local storage.",
        projectLink: "https://stephje.github.io/javascript-quiz/",
        githubLink: "https://github.com/stephje/javascript-quiz"
    }
]

export default function Project() {
    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', flexWrap: 'wrap'}}>
            {projectArray.map((project) => (
                <ProjectCard
                    key={project.name}
                    projectImage={project.projectImage}
                    name={project.name}
                    description={project.description}
                    projectLink={project.projectLink}
                    githubLink={project.githubLink}
                />
            ))}
            </Box>
        </React.Fragment>
    )
}