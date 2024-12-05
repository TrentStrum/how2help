export type ReactionType = 'like' | 'heart' | 'laugh' | 'clap';

export type Reaction = {
	id: string; // UUID
	eventId: string; // UUID, foreign key
	userId: string; // UUID, foreign key
	reactionType: ReactionType;
	createdAt: string;
	updatedAt: string;
};

// Optional: If you need to enforce uniqueness in your application logic
export type UniqueReactionKey = Pick<Reaction, 'eventId' | 'userId'>;
