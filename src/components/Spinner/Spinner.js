
const Spinner = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" style={{ margin: 'auto', background: 'rgb(255, 255, 255)', display: 'block', shapeRendering: 'auto' }} width="71px" height="71px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
			<circle cx="84" cy="50" r="10" fill="#0051a2">
				<animate attributeName="r" repeatCount="indefinite" dur="0.8928571428571428s" calcMode="spline" keyTimes="0;1" values="10;0" keySplines="0 0.5 0.5 1" begin="0s"></animate>
				<animate attributeName="fill" repeatCount="indefinite" dur="3.571428571428571s" calcMode="discrete" keyTimes="0;0.25;0.5;0.75;1" values="#0051a2;#89bff8;#408ee0;#1b75be;#0051a2" begin="0s"></animate>
			</circle><circle cx="16" cy="50" r="10" fill="#0051a2">
				<animate attributeName="r" repeatCount="indefinite" dur="3.571428571428571s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate>
				<animate attributeName="cx" repeatCount="indefinite" dur="3.571428571428571s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate>
			</circle><circle cx="50" cy="50" r="10" fill="#1b75be">
				<animate attributeName="r" repeatCount="indefinite" dur="3.571428571428571s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.8928571428571428s"></animate>
				<animate attributeName="cx" repeatCount="indefinite" dur="3.571428571428571s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.8928571428571428s"></animate>
			</circle><circle cx="84" cy="50" r="10" fill="#408ee0">
				<animate attributeName="r" repeatCount="indefinite" dur="3.571428571428571s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.7857142857142856s"></animate>
				<animate attributeName="cx" repeatCount="indefinite" dur="3.571428571428571s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.7857142857142856s"></animate>
			</circle><circle cx="16" cy="50" r="10" fill="#89bff8">
				<animate attributeName="r" repeatCount="indefinite" dur="3.571428571428571s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-2.6785714285714284s"></animate>
				<animate attributeName="cx" repeatCount="indefinite" dur="3.571428571428571s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-2.6785714285714284s"></animate>
			</circle>
		</svg>
	)
}

export default Spinner