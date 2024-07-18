import {describe, expect, test} from '@jest/globals';
import {GetSpecificChildFromJSON, IsValidJSON, ReturnAsJsonObject} from '../JSONTools';

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

    test("Gets a specific child from a JSON string.", () => {
        expect(GetSpecificChildFromJSON('{"name":"alex","child":"this is a child"}', "child")).toBe("this is a child");
    });
});
