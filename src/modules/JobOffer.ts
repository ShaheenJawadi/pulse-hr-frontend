
import * as yup from "yup";

interface JobOffer {
    id?: number;
    title: string;
    department_id: null|number;
    location: string;
    min_experience: null|number;
    max_experience: null|number;
    tags: string;
    short_description: string;
    requirements: string;
    expire_at: string;
    status: string;
}


export const createJobOfferSchema = yup.object().shape({
    title: yup.string().required("Le titre est requis"),
    department_id: yup.number().required("Le département est requis").positive().integer(),
    location: yup.string().required("Le lieu est requis"),
    min_experience: yup.number().required("L'expérience minimale est requise").positive().integer(),
    max_experience: yup.number().required("L'expérience maximale est requise").positive().integer(),
    tags: yup.string().required("Les tags sont requis"),
    short_description: yup.string().required("La description courte est requise"),
    requirements: yup.string().required("Les exigences sont requises"),
    expire_at: yup.date(),
    status: yup.string().required("Le statut est requis").oneOf(["open", "closed"], "Le statut doit être 'active' ou 'inactive'"),
});
export const jobOfferDefaultValues: JobOffer = {
    title: "",
    department_id: null,
    location: "",
    min_experience: null,
    max_experience: null,
    tags: "",
    short_description: "",
    requirements: "",
    expire_at: "",
    status: "open"
};