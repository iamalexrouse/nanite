import { IResult } from "./IResult"

/**
 * Generates a string hash, based on the given input string.
 * @param Input The string to generate a hash for.
 * @returns A hash generated from the input.
 */
export async function GenerateHash(Input: string, algorithm: AlgorithmIdentifier): Promise<IResult> {
    try {
        // Hours spent trying to remember writing this: 1
        // Yes, I know this looks like absolute dogshit, I'm fully aware. You don't have to tell me.
        // If you wish to fix this up, I'm fully open to someone fixing this.
        return { result: true, message: Array.from(new Uint8Array(await crypto.subtle.digest(algorithm, new TextEncoder().encode(Input)))).map((bytes) => bytes.toString(16).padStart(2, '0')).join('') }
    } catch (ex: any) {
        return { result: false, message: ex.message }
    }
}