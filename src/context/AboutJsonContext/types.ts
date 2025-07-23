import { ReactNode } from 'react';

export interface AboutJsonProviderProps {
    children: ReactNode;
};

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

export interface AboutJsonContextType {
    name: string;
    lastName: string;
    age: number;
    about: string;
    position: string;
    linkedin: string;
    projects: Project[];
};