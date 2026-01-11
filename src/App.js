import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home/Home';
import Results from './pages/Results/Results';
import Footer from './components/Footer';

function App() {
  const [nd, setND] = useState(0);
  const [syriza, setSYRIZA] = useState(0);
  const [pasok, setPASOK] = useState(0);
  const [kke, setKKE] = useState(0);
  const [el, setEL] = useState(0);
  const [niki, setNIKI] = useState(0);
  const [pe, setPE] = useState(0);
  const [mera25, setMeRA25] = useState(0);
  const [patriotes, setPatriotes] = useState(0);
  const [fl, setFL] = useState(0);
  const [epam, setEPAM] = useState(0);
  const [dixa, setDIXA] = useState(0);
  const [antarsya, setANTARSYA] = useState(0);
  const [laos, setLAOS] = useState(0);
  const [ek, setEK] = useState(0);
  const [em, setEM] = useState(0);
  const [mlkke, setMLKKE] = useState(0);
  const [na, setNA] = useState(0);
  const [dimokrates, setDimokrates] = useState(0);
  const [kosmos, setKosmos] = useState(0);
  const [electoralThreshold, setElectoralThreshold] = useState(3);
  const [seatDistribution, setSeatDistribution] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
    
  return (
    <BrowserRouter>
      <div className="App">
        <Header theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path='/' element={<Home nd={nd} syriza={syriza} pasok={pasok} kke={kke} el={el} niki={niki} pe={pe} mera25={mera25} patriotes={patriotes} fl={fl} epam={epam} dixa={dixa} antarsya={antarsya} laos={laos} ek={ek} em={em} mlkke={mlkke} na={na} dimokrates={dimokrates} kosmos={kosmos} electoralThreshold={electoralThreshold} seatDistribution={seatDistribution} showResults={showResults} setND={setND} setSYRIZA={setSYRIZA} setPASOK={setPASOK} setKKE={setKKE} setEL={setEL} setNIKI={setNIKI} setPE={setPE} setMeRA25={setMeRA25} setPatriotes={setPatriotes} setFL={setFL} setEPAM={setEPAM} setDIXA={setDIXA} setLAOS={setLAOS} setANTARSYA={setANTARSYA} setEK={setEK} setEM={setEM} setMLKKE={setMLKKE} setNA={setNA} setDimokrates={setDimokrates} setKosmos={setKosmos} setElectoralThreshold={setElectoralThreshold} setSeatDistribution={setSeatDistribution} setShowResults={setShowResults} theme={theme} />} />
          <Route path='/results' element={<Results nd={nd} syriza={syriza} pasok={pasok} kke={kke} el={el} niki={niki} pe={pe} mera25={mera25} patriotes={patriotes} fl={fl} epam={epam} dixa={dixa} antarsya={antarsya} laos={laos} ek={ek} em={em} mlkke={mlkke} na={na} dimokrates={dimokrates} kosmos={kosmos} electoralThreshold={electoralThreshold} seatDistribution={seatDistribution} theme={theme} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
