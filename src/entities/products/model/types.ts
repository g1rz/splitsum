export type ProductId = Brand<Id, 'ProductId'>;

export type Product = {
    id: ProductId;
    name: string;
    cost?: number;
};
