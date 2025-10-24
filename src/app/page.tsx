'use client';
import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';

export default function AuthPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [isLogin, setIsLogin] = useState(true);

    const handleAuth = async () => {
        try {
            if (isLogin) {
                await signInWithEmailAndPassword(auth, email, password);
                alert("Login Successful!")
            } else {
                await createUserWithEmailAndPassword(auth, email, password);
                alert("Signed up!")
            }
        } catch (err: any) {
            alert(err.message);
        }
    }
    return (
        <div className= "container p-4">
            <h1> {isLogin ? "Login" : "Sign Up"} </h1>
            <input className="form-control my-2"
            placeholder= "Email"
            value = {email}
            onChange = {(e) => setEmail(e.target.value)} />
            <input type = "password"
            className = "form-control my-2"
            placeholder ="Password"
            value = {password}
            onChange= {(e) => setPassword(e.target.value)} />
            <button className= "btn btn-primary my-2" onClick= {handleAuth}> {isLogin ? "Login" : "Sign Up"} </button>
            <button className= "btn btn-link" onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "Need to create an account?" : "Already have and account?"}
            </button>
        </div>
    )
}
