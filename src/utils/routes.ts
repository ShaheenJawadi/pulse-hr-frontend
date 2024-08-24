export const ROUTING = {
  DASHBOARD: {
    MAIN: "/dashboard",
  },
  EMPLOYEE: {
    MAIN: "/employees",
  },
  STRUCTURE: {
    MAIN: "/structure",

    DEPARTMENTS: "/structure/departments",
    JOB_TITLE: "/structure/job_title",
    SHIFTS: "/structure/shifts",

  },

  RECRUTEMENT: {
    MAIN: "/recruitment",
  },
  PERFORMACE: {
    MAIN: "/performance",
  },
  ADMIN_MAANGMENT: {
    MAIN: "/gestionAdmin",

    USERS: "/gestionAdmin/users",
    ROLES: "/gestionAdmin/roles",
    PERMISSIONS: "/gestionAdmin/permissions",

  },

  AUTH: {
    MAIN: "/auth",
    LOGIN: "/auth/login",
    RESETPWS: "/auth/reset_pws",
    FORGOTPWS: "/auth/forgot_pws",


  },

  PUBLIC: {

    JOBLISTING:     {

      MAIN: "/recrutement",
      SINGLEJOB: "/recrutement/slug", 
    }


  },



};
