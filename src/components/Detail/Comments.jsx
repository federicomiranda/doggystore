import {useState} from 'react';

const Comments = () => {
    // const [comment, setComment] = useState('');
    // const [name, setName] = useState('');
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

    // const handleChangeComment = e => {
    //     setFormData({...formData, comment: e.target.value});
    // }
    
    // const handleChangeName = e => {
    //     setFormData({...formData, name: e.target.value});
    // }

    const handleChangeFormData = e => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    return (
        <section>
            <h3>Comentarios</h3>

            <ul>
                {
                    totalComments.map((comment, index) => {
                        return (
                        <li key={index}>
                            <p>{comment.name}</p>
                            <p>{comment.comment}</p>
                        </li>
                    )})
                }
            </ul>

            <form onSubmit={handleSubmitComment}>
                <input type="text" name="name" value={formData.name} onChange={handleChangeFormData} />
                <textarea name="comment" cols="30" rows="10" value={formData.comment} onChange={handleChangeFormData} />
                <input type="submit" value="Enviar comentario" />
            </form>
        </section>
    )
}

export default Comments;