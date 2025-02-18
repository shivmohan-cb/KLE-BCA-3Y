
const ProfileCard = ({ name, rollno, address }) => {// using props
    return <div className="student">
        <h1>
            {name}
        </h1>
        <h2>
            {rollno}
        </h2>
        <p>
            {address}
        </p>
    </div>
}

export default ProfileCard;