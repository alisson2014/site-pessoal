
import { useEffect, useState } from 'react';
import { AboutJsonContextType, AboutJsonProviderProps } from './types';
import { AboutJsonContext } from './useAboutJson';

const url = "https://gist.githubusercontent.com/alisson2014/1edbcd76bd234bc1fa1b4900bf2252eb/raw/70f66a7f3a1c5bed2915a21773e2db161e6c7cb8/about.json";

const AboutJsonProvider: React.FC<AboutJsonProviderProps> = ({ children }) => {
    const [aboutJson, setAboutJson] = useState<AboutJsonContextType | null>(null);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setAboutJson(data))
            .catch(() => setAboutJson(null));
    }, []);

    if (aboutJson === null) {
        return null;
    }

    return (
        <AboutJsonContext.Provider value={aboutJson}>
            {children}
        </AboutJsonContext.Provider>
    );
};

export default AboutJsonProvider;