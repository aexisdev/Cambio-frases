import { useState } from 'react';
import React from 'react';
import Two from './Two';

const One = () => {
    //? Arreglo con las frases aleatorias.
    const arrayFraps = [
        'Well done is better than well said',
        'Once you choose hope, anything’s possible',
        'Try it again. Fail again. Fail better',
        'Start wide, expand further, and never look back',
        'You only live once but if you do it right, once is enough',
        'Sometimes the heart sees what is invisible to the eye',
        'The harder I work, the luckier I get',
        'Change your thoughts and you change your world',
        'You can’t judge a book by its cover',
        'I will go anywhere as long as it is forward',
        'Don’t dream your life, but live your dream',
    ]
    //? Variable randomFraps. para cambiar las variables aleatorias.
    const randomFraps = Math.floor(Math.random() * arrayFraps.length);
    //? Estado para almacenar el cambio de las frases.
    const [randomChange, setRandomChange] = useState(randomFraps);
    //? Funcion btn para hacer el cambio de las frases  el color.
    const btn = () => {
        setRandomChange(Math.floor(Math.random() * arrayFraps.length));
    }
    //====================================================================
    //? Arreglo con los colores de fondo.
    const colors = ['#715AFF', '#5887FF', '#7E6B8F', '#96E6B3', '#03B5AA', '#DA3E52','#2BD9FE', '#F15152', '#9A98B5', '#1D84B5','#B497D6', '#A9FBD7'];
    //? Variable changeRandomColor que guarda el cambio de los colores. 
    const changeRandomColor = Math.floor(Math.random() * colors.length);
    //? Aplicacion del color de manera aleatoria.
    document.body.style = `background: ${colors[changeRandomColor]}`;
    //====================================================================
    //====================================================================
    return (
        <div>
            <h1 style={{color: colors[changeRandomColor]}}>{arrayFraps[randomChange]}</h1>
            <Two btn={btn}/>
        </div>
    );
};

export default One;