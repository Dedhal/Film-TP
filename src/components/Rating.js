function Rating(props) {
    const starRating = props.value
    const smileys = props.smileys
    const range = [1,2,3,4,5]
    return(
            <div>
                {range.map((element) => (
                    starRating >= element ? <span key={element.toString()}>*</span> : null))
                }
            </div>
            )
    
}

export default Rating;