import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

export default function BarGraph({ barData, upperHeight, voteRef }) {
    return (
        <div className='results-chart' ref={voteRef}>
            <h2>Ποσοστό Ψήφων</h2>
            <BarChart className='bar-chart' data={barData} width={1050} height={525} label='Ποσοστό'>
                <XAxis dataKey='party' />
                <YAxis domain={[0, upperHeight]}/>
                <Tooltip />
                <Legend content='Ποσοστό' />
                <Bar dataKey='percentage' fill={entry => entry.fill} />
            </BarChart>
        </div>
    )
}