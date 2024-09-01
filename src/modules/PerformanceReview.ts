interface PerformanceReview {
    id?: number;
    employee_id: number;
    review_date: string;
    reviewer: string;
    objectives?: string;
    comments?: string;
    rating: number;
}
