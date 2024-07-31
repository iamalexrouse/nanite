import { IEncodingResult } from './IEncodingResult';

export function Base64ToJSON(Input: string): string {
    return Buffer.from(Input, 'base64').toString();
}

export function JSONToBase64(Input: string): string {
    try {
        const content = JSON.parse(Input);
        return Buffer.from(JSON.stringify(content)).toString('base64');
    } catch (e) {
        throw e;
    }
}

// !! DO NOT USE JUST YET !!
// I need to finish rewriting some methods then the transition will happen.

export function FromBase64(Input: string, Encoding: BufferEncoding = 'utf8'): string {
    return Buffer.from(Input, 'base64').toString(Encoding);
}

export function FromJson(Input: string): IEncodingResult {
    try {
        const content = JSON.parse(Input);
        return { result: true, message: Buffer.from(JSON.stringify(content)).toString('base64') }
    } catch (ex: Error) {
        return { result: false, message: ex.message }
    }
}
