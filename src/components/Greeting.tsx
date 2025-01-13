import { useState } from "react"
import { Input } from "./Input.tsx";
import './Greeting.css'

export const Greeting = () => {
    const [user, setUser] = useState('');
    const [visible, setVisible] = useState(true);

    const handleOnClick = () => {
        setVisible(false)
    }

    if (visible) {
        return (
            <>
                <Input setUser={setUser} />
                <button
                className="btn"
                onClick={handleOnClick}
                >Submit</button>
            </>
        )
    }

    return (
        <>
            <h2>Hello {user}, Welcome Back!</h2>
        </>
    )
}