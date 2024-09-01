
import * as yup from "yup";
import { Candidate } from "./Candidate";

export interface JobOffer {
    id?: number;
    title: string;
    department_id: null|number;
    location: string;
    min_experience: null|number;
    max_experience: null|number;
    tags: string[];
    short_description: string;
    contract_type_id: number | null;
    requirements: string;
    expire_at: string;
    status: string;

    intervalle?: boolean;

    candidates?: Candidate[];
}


export const createJobOfferSchema = yup.object().shape({
    title: yup.string().required("Le titre est requis"),
    department_id: yup.number().required("Le département est requis").positive().integer(),
   
    contract_type_id: yup.number().positive().integer(),
    location: yup.string().required("Le lieu est requis"),
    min_experience: yup.number().required("L'expérience minimale est requise").positive().integer(),
 
    max_experience: yup
    .number()
    .nullable()
    .positive()
    .integer()
    .when("intervalle", {
      is: true,
      then: (schema) => schema.required("L'expérience maximale est requise"),
    }),
    tags: yup.array().of(yup.string()),
    short_description: yup.string().required("La description courte est requise"),
    requirements: yup.string().required("Les exigences sont requises"),
    expire_at: yup.string(),
    status: yup.string().required("Le statut est requis").oneOf(["open", "closed"], "Le statut doit être 'active' ou 'inactive'"),
});
export const jobOfferDefaultValues: JobOffer = {
    title: "",
    department_id: null,
    location: "",
    min_experience: null,
    max_experience: null,
    contract_type_id: null,
    tags: [],
    short_description: "",
    requirements: "",
    expire_at: "",
    status: "open",
    intervalle: false,
};