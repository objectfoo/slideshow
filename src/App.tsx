import './App.css';
import { SlideShow } from "./slideshow/slideshow";

const data = [
	{ id: 0, title: "number one", times: 1 },
	{ id: 1, title: "number two", times: 3 },
	{ id: 2, title: "number three", times: 2 },
	{ id: 3, title: "number four", times: 1 },
	{ id: 4, title: "number five", times: 3 },
	{ id: 5, title: "number six", times: 1 },
	{ id: 6, title: "number seven", times: 1 },
];

const App: React.FC = () => {
	return (
		<div className="app">
			<SlideShow data={data} />
		</div>
	);
}

export default App;
