import Party from './Party';

export default function PartyBallot(props) {
    return (
        <div className='ballot d-flex flex-column justify-content-center align-items-center'>
            <h4>Επιλέξτε το ποσοστό των ψήφων που θα λάβει κάθε κόμμα.</h4>
            <div className='ballot-list'>
                <Party color='#1D6EC8' name='Νέα Δημοκρατία' votes={props.nd} setVotes={props.setND} />
                <Party color='#CC1C24' name='ΣΥΡΙΖΑ' votes={props.syriza} setVotes={props.setSYRIZA} />
                <Party color='#00793A' name='ΠΑΣΟΚ' votes={props.pasok} setVotes={props.setPASOK} />
                <Party color='#DF251C' name='ΚΚΕ' votes={props.kke} setVotes={props.setKKE} />
                <Party color='#8DBEE2' name='Ελληνική Λύση' votes={props.el} setVotes={props.setEL} />
                <Party color='#BD552C' name='Νίκη' votes={props.niki} setVotes={props.setNIKI} />
                <Party color='#972490' name='Πλεύση Ελευθερίας' votes={props.pe} setVotes={props.setPE} />
                <Party color='#EB4326' name='ΜέΡΑ25' votes={props.mera25} setVotes={props.setMeRA25} />
                <Party color='#1B395A' name='Πατριώτες' votes={props.patriotes} setVotes={props.setPatriotes} />  
                <Party color='#2890DE' name='Φωνή Λογικής' votes={props.fl} setVotes={props.setFL} />
                <Party color='#16459A' name='ΕΠΑΜ' votes={props.epam} setVotes={props.setEPAM} />
                <Party color='#EB8C1E' name='Δημιουργία' votes={props.dixa} setVotes={props.setDIXA} />
                <Party color='#D82F33' name='ΑΝΤΑΡΣΥΑ' votes={props.antarsya} setVotes={props.setANTARSYA} />
                <Party color='#000080' name='ΛΑΟΣ' votes={props.laos} setVotes={props.setLAOS} />
                <Party color='#F2D308' name='Ένωση Κεντρώων' votes={props.ek} setVotes={props.setEK} />
                <Party color='#18629F' name='Εθνικό Μέτωπο' votes={props.em} setVotes={props.setEM} />
                <Party color='#D11F20' name='Μ-Λ ΚΚΕ' votes={props.mlkke} setVotes={props.setMLKKE} />
                <Party color='#C53638' name='Νέα Αριστερά' votes={props.na} setVotes={props.setNA} />
                <Party color='#2C14EC' name='Δημοκράτες' votes={props.dimokrates} setVotes={props.setDimokrates} />
                <Party color='#169A4D' name='Κόσμος' votes={props.kosmos} setVotes={props.setKosmos} />
            </div>
        </div>
    )
}

//769BBC