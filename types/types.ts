
export interface Product {
    id: string;
    category: string;
    name: string;
    price: number;
    form_factor: string;
    color: string;
    image_path: string;
    images: [];
}
export interface ProfileData {
    first_name: string;
    last_name: string;
    patronymic: string;
    address: string;
}