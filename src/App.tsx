import { v4 } from "uuid";
import './App.css';
import { SlideShow } from "./slideshow/slideshow";

const data = [
	{ id: v4(), title: "number one", times: 1 },
	{ id: v4(), title: "number two", times: 3 },
	{ id: v4(), title: "number three", times: 2 },
	{ id: v4(), title: "number four", times: 1 },
	{ id: v4(), title: "number five", times: 3 },
	{ id: v4(), title: "number six", times: 1 },
	{ id: v4(), title: "number seven", times: 1 },
	{ id: v4(), title: "number eight", times: 1 },
	{ id: v4(), title: "number nine", times: 1 },
	{ id: v4(), title: "number ten", times: 1 },
	{ id: v4(), title: "number eleven", times: 1 },
	{ id: v4(), title: "number twelve", times: 1 },
];

const App: React.FC = () => {
	return (
		<div className="app">
			<SlideShow data={data} />
		</div>
	);
}

export default App;
