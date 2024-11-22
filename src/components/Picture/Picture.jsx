
const Picture = ({pic1,title}) => {
    if (!Picture) {
        return null
    }
    return (
        <div className="w-5/6 rounded mt-2 border-2 border-primaryBase ">
            <img src={pic1} alt={title} />
          </div>
    )
}

export default Picture