import logo from "C:/Users/mohit/Desktop/TalkTrek/src/logo.svg"

export default function Signin() {
    return (
        <>
            <div className="container">

                <img src={logo} alt="TalkTrek" />

                <form action="">

                    <big>
                        Sign in to start <br />
                        messaging
                    </big>

                    <div className="login-fields">

                        <label htmlFor="email">E-mail / phone</label>
                        <input id="email" type="email" />

                        <label htmlFor="pass">Password</label>
                        <input id="pass" type="password" />

                        <button>Sign in</button>

                    </div>
                </form>
            </div>

        </>
    )
}