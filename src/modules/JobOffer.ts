export interface JobOffer {
    id?: number;
    title: string;
    description: string;
    requirements: string;
    posting_date: string;
    status: 'open' | 'closed';
    created_at?: string;
    updated_at?: string;
}
