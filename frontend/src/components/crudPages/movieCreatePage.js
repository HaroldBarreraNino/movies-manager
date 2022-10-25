import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Parse from 'parse';

const MovieCreatePage = () => {

    const navigate = useNavigate();
    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [sinopsis, setSinopsis] = useState('');
    const [imagen, setImagen] = useState('');
    const [trailer, setTrailer] = useState('');

    const CreateMovie = async () => {

        const MovieObject = Parse.Object.extend("pelicula");
        const movie = new MovieObject();

        movie.set("titulo", titulo);
        movie.set("categoria", categoria);
        movie.set("sinopsis", sinopsis);
        movie.set("imagen", imagen);
        movie.set("trailer", trailer);

        movie.save()
            .then((movie) => {
                navigate('/moviecrud', { replace: true });
                alert('New object created with objectId: ' + movie.id);
            }, (error) => {
                alert('Failed to create new object, with error code: ' + error.message);
            });
    }

    return (
        <>
            <main className="container">
                <h1 className="titlePage">CREAR PELICULA</h1>
                <hr />
                <div className="form">
                    <div class="form-group">
                        <label for="nombre">Titulo:</label>
                        <input type="text" value={titulo} onChange={(e) => (setTitulo(e.target.value))} class="form-control" placeholder="Digite el titulo de la pelicula" />
                    </div>
                    <div class="form-group">
                        <label for="apellido">Categoria:</label>
                        <input type="text" value={categoria} onChange={(e) => (setCategoria(e.target.value))} class="form-control" placeholder="Digite la categoria de la pelicula" />
                    </div>
                    <div class="form-group">
                        <label for="apellido">Sinopsis:</label>
                        <textarea value={sinopsis} onChange={(e) => (setSinopsis(e.target.value))} rows="4" cols="50">
                            Deja tu opinion de la pelicula.
                        </textarea>
                    </div>
                    <div class="form-group">
                        <label for="correo">Imagen:</label>
                        <input type="email" value={imagen} onChange={(e) => (setImagen(e.target.value))} class="form-control" placeholder="Digite la URL de la imagen de la pelicula" />
                    </div>
                    <div class="form-group">
                        <label for="username">Trailer:</label>
                        <input type="text" value={trailer} onChange={(e) => (setTrailer(e.target.value))} class="form-control" placeholder="Digite la URL del video del trailer de la pelicula" />
                    </div>
                    <div className="container-center">
                        <button onClick={() => CreateMovie()} type="submit" class="btn btn-primary">CREAR PELICULA</button>
                    </div>
                </div>
            </main>
        </>
    );
}

export default MovieCreatePage;