import React from 'react'

function Card(props) {
    return (
        <div className="cards">
            <div className="card">
                <img src={props.imgSrc} alt="card" className="card-img"/>
                <div className="card-info">
                    <span className="card-category">{props.title}</span>
                    <h3 className="card-title"> {props.name} </h3>
                    <a href={props.link} rel="noreferrer"  alt="btn" target="_blank">
                        <button>Watch Now</button>
                    </a>
                </div>
            </div>
            
            
        </div>
    )
}

export default Card;
