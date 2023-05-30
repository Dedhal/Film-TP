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
                          recherchés du cyber- espace.À cheval entre deux mondes, Neo est assailli par d'étranges\
                          songes et des messages cryptés provenant d'un certain Morpheus.Celui - ci l'exhorte à aller\
                          au-delà des apparences et à trouver la réponse à la question qui hante\
                          constamment ses pensées : qu'est - ce que la Matrice ? ",
            img: matrix,
            starRating: 4,
            critiques: [
                "Premier volume de la trilogie Matrix. Claque monumentale. L'un de mes films favoris.\
                 Des personnages au top, un scénario époustouflant, une mise en scène impeccable, de très\
                 bons effets spéciaux vu l'époque. Que demander de plus? Par contre il faut rester\
                 concentré où vous raterez quelque chose.",
                "Le film est excellent, le meilleur de la saga ! Des effets spéciaux hallucinant.",
                "Des idées philosophiques cachées sous de la science fiction et de l'action. Un film plus profond\
                 qu'il n'y parait au premier regard, avec un héros à la recherche de lui-même. Excellent choix pour\
                 Keanu Reeves qui est un acteur discret. Une bande-son parfaite, des acteurs impliqués. \
                 Et surtout, un scénario et des effets spéciaux innovateurs pour l'époque. \
                 La seule défaillance à Matrix, est peut - être son temps de mise en place qui peut être long\
                 pour les personnes qui ont déjà vu le film.Qu'importe, Matrix restera éternel.",
                "Je ne suis pas trop Science Fiction mais j'ai adoré Matrix. \
                 Bravo aux Washowski pour ce film, au grand nombres de réfèrences pour la philosophie,\
                 d'une énorme originalité, des effets spéciaux impressionnants pour 1999, de supers acteurs,\
                 de très bons décors, de bonnes musiques bien adaptées à l'ambiance du film...\
                 L'histoire est complexe et accrocheuse.On se plonge dans ce monde où les combats sont géniaux.\
                 Ce film ne vieillira jamais.A voir absolument.",
                "En 1999 les Wachowski nous pondaient un film qui allait durablement marquer les esprits. \
                 'Matrix' c'est un savant mélange de science fiction et de film d'action.\
                 Avec en prime des acteurs charismatiques et convaincant dans leurs rôles.\
                 De plus, le film a très bien vielli.Bref, une claque devenue culte."
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
                                <Link role="button" className="button is-primary is-light is-small" to="/FilmQuizz">Accéder au Quizz</Link>
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