type BasicRecord<T = string> = Record<string, T>;

function exists<T>(value: T | undefined | null): value is T {
    return value !== null && value !== undefined;
}
type ClassDescription =
// tslint:disable-next-line:max-line-length
    (string | null | undefined)[] | string | BasicRecord<boolean | null | undefined> | undefined | null;

function classname(...classDescriptions: ClassDescription[]): string {
    const classnames = new Set<string>();

    classDescriptions.forEach((description: ClassDescription) => {
        if (!description) {
            // no-op;
        } else if (Array.isArray(description)) {
            description
                .filter(exists)
                .forEach(name => classnames.add(name));
        } else if (typeof description === "string") {
            classnames.add(description);
        } else if (typeof description === "object") {
            Object
                .keys(description)
                .filter(name => description[name] === true)
                .forEach(name => classnames.add(name));
        }
    });

    return Array.from(classnames).join(" ");
}

export default classname;
