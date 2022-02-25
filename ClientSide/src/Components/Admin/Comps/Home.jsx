function Home(){
    let userName = sessionStorage.getItem("userName");

    return(
        <div className="justify-content-end">
            <br/>
            <div className="">
                <div>
                    <h1 className="text-center">Hi {userName},</h1>
                </div>
                <div>
                    <h3 className="text-center"><i>Welcome to the Arya-Labs POS system.</i></h3>
                </div>
            </div>
        </div>
    );
}

export default Home;