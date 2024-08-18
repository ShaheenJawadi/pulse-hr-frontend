export interface Candidate {
    id?: number;
    job_offer_id: number;
    resume_path?: string;
    status?: 'applied' | 'interviewed' | 'hired' | 'rejected';
    submitted_at?: string;
    last_status_change?: string | null;
    created_at?: string;
    updated_at?: string;
}
