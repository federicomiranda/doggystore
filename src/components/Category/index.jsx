import {useState, useEffect} from 'react';
import axios from 'axios';

const Category = () => {
    const [people, setPeople] = useState([]);

    const getPeople = async () => {
        try {
            let response = await axios('https://swapi.dev/api/people/');

            setPeople(response.data.results);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getPeople();
    }, [])

    return (
        <>
            <h1>Star Wars info</h1>
            {
                people.length ?
                people.map(person => (
                    <article key={person.created}>
                        <h2>{person.name}</h2>
                        <p>Altura: {person.height}</p>
                        {
                            !!person.starships.length &&
                            <ul>
                                {
                                    person.starships.map((nave, index) => <li key={index}>{nave}</li>)
                                }
                            </ul>
                        }
                    </article>
                )) :
                <p>Cargando personajes...</p>
            }
        </>
    )
}

export default Category;