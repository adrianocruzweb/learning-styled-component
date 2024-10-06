export interface IHeader{
    autenticado?: boolean;
    page?: string;
    handleNavigate?: () => void;
    children?: string;
}
