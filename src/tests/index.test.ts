import { describe, expect, test } from '@jest/globals';
import { Base64ToJSON, JSONToBase64, FromBase64, FromJson, GenerateHash } from '../index';

describe('index.js', () => {
    test('Converts plain JSON to a Base64 string, then converts it back.', () => {
        let toBase64Result;
        toBase64Result = JSONToBase64('{"OPENAI_API_KEY":"lol no"}');

        let returnTrip;
        returnTrip = Base64ToJSON(toBase64Result);

        expect(returnTrip).toBe('{"OPENAI_API_KEY":"lol no"}');
    });

    test('Converts UTF-8 encoded JSON string into a Base64 string.', () => {
        expect(FromBase64(FromJson('{"OPENAI_API_KEY":"lol no"}').message, 'utf-8').message).toBe('{"OPENAI_API_KEY":"lol no"}');
    });

    test('Simulates a malformed JSON being encoded to Base64 and back.', () => {
        expect(FromBase64(FromJson('{"OPENAI_API_KEY":lol no}').message, 'utf-8')).not.toBe('{"OPENAI_API_KEY":"lol no"}');
    });

    test('Generates a SHA-256 hash based on the given input.', async () => {
        // I'm lovin' it.
        expect((await GenerateHash("wow, that's really cool.", 'SHA-256')).message).toBe('601e202ad8e2af59fec84dc06c16b13365a1d36a5ae505fe33c89c3ddd6520c7');
    });
});
