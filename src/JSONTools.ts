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

export function GetSpecificChildFromJSON(Input: string, Target: string): any | undefined {
    if (!IsValidJSON(Input))
        return undefined;

    if (!Target || Target === "") {
        return undefined;
    }

    const JsonObject = ReturnAsJsonObject(Input);
    
    if (JsonObject[Target])
        return JsonObject[Target];
    else
        return undefined;
}