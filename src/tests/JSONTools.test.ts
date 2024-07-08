import {describe, expect, test} from '@jest/globals';
import {ReturnAsJsonObject} from '../JSONTools';

describe('JSONTools.js', () => {
    test("Parse's a JSON string and extracts the 'name' object.", () => {
        const nameResult = ReturnAsJsonObject('{"name":"alex"}');
        expect(nameResult['name']).toBe('alex');
    });
});
