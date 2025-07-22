import { Home, About, Projects, Abilities } from 'pages';
import { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import { Infos } from './types';

const HOME = 'home';
const ABOUT = 'about';
const PROJECTS = 'projects';
const ABILITIES = 'abilities';

const url = "https://gist.githubusercontent.com/alisson2014/1edbcd76bd234bc1fa1b4900bf2252eb/raw/6b6dedd43f2afd39156352d5995fe47bae7a28cf/about.json";

const LandingPage = () => {
    const [infos, setInfos] = useState<null | Infos>(null);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setInfos(data))
            .catch(() => setInfos(null));
    }, []);

    return (
        <>
            <Element name={HOME}>
                <section id={HOME}>
                    <Home 
                        position={infos?.position ?? "Desenvolvedor"} 
                        linkedin={infos?.linkedin ?? ""} 
                    />
                </section>
            </Element>
            <Element name={ABOUT}>
                <section id={ABOUT}>
                    <About about={infos?.about ?? ""} />
                </section>
            </Element>
            <Element name={PROJECTS}>
                <section id={PROJECTS}>
                    <Projects projects={infos?.projects ?? []} />
                </section>
            </Element>
            <Element name={ABILITIES}>
                <section id={ABILITIES}>
                    <Abilities />
                </section>
            </Element>
        </>
    );
};

export default LandingPage;