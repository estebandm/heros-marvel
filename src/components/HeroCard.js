import React, { useState, useEffect } from 'react'
import '../styles.css'

//en la url el ts=1 y el hash lo agregué yo manualmente
//https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=a09058a519d0e88b04655b6de8ce1cd5&hash=C45110947C352C888BC983DC4567313E

//hash que sale de concatenar clave privada con clave publica, y al principio del todo un "1" que es el ts
//1049F2BE0C58B67DB3AEAAF961BC7F03



const HeroCard = () => {
    const [heros, setHeros] = useState([])

    let urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=a09058a519d0e88b04655b6de8ce1cd5&hash=c45110947c352c888bc983dc4567313e'
    useEffect(() => {
        fetch(urlAPI)
            //.then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
            .then(res => res.json())
            .then((dataHeros) => {
                console.log(dataHeros)
                console.log(dataHeros.data.results[0].urls[1].url)
                setHeros(dataHeros.data.results)
                /*for (const hero of dataHeros.data.results) {
                  setHeros({ id: hero.id, urlHero: hero.urls[0].url, name: hero.name, image: hero.thumbnail.path + '.' + hero.thumbnail.extension })
                }*/
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <div className="container">{heros.map(hero => (
                <div className="prueba" key={hero.id}>
                    <a href={hero.urls[1].url} target="_blank" className="wiki"><p>Ver en Wiki</p></a>
                    <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} />
                    <div className="name">{hero.name}</div>
                </div>
            ))}
            </div>

        </>
    )
}

export default HeroCard