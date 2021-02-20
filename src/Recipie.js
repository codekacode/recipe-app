import React from 'react';
import style from './recipe.module.css'

const Recipie = ({title,calories,image, ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1 >{title}</h1>
            <ol className={style.recipe__steps}>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img className={style.image} src={image} alt=""/>
        </div>
    )
}

export default Recipie;