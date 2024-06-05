import logo from '../assets/images/logo.svg';

export default function Header() {
    return (
        <header className='d-flex justify-content-start align-items-center gap-3'>
            <img src={logo} alt="logo" width='45' height='45' />
            <h6>Ευρωεκλογές 2024</h6>
        </header>
    )
}