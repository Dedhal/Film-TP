import FilmCard from './filmCard';

function FilmQuizz() {
    const Datas = [
        {
            Questions: "Dans quel monde rencontre-t-on Morpheus ?",
            Reponses: "Le monde r�el",
        },
        {
            Questions: "Qu'a fait Trinity pour �tre connue ?",
            Reponses: "Elle a pirat� le syst�me du Tr�sor",
        },
        {
            Questions: "Quel est le vrai nom de N�o ?",
            Reponses: "Thomas Anderson",
        },
        {
            Questions: "Quel est le nom du vaisseau ?",
            Reponses: "Le Nebuchadnezzar",
        },
        {
            Questions: "A quelle r�flexion philosophique fait r�f�rence l'oeuvre ?",
            Reponses: "L'all�gorie de la caverne de Platon",
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