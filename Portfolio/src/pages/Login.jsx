import { useState } from "react";
import "../assets/css/form.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/aos.css";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setError("");

        try {
            const response = await fetch("http://localhost:8070/admins/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.error || "Login failed");
            } else {
                setMessage("✅ Login successful!");
                console.log("Admin:", data.admin);
                // 👉 Later: save token/localStorage here
            }
        } catch (err) {
            setError("Something went wrong. Try again.");
        }
    };
    return (
        <>
            <div className="page-container">
                <div class="form-container">
                    <p class="title">Login</p>
                    <form className="form" onSubmit={handleSubmit}>

                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <br/>
                        {error && <p style={{ color: "red" }}>{error}</p>}
                        {message && <p style={{ color: "green" }}>{message}</p>}
                        <br/>

                        <button type="submit" className="sign">
                            Sign in
                        </button>

                    </form>
                    <div class="social-message">
                        <div class="line"></div>
                        <p class="message">Only admin can login here.Users does not allow to login</p>
                        <div class="line"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
