import {describe, expect, test} from '@jest/globals';
import { Base64ToJSON, JSONToBase64 } from '../index';

describe('index.js', () => {
    test('Converts plain JSON to a Base64 string, then converts it back.', () => {
        let toBase64Result;
        toBase64Result = JSONToBase64('{"OPENAI_API_KEY":"lol no"}');

        let returnTrip;
        returnTrip = Base64ToJSON(toBase64Result);

        expect(returnTrip).toBe('{"OPENAI_API_KEY":"lol no"}');
    });
});
