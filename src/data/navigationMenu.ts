import { NavigationMenuType } from "@/types/structureTypes";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import { ReactElement } from "react";
import { SvgIconProps } from "@mui/material";
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { ROUTING } from "@/utils/routes";

export const  navigationMenu:NavigationMenuType[] = [

 
    {
        title: 'Tableau de bord',
        icon: DashboardIcon,      
         link: ROUTING.DASHBOARD.MAIN,
    },
    {
        title: 'Employés',
        icon: PeopleIcon,
        link: ROUTING.EMPLOYEE.MAIN
    },
    {
        title: 'Structure',
        icon: MapsHomeWorkIcon,
        link: ROUTING.STRUCTURE.MAIN,
        childs: [
            {
                title: 'Départements',
                icon: MapsHomeWorkIcon,
                link: ROUTING.STRUCTURE.DEPARTMENTS
            },
            {
                title: 'Postes',
                icon: MapsHomeWorkIcon,
                link:ROUTING.STRUCTURE.POSTES
            },
            {
                title: 'Heures de Travail ',
                icon: MapsHomeWorkIcon,
                link:ROUTING.STRUCTURE.SHIFTS
            }
     ]
    },
    {
        title: 'Recrutement',
        icon: WorkIcon,
        link: ROUTING.RECRUTEMENT.MAIN
    },
    {
        title: 'Performance',
        icon: QueryStatsIcon,
        link: ROUTING.PERFORMACE.MAIN
    },
    {
        title: 'Gestion Admin',
        icon: ManageAccountsIcon,      
         link:ROUTING.ADMIN_MAANGMENT.MAIN,
         childs: [
                {
                    title: 'Utilisateurs',
                    icon: ManageAccountsIcon,
                    link:ROUTING.ADMIN_MAANGMENT.USERS
                },
                {
                    title: 'Roles',
                    icon: ManageAccountsIcon,
                    link:ROUTING.ADMIN_MAANGMENT.ROLES
                },
                {
                    title: 'Permissions',
                    icon: ManageAccountsIcon,
                    link:ROUTING.ADMIN_MAANGMENT.PERMISSIONS
                }
         ]
    },


]