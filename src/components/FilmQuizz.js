import FilmCard from './filmCard';

function FilmQuizz() {
    const Datas = [
        {
            Questions: "Dans quel monde rencontre-t-on Morpheus ?",
            Reponses: "Le monde réel",
        },
        {
            Questions: "Qu'a fait Trinity pour être connue ?",
            Reponses: "Elle a piraté le système du Trésor",
        },
        {
            Questions: "Quel est le vrai nom de Néo ?",
            Reponses: "Thomas Anderson",
        },
        {
            Questions: "Quel est le nom du vaisseau ?",
            Reponses: "Le Nebuchadnezzar",
        },
        {
            Questions: "A quelle réflexion philosophique fait référence l'oeuvre ?",
            Reponses: "L'allégorie de la caverne de Platon",
        },
    ]

    return (
        <>
            <div>
                <FilmCard />
            </div>
            <div className="block has-background-primary">
                <div className="box has-background-primary">
                    <div className="columns">
                        <div className="column is-9">
                            {
                                Datas.map((question, index) => (
                                        <div key={`${question.Questions}`} className="card">
                                            <div className="card-header-title">
                                                {index + 1}. {question.Questions}
                                            </div>
                                            <div className="card-content">
                                                
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