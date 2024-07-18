export function ReturnAsJsonObject(Input: string): any {
    return JSON.parse(Input) as object;
}

export function IsValidJSON(Input: string): boolean {
    try {
        JSON.parse(Input);
        return true;
    } catch {
        return false;
    }
}