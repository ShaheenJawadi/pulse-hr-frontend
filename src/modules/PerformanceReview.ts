export interface PerformanceReview {
    id?: number;
    employee_id: number;
    review_date: string;
    objectives: string;
    comments: string;
    rating: number;
    created_at?: string;
    updated_at?: string;
}
