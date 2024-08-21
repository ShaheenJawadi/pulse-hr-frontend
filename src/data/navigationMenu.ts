import { NavigationMenuType } from "@/types/structureTypes";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import { ReactElement } from "react";
import { SvgIconProps } from "@mui/material";
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

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
        title: 'Structure',
        icon: MapsHomeWorkIcon,
        link: '/departments',
        childs: [
            {
                title: 'Départements',
                icon: MapsHomeWorkIcon,
                link: '/departments'
            },
            {
                title: 'Postes',
                icon: MapsHomeWorkIcon,
                link: '/departments/postes'
            },
            {
                title: 'Heures de Travail ',
                icon: MapsHomeWorkIcon,
                link: '/departments/shifts'
            }
     ]
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
    },
    {
        title: 'Gestion Admin',
        icon: ManageAccountsIcon,      
         link: '/gestionAdmin',
         childs: [
                {
                    title: 'Utilisateurs',
                    icon: ManageAccountsIcon,
                    link: '/gestionAdmin/users'
                },
                {
                    title: 'Roles',
                    icon: ManageAccountsIcon,
                    link: '/gestionAdmin/roles'
                },
                {
                    title: 'Permissions',
                    icon: ManageAccountsIcon,
                    link: '/gestionAdmin/permissions'
                }
         ]
    },


]