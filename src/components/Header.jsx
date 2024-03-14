import logo from '../assets/investment-calculator-logophoto.png';

export default function Header () {
    return <header id="header">
        <img src={logo} alt="logo money bag"/>
        <h2>Investment Calculator</h2>
    </header>
}