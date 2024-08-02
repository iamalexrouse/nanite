import { resolveObjectURL } from 'buffer';
import { IEncodingResult } from './IEncodingResult';

/**
 * @deprecated Base64ToJSON is no longer supported, Use 'FromBase64' instead.
 * @param Input The Base64 string to convert to Json.
 * @returns A converted Json string.
 */
export function Base64ToJSON(Input: string): string {
    return Buffer.from(Input, 'base64').toString();
}

/**
 * @deprecated JSONToBase64 is no longer supported. Use `FromJson` instead.
 * @param Input The Json string to convert to Base64.
 * @returns A converted Base64 string.
 */
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

/**
 * Converts an encoded Base64 string into a Json string.
 * @param Input The Base64 string to convert to Json.
 * @param Encoding The encoding scheme to use.
 * @returns An encoded Json string.
 */
export function FromBase64(Input: string, Encoding: BufferEncoding = 'utf-8'): IEncodingResult {
    try {
        return { result: true, message: Buffer.from(Input, 'base64').toString(Encoding) }
    } catch (error: any) {
        return { result: true, message: error.message }
    }
}

/**
 * 
 * @param Input The Json string to encode to Base64.
 * @returns Great an encoded Base64 string.
 */
export function FromJson(Input: string): IEncodingResult {
    try {
        const content = JSON.parse(Input);
        return { result: true, message: Buffer.from(JSON.stringify(content)).toString('base64') }
    } catch (ex: any) {
        return { result: false, message: ex.message }
    }
}

/**
 * 
 * @param Input The string to generate a hash for.
 * @returns A hash generated from the input.
 */
export async function GenerateHash(Input: string, algorithm: AlgorithmIdentifier): Promise<IEncodingResult> {
    try {
        // Hours spent trying to remember writing this: 1
        // Yes, I know this looks like absolute dogshit, I'm fully aware. You don't have to tell me.
        // If you wish to fix this up, I'm fully open to someone fixing this.
        return { result: true, message: Array.from(new Uint8Array(await crypto.subtle.digest(algorithm, new TextEncoder().encode(Input)))).map((bytes) => bytes.toString(16).padStart(2, '0')).join('') }
    } catch (ex: any) {
        return { result: false, message: ex.message }
    }
}