import '../styles/filmCard.css'
import Rating from './Rating'
import matrix from '../assets/matrix.png'
import { Link } from 'react-router-dom';

function FilmCard() {
    const Films = [
        {
            title: 'Matrix',
            description: "Programmeur anonyme dans un service administratif le jour, Thomas Anderson\
                          devient Neo la nuit venue. Sous ce pseudonyme, il est l'un des pirates les plus\
                          recherch�s du cyber- espace.� cheval entre deux mondes, Neo est assailli par d'�tranges\
                          songes et des messages crypt�s provenant d'un certain Morpheus.Celui - ci l'exhorte � aller\
                          au-del� des apparences et � trouver la r�ponse � la question qui hante\
                          constamment ses pens�es : qu'est - ce que la Matrice ? ",
            img: matrix,
            starRating: 4,
            critiques: [
                "Premier volume de la trilogie Matrix. Claque monumentale. L'un de mes films favoris.\
                 Des personnages au top, un sc�nario �poustouflant, une mise en sc�ne impeccable, de tr�s\
                 bons effets sp�ciaux vu l'�poque. Que demander de plus? Par contre il faut rester\
                 concentr� o� vous raterez quelque chose.",
                "Le film est excellent, le meilleur de la saga ! Des effets sp�ciaux hallucinant.",
                "Des id�es philosophiques cach�es sous de la science fiction et de l'action. Un film plus profond\
                 qu'il n'y parait au premier regard, avec un h�ros � la recherche de lui-m�me. Excellent choix pour\
                 Keanu Reeves qui est un acteur discret. Une bande-son parfaite, des acteurs impliqu�s. \
                 Et surtout, un sc�nario et des effets sp�ciaux innovateurs pour l'�poque. \
                 La seule d�faillance � Matrix, est peut - �tre son temps de mise en place qui peut �tre long\
                 pour les personnes qui ont d�j� vu le film.Qu'importe, Matrix restera �ternel.",
                "Je ne suis pas trop Science Fiction mais j'ai ador� Matrix. \
                 Bravo aux Washowski pour ce film, au grand nombres de r�f�rences pour la philosophie,\
                 d'une �norme originalit�, des effets sp�ciaux impressionnants pour 1999, de supers acteurs,\
                 de tr�s bons d�cors, de bonnes musiques bien adapt�es � l'ambiance du film...\
                 L'histoire est complexe et accrocheuse.On se plonge dans ce monde o� les combats sont g�niaux.\
                 Ce film ne vieillira jamais.A voir absolument.",
                "En 1999 les Wachowski nous pondaient un film qui allait durablement marquer les esprits. \
                 'Matrix' c'est un savant m�lange de science fiction et de film d'action.\
                 Avec en prime des acteurs charismatiques et convaincant dans leurs r�les.\
                 De plus, le film a tr�s bien vielli.Bref, une claque devenue culte."
            ],
            casting:
            {
                acteurs: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
                roles: ["Neo", "Morpheus", "Trinity"]
            },
        },
    ]

    return (<>
        <div className="block has-background-primary">
            <div className="box has-background-primary">
                <div className="columns is-centered">
                    <div className="column is-9">
                    {
                    Films.map((film, index) => (
                        <div key={`${film.title}`} className="card has-text-centered ">
                            <div className="card-header-title is-centered">
                                {film.title}
                            </div>
                                <div className="card-image">
                                    <figure className="image is-inline-block">
                                        <img src={film.img} className="matrix" alt="matrix" />
                                    </figure>
                            </div>
                            <div className="card-content">
                                {film.description}
                            </div>

                            <div className="card-content is-justify-content-center">
                                <Rating value={film.starRating} />
                            </div>

                            <div className="card-footer button">
                                <Link role="button" className="button is-primary is-light is-small" to="/FilmQuizz">Acc�der au Quizz</Link>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default FilmCard