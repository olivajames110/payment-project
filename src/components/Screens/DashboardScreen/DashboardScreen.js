import * as React from 'react';

import { isMobile } from 'react-device-detect';
import Screen from '../../shared/UIElements/Screen/Screen';

import { XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, AreaSeries, LineSeries } from 'react-vis';
import './DashboardScreen.css';

const DashboardScreen = () => {
	const [ mainChartWidth, setMainChartWidth ] = React.useState(300);
	const [ mainChartHeight, setMainChartHeight ] = React.useState(300);
	const mainChartRef = React.useRef(null);

	const mainChart = (
		<XYPlot width={mainChartWidth} height={mainChartHeight}>
			<VerticalGridLines />
			<HorizontalGridLines />
			<XAxis />
			<YAxis />
			<AreaSeries
				fill="#d6d8dd"
				stroke="#babcc3"
				className="area-series-example"
				curve="curveNatural"
				data={[
					{ x: 1, y: 4 },
					{ x: 2, y: 7 },
					{ x: 3, y: 12 },
					{ x: 4, y: 7 },
					{ x: 5, y: 9 },
					{ x: 6, y: 8 },
					{ x: 7, y: 10 },
					{ x: 8, y: 9 },
					{ x: 9, y: 8 }
				]}
			/>
		</XYPlot>
	);

	React.useEffect(() => {
		let width;
		let height;
		width = mainChartRef.current.offsetWidth;
		height = mainChartRef.current.offsetHeight;

		setMainChartWidth(width);
		setMainChartHeight(height);
	}, []);

	return (
		<Screen id="dashboard" title="Jarrett's Grill">
			<div className="graphs-container">
				<GraphArticle description="Total Transactions" value={'$292.50 '} isIncrease={true} percentValue={50} />
				<GraphArticle description="Successful Transactions" value={'9'} isIncrease={false} percentValue={9} />
				<GraphArticle description="Avg. Transactions" value={'$32.00 '} isIncrease={true} percentValue={20} />
			</div>
			<article className="main-graph">
				<h3>Main Transaction Volume Graph</h3>
				<div ref={mainChartRef} className="main-chart-wrapper">
					{mainChart}
				</div>
			</article>
		</Screen>
	);
};

export default DashboardScreen;

const GraphArticle = (props) => {
	return (
		<article id="graph-one">
			<div className="article-column__value">
				<div className="primary-number-section">
					<h3 className="article-title">{props.description}</h3>
					<div className="value__number">{props.value}</div>
				</div>
			</div>
			<div className="article-column__graph">
				<div className="graph">
					<XYPlot margin={10} width={100} height={80}>
						<LineSeries
							stroke="#191F36"
							strokeWidth="3"
							fill="red"
							strokeStyle={'#babcc3'}
							curve="curveNatural"
							data={[
								{ x: 1, y: 4 },
								{ x: 2, y: 7 },
								{ x: 3, y: 12 },
								{ x: 4, y: 7 },
								{ x: 5, y: 9 },
								{ x: 6, y: 8 },
								{ x: 7, y: 10 },
								{ x: 8, y: 9 },
								{ x: 9, y: 8 }
							]}
						/>
					</XYPlot>
				</div>
				<div
					className={`${
						props.isIncrease ? 'increase' :
						'decrease'} percent-increase`}
				>
					<span className="arrow-wrapper">
						{
							props.isIncrease ? upArrow :
							downArrow}{' '}
					</span>
					<span className="number">{props.percentValue}%</span>
				</div>
			</div>
		</article>
	);
};

// ICONS

const upArrow = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		focusable="false"
		data-prefix="fas"
		data-icon="long-arrow-alt-up"
		class="svg-inline--fa fa-long-arrow-alt-up fa-w-8"
		role="img"
		viewBox="0 0 256 512"
	>
		<path
			fill="currentColor"
			d="M88 166.059V468c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12V166.059h46.059c21.382 0 32.09-25.851 16.971-40.971l-86.059-86.059c-9.373-9.373-24.569-9.373-33.941 0l-86.059 86.059c-15.119 15.119-4.411 40.971 16.971 40.971H88z"
		/>
	</svg>
);
const downArrow = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		focusable="false"
		data-prefix="fas"
		data-icon="long-arrow-alt-down"
		class="svg-inline--fa fa-long-arrow-alt-down fa-w-8"
		role="img"
		viewBox="0 0 256 512"
	>
		<path
			fill="currentColor"
			d="M168 345.941V44c0-6.627-5.373-12-12-12h-56c-6.627 0-12 5.373-12 12v301.941H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.569 9.373 33.941 0l86.059-86.059c15.119-15.119 4.411-40.971-16.971-40.971H168z"
		/>
	</svg>
);
