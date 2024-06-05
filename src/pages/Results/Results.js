import './Results.css';
import { useLocation } from 'react-router-dom';
import ResultsCharts from './ResultsCharts';

export default function Results() {
    const location = useLocation();
    const { seatDistribution, nd, syriza, pasok, kke, el, niki, pe, mera25, 
        patriotes, fl, epam, dixa, antarsya, laos, ek, em, mlkke, na, 
        dimokrates, kosmos } = location.state;
        console.log(seatDistribution, nd, syriza, pasok, kke, el, niki, pe, mera25, 
            patriotes, fl, epam, dixa, antarsya, laos, ek, em, mlkke, na, 
            dimokrates, kosmos );
    const partyColors = ['#1D6EC8', '#CC1C24', '#00793A', '#DF251C', '#8DBEE2', '#BD552C', '#972490', '#EB4326', '#1B395A', '#2890DE', '#16459A', '#EB8C1E', '#D82F33', '#000080', '#F2D308', '#18629F', '#D11F20', '#C53638', '#2C14EC', '#169A4D'];

    const barData = [
        {party: 'ΝΔ', percentage: nd, fill: partyColors[0]},
        {party: 'ΣΥΡ', percentage: syriza, fill: partyColors[1]},
        {party: 'ΠΑΣΟΚ', percentage: pasok, fill: partyColors[2]},
        {party: 'ΚΚΕ', percentage: kke, fill: partyColors[3]},
        {party: 'ΕΛ', percentage: el, fill: partyColors[4]},    
        {party: 'ΝΙΚΗ', percentage: niki, fill: partyColors[5]},
        {party: 'ΠΕ', percentage: pe, fill: partyColors[6]},
        {party: 'ΜΕΡΑ', percentage: mera25, fill: partyColors[7]},
        {party: 'ΠΑΤΡ', percentage: patriotes, fill: partyColors[8]},
        {party: 'ΦΛ', percentage: fl, fill: partyColors[9]},
        {party: 'ΕΠΑΜ', percentage: epam, fill: partyColors[10]},
        {party: 'ΔΗΞΑ', percentage: dixa, fill: partyColors[11]},
        {party: 'ΑΝΤ', percentage: antarsya, fill: partyColors[12]},
        {party: 'ΛΑΟΣ', percentage: laos, fill: partyColors[13]},
        {party: 'ΕΚ', percentage: ek, fill: partyColors[14]},
        {party: 'ΕΜ', percentage: em, fill: partyColors[15]},
        {party: 'Μ-Λ', percentage: mlkke, fill: partyColors[16]},
        {party: 'NA', percentage: na, fill: partyColors[17]},
        {party: 'ΔΗΜ', percentage: dimokrates, fill: partyColors[18]},
        {party: 'ΚΟΣ', percentage: kosmos, fill: partyColors[19]}
    ];

    const maxPercentage = Math.max(...barData.map(entry => entry.percentage));
    const upperHeight = Math.ceil(maxPercentage / 5) * 5;

    const pieData = [
        {party: 'ΝΔ', seats: seatDistribution[0], fill: partyColors[0]},
        {party: 'ΣΥΡΙΖΑ', seats: seatDistribution[1], fill: partyColors[1]},
        {party: 'ΠΑΣΟΚ', seats: seatDistribution[2], fill: partyColors[2]},
        {party: 'ΚΚΕ', seats: seatDistribution[3], fill: partyColors[3]}, 
        {party: 'ΕΛ', seats: seatDistribution[4], fill: partyColors[4]},    
        {party: 'ΝΙΚΗ', seats: seatDistribution[5], fill: partyColors[5]},
        {party: 'ΠΕ', seats: seatDistribution[6], fill: partyColors[6]},
        {party: 'ΜΕΡΑ25', seats: seatDistribution[7], fill: partyColors[7]},
        {party: 'ΠΑΤΡ', seats: seatDistribution[8], fill: partyColors[8]},
        {party: 'ΦΛ', seats: seatDistribution[9], fill: partyColors[9]},
        {party: 'ΕΠΑΜ', seats: seatDistribution[10], fill: partyColors[10]},
        {party: 'ΔΗΞΑ', seats: seatDistribution[11], fill: partyColors[11]},
        {party: 'ΑΝΤ', seats: seatDistribution[12], fill: partyColors[12]},
        {party: 'ΛΑΟΣ', seats: seatDistribution[13], fill: partyColors[13]},
        {party: 'ΕΚ', seats: seatDistribution[14], fill: partyColors[14]},
        {party: 'ΕΜ', seats: seatDistribution[15], fill: partyColors[15]},
        {party: 'Μ-Λ', seats: seatDistribution[16], fill: partyColors[16]},
        {party: 'NA', seats: seatDistribution[17], fill: partyColors[17]},
        {party: 'ΔΗΜ', seats: seatDistribution[18], fill: partyColors[18]},
        {party: 'ΚΟΣ', seats: seatDistribution[19], fill: partyColors[19]}
    ];

    return (
        <div className='results'>
            <header className='header'></header>
            <h1>Τα αποτελέσματα των επιλογών σας</h1>
            <ResultsCharts barData={barData} pieData={pieData} upperHeight={upperHeight} />
        </div>
    )
}