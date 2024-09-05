import { NavigationMenuType } from "@/types/structureTypes";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { ROUTING } from "@/utils/routes";
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import SupportIcon from '@mui/icons-material/Support';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import SpeedIcon from '@mui/icons-material/Speed';

export const employeeNavigationMenu: NavigationMenuType[] = [


    {
        title: 'Tableau de bord',
        icon: DashboardIcon,
        link: ROUTING.DASHBOARD.MAIN,
    },
 

         
    {
        title: 'Projets',
        icon: AccountTreeIcon,
        link: "next features"
    },
   
 


    {
        title: 'Performance',
        icon: SpeedIcon,
        link: ROUTING.PERFORMACE.MAIN
    },
    {
        title: 'Gestion des congés',
        icon: EventRepeatIcon,
        link: ROUTING.LEAVE.MAIN
    },
    {
        title: " Présence & Suivi d'horaires",
        icon: PendingActionsIcon,
        link: "next features"
    },
     
    {
        title: 'Ressources & Support',
        icon: SupportIcon,
        link: ROUTING.STRUCTURE.MAIN,
        childs: [
            {
                title: 'Aide & Support',
                icon: SupportIcon,
                link: ROUTING.STRUCTURE.DEPARTMENTS
            },
            {
                title: 'Annuaire ',
                icon: SupportIcon,
                link: ROUTING.STRUCTURE.JOB_TITLE
            },
            {
                title: 'Documents & Ressources',
                icon: SupportIcon,
                link: ROUTING.STRUCTURE.SHIFTS
            }
        ]
    },
   
  

    /* /////////// */

   
    


 
    
   
]