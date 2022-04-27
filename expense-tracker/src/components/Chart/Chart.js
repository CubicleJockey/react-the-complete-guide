import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(point => point.value);
    const max = Math.max(...dataPointValues); //max wants max(1,2,3,4) ... (spread operator to do this)

    return (
        <div className="chart">
            {
                props.dataPoints.map(
                    point => <ChartBar 
                                key={point.label}
                                value={point.value} 
                                max={max}
                                label={point.label}
                                />
                )
            }
        </div>
    );
};

export default Chart;