import React from 'react';
import axios from 'axios';

const ContactoPage = (props) => {

    const initialForm = {

        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            oldData,
            [name]: value //dinamica
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await
            axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return (
        <main className="holder contacto">
            <div>
                <h2>Contacto Rapido</h2>
                <form className="formulario" onSubmit={handleSubmit}>
                    <p>
                        <label>Nombre</label>
                        <input type="text" name="nombre" value={formData.nombre}
                         onChange={handleChange} />
                    </p> <p>
                        <label>Email</label>
                        <input type="text" name="email" value={formData.email}
                         onChange={handleChange} />
                    </p> <p>
                        <label >Teléfono</label>
                        <input type="text" name="telefono" value={formData.telefono} 
                        onChange={handleChange} />
                    </p> <p>
                        <label>Comentario</label>
                        <textarea name="mensaje" value={formData.mensaje} 
                        onChange={handleChange} ></textarea>
                    </p>
                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}
                    <p className="centrar"><input type="submit" value="Enviar" /></p> </form>
            </div>
            <div class="datos">
                <h2>Otras vias de comunicacion</h2>
                <p>Tambien puede contactarse con nosotros usando los siguientes medios</p>
                <lu>
                    <li>Telefono: 453457672</li>
                    <li>Email: contacto@tansportesx.com.ar</li>
                    <li>Facebook:</li>
                    <li>Twitter</li>
                    <li>Skype</li>
                </lu>
            </div>
        </main>
    );
}

export default ContactoPage;