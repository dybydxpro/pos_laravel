import { useState } from 'react';
import Services from '../Services';
import { useNavigate } from 'react-router-dom';
import '../CSS/Login.css';
import icon from '../image/bootstrap-logo.svg';

function Login(){
    const navigate = useNavigate();
    const [data, setData] = useState();

    sessionStorage.setItem('userID', 0);
    sessionStorage.setItem('userName', "");
    sessionStorage.setItem('type', "");

    function handle(e){
        const newData = {...data};
        newData[e.target.id] = e.target.value;
        setData(newData);
        console.log(newData);
    }

    const login = async (e) => {
        e.preventDefault();
        await Services.login(data)
        .then(({data})=>{
          console.log(data);
          sessionStorage.setItem('userID', data.id);
          sessionStorage.setItem('userName', data.userName);
          sessionStorage.setItem('type', data.type);
          if(data.type == "Admin"){
            navigate("/admin");
          }
          else{
            navigate("/cashier");
          }
        }).catch(({response})=>{
          console.log(response);
        });
    }

    return(
        <div className='formBox'>
            <form onSubmit={(e)=>login(e)}>
                <div className="d-flex justify-content-center">
                    <img className="mb-4" src={ icon } alt="" width="72" height="57"/>
                </div>
                <h1 className="h3 mb-3 fw-normal d-flex justify-content-center">Please sign in</h1>
                <div className="form-floating">
                    <input type="text" onChange={(e)=>handle(e)} className="form-control" id="userName" placeholder="JohnSmidth" required/>
                    <label htmlFor="userName">User Name</label>
                </div>
                <div className="form-floating">
                    <input type="password" onChange={(e)=>handle(e)} className="form-control" id="password" placeholder="Password" required/>
                    <label htmlFor="password">Password</label>
                </div>

                <button className="w-100 btn btn-lg btn-primary my-5" type="submit">Sign in</button>
            </form>
        </div>
    );
}

export default Login;