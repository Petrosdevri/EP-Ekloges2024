import { useRef } from 'react';
import { Button, Stack } from 'react-bootstrap';
import { useScreenshot } from 'use-react-screenshot';
import BarGraph from './BarGraph';
import PieGraph from './PieGraph';

export default function ResultsCharts({ barData, pieData, theme, upperHeight }) {
    const chartBg = theme === 'dark' ? '#2d2d2d' : '#ffffff';
    const chartTextColor = theme === 'dark' ? '#ffffff' : '#000000';
    const [screenshot, takeScreenshot] = useScreenshot();
    console.log(screenshot);
    const seatRef = useRef(null);
    const voteRef = useRef(null);
    const getSeats = async () => {
        if (seatRef.current) { 
            let screenshot = await takeScreenshot(seatRef.current);
            downloadScreenshot(screenshot, "Κατανομή Εδρών.png");
        }
        else console.error('Seat reference is not set.');
    };
    const getVotes = async () => {
        if (voteRef.current) {
            let screenshot = await takeScreenshot(voteRef.current);
            downloadScreenshot(screenshot, "Ποσοστό Ψήφων.png");
        } else console.error('Vote reference is not set.');
    };

    const downloadScreenshot = (image, filename) => {
        let a = document.createElement('a');
        a.href = image;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    function isMobileDevice() {
        return window.innerWidth <= 768;
    }

    return (
        <Stack className='results-charts' gap={5}>
            <BarGraph barData={barData} upperHeight={upperHeight} getVotes={getVotes} voteRef={voteRef} chartBg={chartBg} chartTextColor={chartTextColor} />
            { !isMobileDevice() ? <Button className='screenshot-btn' variant='primary' onClick={getVotes}>Λήψη Screenshot</Button> : '' }
            <PieGraph pieData={pieData} getSeats={getSeats} seatRef={seatRef} chartBg={chartBg} chartTextColor={chartTextColor} />
            { !isMobileDevice() ? <Button className='screenshot-btn' variant='primary' onClick={getSeats}>Λήψη Screenshot</Button> : '' }
        </Stack>
    )
}