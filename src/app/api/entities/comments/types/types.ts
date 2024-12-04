export type BaseEntity = {
	id: string;
	createdAt: string;
	updatedAt: string;
};

export type Comment = BaseEntity & {
	content: string;
	userId: string;
	eventId: string;
};

export type EventComment = Pick<Comment, keyof BaseEntity | 'eventId'> & {
	commentId: string;
};

export type UserComment = Pick<Comment, keyof BaseEntity | 'userId'> & {
	commentId: string;
};
