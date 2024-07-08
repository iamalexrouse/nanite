export function ReturnAsJsonObject(Input: string): any {
    return JSON.parse(Input) as object;
}