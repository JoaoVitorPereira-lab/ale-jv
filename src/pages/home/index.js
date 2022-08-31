import { Link } from 'react-router-dom';
import './index.scss'

export default function App(){
    return (
        <section className='home'>
            <Link className='teste' to='/componentes' style={{ textDecoration: 'none' }}>
                <button className='button none-button'> Componentes </button>
            </Link>

            <Link className='teste' to='/componentes2' style={{ textDecoration: 'none' }}>
                <button className='button'> Componentes 2 </button>
            </Link>

            <Link className='teste' to='/props' style={{ textDecoration: 'none' }}>
                <button className='button'> Props </button>
            </Link>

            <Link className='teste' to='/ve' style={{ textDecoration: 'none' }}>
                <button className='button'> Variável de Estado </button>
            </Link>
        </section>
    );
}