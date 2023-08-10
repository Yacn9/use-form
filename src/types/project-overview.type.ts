interface IStructure {
    name: string;
    description: string;
    class: "tsx" | "folder" | "json" | "";
    type: "directory" | "file";
    children?: IStructure[];
}

export type { IStructure }