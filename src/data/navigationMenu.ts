import { NavigationMenuType } from "@/types/structureTypes";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import { ReactElement } from "react";
import { SvgIconProps } from "@mui/material";
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';


export const  navigationMenu:NavigationMenuType[] = [

 
    {
        title: 'Tableau de bord',
        icon: DashboardIcon,      
         link: '/dashboard',
    },
    {
        title: 'Employés',
        icon: PeopleIcon,
        link: '/employees'
    },
    {
        title: 'Départements',
        icon: MapsHomeWorkIcon,
        link: '/departments'
    },
    {
        title: 'Recrutement',
        icon: WorkIcon,
        link: '/recruitment'
    },
    {
        title: 'Performance',
        icon: QueryStatsIcon,
        link: '/performance'
    }



]