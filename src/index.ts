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