import PropTypes from "prop-types"

function Profile(props) {

    const handleName = (props) => {
        return alert(props)
    }
    
    return <div style={{
                width: "50%",
                height: "50%",
                display: "flex",
                justifyContent: "space-evenly",
            }}>

        <div style={{display: "flex", justifyItems: "center"}}>
            <img src={props.children} alt={props.fullName.firstNAme} style={{border: "thick double black"}}></img>
        </div>
        
        <div className="infos">
            <p style={{fontFamily: "Georgia, serif", fontSize: "1.5em"}}>
                {props.fullName.firstNAme} {props.fullName.lastName}
            </p>
            <p>{props.bio}</p>
            <p>{props.profession}</p>
        </div>
        <p>{handleName(props.fullName.lastName)}</p>
    </div>
}

// Profile.defaultProps = {

//     fullName: {
//         firstNAme: "Ayoub",
//         lastName: "BIL"
//     },
//     bio: "Developpeur web front-end",
//     profession: "Pilote nomenclature",
//     image: "./photo.jpg"
// }

Profile.propTypes = {
    fullName: PropTypes.object.isRequired,
    bio: PropTypes.string,
    profession: PropTypes.string
}

export default Profile