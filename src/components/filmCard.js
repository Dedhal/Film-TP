import '../styles/filmCard.css'
import Rating from './Rating'
import matrix from '../assets/matrix.png'
import { Link } from 'react-router-dom';

import Collapsible from 'react-collapsible';

function FilmCard() {
    const Films = [
        {
            title: 'Matrix',
            description: "Programmeur anonyme dans un service administratif le jour, Thomas Anderson\
                          devient N\u00e9o la nuit venue. Sous ce pseudonyme, il est l'un des pirates les plus\
                          recherch\u00e9s du cyber-espace. \u00c0 cheval entre deux mondes, N\u00e9o est assailli par d'\u00e9tranges\
                          songes et des messages crypt\u00e9s provenant d'un certain Morpheus.Celui - ci l'exhorte \u00e0 aller\
                          au-del\u00e0 des apparences et \u00e0 trouver la r\u00e9ponse \u00e0 la question qui hante\
                          constamment ses pens\u00e9es : qu'est - ce que la Matrice ? ",
            img: matrix,
            starRating: 4,
            critiques: [
                "Premier volume de la trilogie Matrix. Claque monumentale. L'un de mes films favoris.\
                 Des personnages au top, un sc\u00e9nario \u00e9poustouflant, une mise en sc\u00e8ne impeccable, de tr\u00e8s\
                 bons effets sp\u00e9ciaux vu l'\u00e9poque. Que demander de plus? Par contre il faut rester\
                 concentr\u00e9 o&ugrave; vous raterez quelque chose.",
                "Le film est excellent, le meilleur de la saga ! Des effets sp\u00e9ciaux hallucinant.",
                "Des id\u00e9es philosophiques cach\u00e9es sous de la science fiction et de l'action. Un film plus profond\
                 qu'il n'y parait au premier regard, avec un h\u00e9ros \u00e0 la recherche de lui-m\u00eame. Excellent choix pour\
                 Keanu Reeves qui est un acteur discret. Une bande-son parfaite, des acteurs impliqu\u00e9s. \
                 Et surtout, un sc\u00e9nario et des effets sp\u00e9ciaux innovateurs pour l'\u00e9poque. \
                 La seule d\u00e9faillance \u00e0 Matrix, est peut - \u00eatre son temps de mise en place qui peut \u00eatre long\
                 pour les personnes qui ont d\u00e9j\u00e0 vu le film.Qu'importe, Matrix restera \u00e9ternel.",
                "Je ne suis pas trop Science Fiction mais j'ai ador\u00e9 Matrix. \
                 Bravo aux Washowski pour ce film, au grand nombres de r\u00e9f\u00e8rences pour la philosophie,\
                 d'une \u00e9norme originalit\u00e9, des effets sp\u00e9ciaux impressionnants pour 1999, de supers acteurs,\
                 de tr\u00e8s bons d&eacutecors, de bonnes musiques bien adapt\u00e9es \u00e0 l'ambiance du film...\
                 L'histoire est complexe et accrocheuse. On se plonge dans ce monde o&ugrave; les combats sont g\u00e9niaux.\
                 Ce film ne vieillira jamais.A voir absolument.",
                "En 1999 les Wachowski nous pondaient un film qui allait durablement marquer les esprits. \
                 'Matrix' c'est un savant m\u00e8lange de science fiction et de film d'action.\
                 Avec en prime des acteurs charismatiques et convaincant dans leurs r&ocirc;les.\
                 De plus, le film a tr\u00e8s bien vielli. Bref, une claque devenue culte."
            ],
            casting:
            {
                acteurs: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
                roles: ["N\u00e9o", "Morpheus", "Trinity"]
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

                            <Collapsible trigger="D&eacute;tails">
                                {
                                //je n'ai pas trouvé comment le rendre plus joli, mais au moins ça fonctionne
                                }
                                <div className="card-content">
                                    {film.casting.acteurs.map((acteur, index) => (
                                        <div key={`${index}`} className="card-content">
                                            {acteur} : {film.casting.roles[index]}
                                        </div>
                                    ))}
                                </div>
                                
                                <div className="card-content">
                                    {film.critiques.map((critique, index) => (
                                        <>
                                            <div key={`${index}`} className="card-header">
                                                Critique {index + 1}:
                                            </div>
                                            <div className="card-content">
                                                {critique}
                                            </div>
                                        </>
                                    ))}
                                </div>
                            </Collapsible>

                            <div className="card-footer button">
                                <Link role="button" className="button is-primary is-light is-small" to="/FilmQuizz">Acc&eacute;der au Quizz</Link>
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