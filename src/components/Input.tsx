import { useState } from "react"
import './Greeting.css'

interface InputProps {
    setUser: (user: string) => void;
}

export const Input: React.FC<InputProps> = ({ setUser }) => {
    const [userValue, setUserValue] = useState('');

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserValue(event.target.value);
    }
    setUser(userValue);

    return (
        <>
            <div className="input-user">
                <h4>What should I call You?</h4>
                <input type="text"
                maxLength={20}
                className="input"
                placeholder="Your Name"
                onChange={handleOnChange}
                required
                />
            </div>
        </>
    )
}