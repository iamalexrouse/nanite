import { describe, expect, test } from '@jest/globals';
import { Base64ToJSON, JSONToBase64, FromBase64, FromJson } from '../index';

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
});
