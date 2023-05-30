import '../styles/UserCard.css'
import Rating from './Rating'

function UserCard() {
    const Users = ['Thomas', 'Maxime', 'Kim', 'Romain', 'Laetitia']
    const Connaissance = [false, true, false, false, true]

    const Infos = [
        { name: 'Thomas', commentaire: 'etudiant', connaissance: 'false', starRating: 4, smiley: 2 },
        { name: 'Maxime', commentaire: 'etudiant', connaissance: 'true', starRating: 4, smiley: 4 },
        { name: 'Kim', commentaire: 'etudiant', connaissance: 'false', starRating: 4, smiley: 1 },
        { name: 'Romain', commentaire: 'etudiant', connaissance: 'true', starRating: 4, smiley: 3 },
        { name: 'Laetitia', commentaire: 'etudiant', connaissance: 'false', starRating: 4, smiley: 5 }
    ]

    return (
        <ul>
            {Infos.map((user, index) => (
                <li key={`${user}-${index}`} className={index % 2 === 0 ? "blue_card" : "white_card"}>
                    <div>
                        {user.name}
                    </div>
                    <div>
                        {user.commentaire}
                    </div>
                    <div>
                        {user.connaissance ? <span className="right">Suivi</span> : <span className="right">Suivez le</span>}
                    </div>
                    
                    <Rating value={user.starRating}/>
                    
                </li>
            ))}
        </ul>
        )
}

export default UserCard