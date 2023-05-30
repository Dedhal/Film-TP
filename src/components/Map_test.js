function Map_test() {
    const chiffres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const chiffresDoubles = chiffres.map((chiffre) => chiffre * 2)

    const listes = ['info1', 'info2', 'info3', 'info4', 'info5']
    const mapped = listes.map((info) => (<h5>{info}</h5>))
    return (
        {mapped}
    )
}

export default Map_test