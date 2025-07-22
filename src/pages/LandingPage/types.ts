export interface Project {
    id: number,
    name: string,
    description: string,
    deployLink: string,
    repository: string,
    image: {
        title: string,
        url: string
    }
};

export interface Infos {
    name: string;
    lastName: string;
    age: number;
    about: string;
    position: string;
    linkedin: string;
    projects: Project[];
};