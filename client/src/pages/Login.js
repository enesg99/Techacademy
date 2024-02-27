import Getdata from '../components/userData/GetData';
import Daytracker from '../components/daytracker';

function Login() {
    return ( 
        <div>
            <Daytracker />
            <div style={{marginTop: '150px'}}>
                <Getdata />
            </div>
        </div>
     );
}

export default Login;