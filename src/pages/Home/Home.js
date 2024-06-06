import { useNavigate } from 'react-router-dom';
import './Home.css';
import { system24 } from '@poliverse/european-elections-greece';
import { Button, Stack } from 'react-bootstrap';
import Ballot from './Ballot';

export default function Home({ nd, syriza, pasok, kke, el, niki, pe, mera25, patriotes, fl, epam, dixa, antarsya, laos, ek, em, mlkke, na, dimokrates, kosmos, electoralThreshold, seatDistribution, showResults, setND, setSYRIZA, setPASOK, setKKE, setEL, setNIKI, setPE, setMeRA25, setPatriotes, setFL, setEPAM, setDIXA, setANTARSYA, setLAOS, setEK, setEM, setMLKKE, setNA, setDimokrates, setKosmos, setElectoralThreshold, setSeatDistribution, setShowResults }) {
    const navigate = useNavigate();

    function isMobileDevice() {
        return (typeof window.orientation !== 'undefined') || (navigator.userAgent.indexOf('IEMobile') !== -1);
    }

    function handleResults() {
        const percentages = [
            parseFloat(nd), parseFloat(syriza), parseFloat(pasok), parseFloat(kke), parseFloat(el),
            parseFloat(niki), parseFloat(pe), parseFloat(mera25), parseFloat(patriotes), parseFloat(fl),
            parseFloat(epam), parseFloat(dixa), parseFloat(antarsya), parseFloat(laos), parseFloat(ek),
            parseFloat(em), parseFloat(mlkke), parseFloat(na), parseFloat(dimokrates), parseFloat(kosmos)
        ];
        const totalPercentages = percentages.reduce((a, b) => a + b, 0);

        if(percentages.some(isNaN)) {
            alert('Παρακαλώ εισάγετε έγκυρα ποσοστά ψήφων για κάθε κόμμα.');
            return;
        }
        if (totalPercentages > 100) {
            alert('Το ποσοστό δεν πρέπει να ξεπερνά το 100%!');
            return;
        }

        let newSeatDistribution = system24(percentages, electoralThreshold)
        setSeatDistribution(newSeatDistribution);
        console.log(seatDistribution)
        navigate('/results', { state: { seatDistribution: newSeatDistribution }});
    }

    // const renderPopover = () => (
    //     <Popover id='popover'>
    //         <Popover.Header as='h3'>Σχετικά με το εκλογικό σύστημα</Popover.Header>
    //         <Popover.Body>
    //             Η μέθοδος D'Hondt, επίσης γνωστή ως μέθοδος των υψηλότερων μέσων όρων, είναι μια δημοφιλής τεχνική κατανομής 
    //             που χρησιμοποιείται για την κατανομή των εδρών στα κοινοβούλια. Διαιρούμε τον αριθμό των ψήφων με τις θέσεις που
    //             πρέπει να κατανεμηθούν και το κόμμα με τον υψηλότερο μέσο όρο αποκτά μια έδρα. Η διαδικασία επαναλαμβάνεται μέχρι να 
    //             κατανεμηθούν όλες οι έδρες. Αν και εξασφαλίζει περισσότερη αναλογικότητα έχει επικριθεί ότι ευνοεί τα μεγαλύτερα
    //             κόμματα. 

    //             Στην Ελλάδα υιοθετήθηκε το 2024 από την κυβέρνηση ενώ εφαρμόζεται ήδη σε 15 κράτη-μέλη της ΕΕ για τις Ευρωεκλογές.
    //         </Popover.Body>
    //     </Popover>
    // );

    return (
        <Stack className='home' gap={5}>
            <div>
                <header className='header'></header>
                <div className='electoral-requirements'>
                    <Stack className='electoral-system' gap={3}>
                        <h4>Εκλογικό Σύστημα</h4>
                        <p>Μέθοδος d'Hondt</p>
                        {/* <OverlayTrigger trigger='click' placement='bottom' overlay={renderPopover}>
                            <Button variant='primary'>Πληροφορίες</Button>
                        </OverlayTrigger> */}
                    </Stack>
                    <Stack className='electoral-threshold' gap={3}>
                        <h4>Επιλέξτε εκλογικό όριο</h4>
                        <input className='electoral-requirement' type='number' min='0' max='100' value={electoralThreshold} onChange={(e) => setElectoralThreshold(e.target.value)} />
                    </Stack>
                </div>
            </div>
            <p>Η σειρά των κομμάτων βασίζεται στα αποτελέσματά τους στις εκλογές του Ιουλίου 2023, καθώς και στην περίοδο ίδρυσης τους.</p>
            {/* <Ballot nd={nd} syriza={syriza} pasok={pasok} kke={kke} el={el} niki={niki} pe={pe} mera25={mera25} patriotes={patriotes} fl={fl} epam={epam} dixa={dixa} antarsya={antarsya} laos={laos} ek={ek} em={em} mlkke={mlkke} na={na} dimokrates={dimokrates} kosmos={kosmos} showResults={showResults} setND={setND} setSYRIZA={setSYRIZA} setPASOK={setPASOK} setKKE={setKKE} setEL={setEL} setNIKI={setNIKI} setPE={setPE} setMeRA25={setMeRA25} setPatriotes={setPatriotes} setFL={setFL} setEPAM={setEPAM} setDIXA={setDIXA} setLAOS={setLAOS} setANTARSYA={setANTARSYA} setEK={setEK} setEM={setEM} setMLKKE={setMLKKE} setNA={setNA} setDimokrates={setDimokrates} setKosmos={setKosmos} setShowResults={setShowResults} /> */}
            <Ballot nd={nd} syriza={syriza} pasok={pasok} kke={kke} el={el} niki={niki} pe={pe} mera25={mera25} patriotes={patriotes} fl={fl} epam={epam} dixa={dixa} antarsya={antarsya} laos={laos} ek={ek} em={em} mlkke={mlkke} na={na} dimokrates={dimokrates} kosmos={kosmos} setND={setND} setSYRIZA={setSYRIZA} setPASOK={setPASOK} setKKE={setKKE} setEL={setEL} setNIKI={setNIKI} setPE={setPE} setMeRA25={setMeRA25} setPatriotes={setPatriotes} setFL={setFL} setEPAM={setEPAM} setDIXA={setDIXA} setANTARSYA={setANTARSYA} setLAOS={setLAOS} setEK={setEK} setEM={setEM} setMLKKE={setMLKKE} setNA={setNA} setDimokrates={setDimokrates} setKosmos={setKosmos} />
            {isMobileDevice() ? <Button className='submit-btn' onClick={() => { setShowResults(true); handleResults(); }}>Υποβολή</Button> :
            <Button className='submit-btn' onClick={() => { setShowResults(true); handleResults(); }}>Υποβολή</Button> }
        </Stack>
    )
}