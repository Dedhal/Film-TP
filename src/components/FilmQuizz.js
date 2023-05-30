import FilmCard from './filmCard';
import { Link } from 'react-router-dom';

import Collapsible from 'react-collapsible';

function FilmQuizz() {
    const Datas = [
        {
            Questions: "Dans quel monde rencontre-t-on Morpheus ?",
            Reponses: "Le monde r\u00e9el",
        },
        {
            Questions: "Qu'a fait Trinity pour \u00eatre connue?",
            Reponses: "Elle a pirat\u00e9 le syst\u00e8me du Tr\u00e9sor",
        },
        {
            Questions: "Quel est le vrai nom de N\u00e9o ?",
            Reponses: "Thomas Anderson",
        },
        {
            Questions: "Quel est le nom du vaisseau ?",
            Reponses: "Le Nebuchadnezzar",
        },
        {
            Questions: "A quelle r\u00e9flexion philosophique fait r\u00e9f\u00e9rence l'oeuvre ?",
            Reponses: "L'all\u00e9gorie de la caverne de Platon",
        },
    ]

    return (
        <>
            <div>
                <FilmCard />
            </div>
            <div className="block has-background-primary">
                <div className="box has-background-primary">
                    <div className="columns is-centered">
                        <div className="column is-9">
                            {
                                Datas.map((question, index) => (
                                    <div className="block has-background-primary">
                                        <div key={`${question.Questions}`} className="card">
                                            <Collapsible trigger={index + 1 + ". " + question.Questions} className="card-content">
                                                {
                                                    //je n'ai pas trouvé comment le rendre plus joli, mais au moins ça fonctionne
                                                }
                                                {question.Reponses}
                                            </Collapsible>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FilmQuizz;