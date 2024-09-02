export const ROUTING = {
  DASHBOARD: {
    MAIN: "/dashboard",
  },
  EMPLOYEE: {
    MAIN: "/employees",
    ADD: "/employees/add",

  },
  STRUCTURE: {
    MAIN: "/structure",

    DEPARTMENTS: "/structure/departments",
    JOB_TITLE: "/structure/job_title",
    SHIFTS: "/structure/shifts",

  },

  RECRUTEMENT: {
    MAIN: "/recruitment",
    ADDJOB: "/recruitment/add",
    APPLICATIONS: (id: string) => `/recruitment/applications/${id}`,

  },
  PERFORMACE: {
    MAIN: "/performance",
  },

  LEAVE: {
    MAIN: "/leave",


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

    JOBLISTING: {

      MAIN: "/jobs",
      SINGLEJOB: (slug: string) => `/jobs/${slug}`,
    }


  },


  UTILITIES: {

    KANBAN: "/tools/kanban",
    NOTEBOOK: "/tools/notebook",




  },



};
