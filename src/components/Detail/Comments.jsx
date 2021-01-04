import {useState} from 'react';
import './Comments.css';

const Comments = () => {
    const [formData, setFormData] = useState({
        name: '',
        comment: '',
    })
    const [totalComments, setTotalComments] = useState([]);

    const handleSubmitComment = e => {
        e.preventDefault();

        if(formData.comment.length >= 5) {
            setTotalComments([...totalComments, formData]);
            setFormData({name: '', comment: ''});
        } else {
            alert('El comentario debe tener como mínimo 10 caracteres');
        }
    }

    const handleChangeFormData = e => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    return (
        <section className="comments">
            <h3>Comentarios</h3>

            <ul>
                {
                    totalComments.map((comment, index) => {
                        return (
                        <li key={index}>
                            <p className="nombre">{comment.name}</p>
                            <p className="texto">{comment.comment}</p>
                        </li>
                    )})
                }
            </ul>

            <form onSubmit={handleSubmitComment}>
                <h4>Nuevo comentario</h4>
                <input type="text" placeholder="Nombre" name="name" value={formData.name} onChange={handleChangeFormData} />
                <textarea name="comment" placeholder="Comentario" cols="30" rows="10" value={formData.comment} onChange={handleChangeFormData} />
                <input type="submit" value="Enviar comentario" />
            </form>
        </section>
    )
}

export default Comments;