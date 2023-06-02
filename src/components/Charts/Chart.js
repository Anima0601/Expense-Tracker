import './Chart.css'
import Chartbars from "./Chartbars"

function Chart(props){
    const dataPointValues = props.dataPoint.map(dataPoints => dataPoints.value);
    const totalMaximum = Math.max(...dataPointValues);


return(
<div className="chart">
  {props.dataPoint.map((dataPoints) =>
  <Chartbars 
  key = {dataPoints.label}
  value={dataPoints.value}
  maxValue = {totalMaximum}
  label = {dataPoints.label}
   />)}
</div>
)
};

export default Chart;