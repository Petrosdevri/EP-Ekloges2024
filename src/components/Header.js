import { Button } from 'react-bootstrap';
import logo from '../assets/images/logo.svg';

export default function Header({ theme, setTheme }) {
    return (
        <header className='d-flex justify-content-center align-items-center gap-5'>
            <div className='d-flex justify-content-start align-items-center gap-3'>
                <img src={logo} alt='logo' width='45' height='45' />
                <h6>Ευρωεκλογές 2024</h6>
            </div>
            <Button variant='outline-secondary' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className='theme-toggle'>
                {theme === 'light' ? '🌙' : '☀️'}
            </Button>
        </header>
    )
}