


import * as yup from "yup";

interface Candidate {
    id?: number;
    full_name: string;
    email: string;
    phone: string;
    actual_position: string;
    linkedin_profile?: string;
    github_profile?: string;
    motivation?: string;
    birthday: string;
    resume_path?: string;
    status?: string;
    submitted_at?: string;
    last_status_change?: string;
    job_offer_id?: null | number;
}

export const candidateDefaultValues: Candidate = {
    full_name: "",
    email: "",
    phone: "",
    actual_position: "",
    linkedin_profile: "",
    github_profile: "",
    motivation: "",
    birthday: "",
    resume_path: "", 
    job_offer_id: null,
};


export const candidateSchema = yup.object().shape({
    full_name: yup.string().required("Le nom complet est requis"),
    email: yup.string().email("L'email doit être valide").required("L'email est requis"),
    phone: yup.string().required("Le numéro de téléphone est requis"),
    actual_position: yup.string().required("Le poste actuel est requis"),
    linkedin_profile: yup.string().url("Le profil LinkedIn doit être une URL valide").nullable(),
    github_profile: yup.string().url("Le profil GitHub doit être une URL valide").nullable(),
    motivation: yup.string().nullable(),
    birthday: yup.string().required("La date de naissance est requise").nullable(),
    resume_path: yup.string().url("Le chemin du CV doit être une URL valide").nullable(),
    job_offer_id: yup.number(),
});
