// This file contains tests relating to string-based utilities.
// If you create a new feature, please make sure your create
// the nessasary tests to ensure we don't upload bad pacakges.

import { GenerateHash } from "../StringUtils";

describe("Nanite | Tests | String Utilities", () => {
    test('Generates a SHA-256 hash based on the given input.', async () => {
        // I'm lovin' it.
        expect((await GenerateHash("wow, that's really cool.", 'SHA-256')).message).toBe('601e202ad8e2af59fec84dc06c16b13365a1d36a5ae505fe33c89c3ddd6520c7');
    });
});