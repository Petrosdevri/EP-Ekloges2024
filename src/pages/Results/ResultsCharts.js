import { useRef } from 'react';
import { Button, Stack } from 'react-bootstrap';
import { useScreenshot } from 'use-react-screenshot';
import BarGraph from './BarGraph';
import PieGraph from './PieGraph';

export default function ResultsCharts({ barData, pieData, upperHeight }) {
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
    }

    return (
        <Stack className='results-charts' gap={5}>
            <BarGraph barData={barData} upperHeight={upperHeight} getVotes={getVotes} voteRef={voteRef} />
            <Button className='screenshot-btn' variant='primary' onClick={getVotes}>Λήψη Screenshot</Button>
            <PieGraph pieData={pieData} getSeats={getSeats} seatRef={seatRef} />
            <Button className='screenshot-btn' variant='primary' onClick={getSeats}>Λήψη Screenshot</Button>
        </Stack>
    )
}