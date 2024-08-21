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
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SettingsIcon from '@mui/icons-material/Settings';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import ReviewsIcon from '@mui/icons-material/Reviews';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';


export const navigationMenu: NavigationMenuType[] = [


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
                link: ROUTING.STRUCTURE.JOB_TITLE
            },
            {
                title: 'Heures de Travail',
                icon: MapsHomeWorkIcon,
                link: ROUTING.STRUCTURE.SHIFTS
            }
        ]
    },
   
  

    /* /////////// */

    {
        title: 'Présence',
        icon: PendingActionsIcon,
        link: "next features"
    },
    {
        title: 'Congés',
        icon: EventRepeatIcon,
        link: "next features"
    }, 
    {
        title: 'Performance',
        icon: InsertChartIcon,
        link: ROUTING.PERFORMACE.MAIN
    },
    {
        title: 'Récompenses',
        icon: EmojiEventsIcon,
        link: "next features"
    },
    {
        title: 'Recrutement',
        icon: WorkIcon,
        link: ROUTING.RECRUTEMENT.MAIN
    }
    ,
    {
        title: 'Rapports et analyses',
        icon: TroubleshootIcon,
        link: "next features"
    },
   
    {
        title: 'Gestion Admin',
        icon: ManageAccountsIcon,
        link: ROUTING.ADMIN_MAANGMENT.MAIN,
        childs: [
            {
                title: 'Personnel',
                icon: ManageAccountsIcon,
                link: ROUTING.ADMIN_MAANGMENT.USERS
            },
            {
                title: 'Roles',
                icon: ManageAccountsIcon,
                link: ROUTING.ADMIN_MAANGMENT.ROLES
            },
            {
                title: 'Permissions',
                icon: ManageAccountsIcon,
                link: ROUTING.ADMIN_MAANGMENT.PERMISSIONS
            }
        ]
    },

    {
        title: 'Support',
        icon: SupportAgentIcon,
        link: "next features"
    },
    {
        title: 'Paramètres',
        icon: SettingsIcon,
        link: "next features"
    }
    
   
]