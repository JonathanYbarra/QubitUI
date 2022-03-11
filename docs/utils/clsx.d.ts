export interface ClassDictionary {
    [id: string]: any;
}
export declare type ClassArray = Array<ClassValue>;
export declare type ClassValue = ClassArray | ClassDictionary | string | number | null | boolean | undefined;
export default function (...args: ClassValue[]): string;
