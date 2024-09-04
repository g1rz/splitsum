import { ProductId } from '~/entities/products/model/types';

export type UserId = Brand<Id, 'UserId'>;

export type User = {
    id: UserId;
    name: string;
    count: number;
    expenses: number;
    productIDs?: ProductId[];
};
