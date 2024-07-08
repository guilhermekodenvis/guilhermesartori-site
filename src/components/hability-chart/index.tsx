import "./styles.css"

type HabilityChartProps = {
    name: string
    img: string
    percentage: number
}

export const HabilityChart: React.FC<HabilityChartProps> = ({img, name, percentage}) => {
    return (
        <div className="hability-container">
            <img src={img} alt="" />
            <div className="info-container">
                <div className="top-info">
                    <h5>
                        {name}
                    </h5>
                    <p>{percentage}%</p>
                </div>
                <div className="chart">
                    <div className="chart-full"></div>
                    <div className="chart-percent" style={{ width: `${percentage}%` }}></div>
                </div>
            </div>
        </div>
    )  
}