import { InputText } from 'primereact/inputtext';
import { useState } from 'react';

function Form() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <span className="p-float-label">
                <InputText id="in" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="in">Username</label>{/* TODO - quitar hardcode */}
            </span>
            <span className="p-float-label">
                <InputText id="in" value={password} onChange={(e) => setPassword(e.target.value)} />
                <label htmlFor="in">Password</label>{/* TODO - quitar hardcode */}
            </span>
        </div>
    );
}

export default Form;