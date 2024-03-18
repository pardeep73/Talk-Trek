export default function Signin() {
    return (
        <>
            <div className="container">
                <div className="logo">
                    <h1>logo</h1>
                </div>
                <form action="">
                    <div className="text-sign">
                        <h1>
                            Sign in to start <br />
                            messaging
                        </h1>
                    </div>
                    <div className="emailbox-password">
                        <div className="emailbox">
                            <input type="email" placeholder="Enter E-mail or Phone . . ." />
                        </div>
                        <div className="password">
                            <input type="password" placeholder="Enter Password . . ." />
                        </div>
                        <div className="submit-button">
                            <button>Sign in</button>
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}