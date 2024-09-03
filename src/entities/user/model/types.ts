export type UserId = Brand<Id, 'UserId'>;

export type User = {
    id: UserId;
    name: string;
    count: number;
};
