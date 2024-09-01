interface JobOffer {
    id?: number;
    title: string;
    department_id: number;
    location: string;
    min_experience: number;
    max_experience: number;
    tags: string;
    short_description: string;
    requirements: string;
    expire_at: string;
    status: string;
}
