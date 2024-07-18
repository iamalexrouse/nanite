import {describe, expect, test} from '@jest/globals';
import {IsValidJSON, ReturnAsJsonObject} from '../JSONTools';

describe('JSONTools.js', () => {
    test("Parse's a JSON string and extracts the 'name' object.", () => {
        const nameResult = ReturnAsJsonObject('{"name":"alex"}');
        expect(nameResult['name']).toBe('alex');
    });
    
    test("Checks if the given string is valid JSON. This should return true.", () => {
        expect(IsValidJSON('{"name":"alex"}')).toBe(true);
    });

    test("Checks if the given string is valid JSON. This should return false.", () => {
        expect(IsValidJSON('This is not valid JSON.')).toBe(false);
    });
});
