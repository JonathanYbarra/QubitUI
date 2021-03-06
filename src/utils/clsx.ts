export interface ClassDictionary {
    [id: string]: any;
}

export type ClassArray = Array<ClassValue>;

export type ClassValue =
    | ClassArray
    | ClassDictionary
    | string
    | number
    | null
    | boolean
    | undefined;

function toVal(mix: any) {
    let k,
        y,
        str = "";

    if (typeof mix === "string" || typeof mix === "number") {
        str += mix;
    } else if (typeof mix === "object") {
        if (Array.isArray(mix)) {
            for (k = 0; k < mix.length; k++) {
                if (mix[k]) {
                    if ((y = toVal(mix[k]))) {
                        str && (str += " ");
                        str += y;
                    }
                }
            }
        } else {
            for (k in mix) {
                if (mix[k]) {
                    str && (str += " ");
                    str += k;
                }
            }
        }
    }

    return str;
}

export default function (...args: ClassValue[]): string {
    let i = 0,
        tmp,
        x,
        str = "";
    while (i < args.length) {
        if ((tmp = args[i++])) {
            if ((x = toVal(tmp))) {
                str && (str += " ");
                str += x;
            }
        }
    }
    return str;
}