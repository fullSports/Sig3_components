import DashboardHeader from '../../Components/Header'
import DashboardSidenav from '../../Components/Sidenav'
import '../../styles.css';
import './styles.css';

const DashboardHome = () =>{
    const user = JSON.parse(localStorage.getItem('user') as string)
    return(
        <>
        <div className="flex">
            <DashboardSidenav/>
            <div className='home-body'>
                <DashboardHeader/>
                <div className="home-welcome-card">
                    <div className="username-welcome">
                        <span>Bem vindo(a), {user.nome}.</span>
                    </div>
                    <div className="dash-desc">
                        <span>
                        Por  meio desse Dashboard, você pode gerenciar cadastros e realizar consultas
                        de produtos e perfis ligados ao sistema interno de dados da Full Sports ©.
                        </span>
                    </div>
                </div>
                <div className="cards-container">
                    <div className="card-statics-dashboard">

                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}
export default DashboardHome;