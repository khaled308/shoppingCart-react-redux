import { Link } from "react-router-dom"

function Card({img , title , text,id}) {
    return (
        <div className="card h-100 text-center p-4">
            <img src={img} className="card-img-top" alt="card" height='250px'/>
            <div className="card-body">
                <h5 className="card-title mb-0">{title}</h5>
                <p className="card-text">{text}</p>
                <Link to={`/product/${id}`} className="btn btn-outline-dark">Buy now</Link>
            </div>
        </div>
    )
}

export default Card