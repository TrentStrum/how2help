
export type Reviews = {
    reviewId: number;
    title: string;
    review: string;
    entityType: string;
    entityId: number;
    date: string;
    flag: string;
    verified: boolean;
    userId: number;
    avatar?: string;
}