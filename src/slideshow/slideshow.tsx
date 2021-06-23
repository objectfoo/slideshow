import { useMemo, useState } from "react";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import "./slideshow.css";

export type SlideShowData = {
	id: number;
	title: string;
	times: number;
};

const clamp = (min: number, max: number) => (x: number) => Math.min(max, Math.max(min, x));

export const SlideShow: React.FC<{
	data: SlideShowData[];
}> = (props) => {
	const { data } = props;
	const [selected, setSelected] = useState(0);
	const [dir, setDir] = useState<"left"|"right">("left");
	const slides = useMemo(() => data, [data]);
	const clampToSlides = clamp(0, slides.length - 1);

	return (
		<div>
			<div>
				<button disabled={selected === 0} onClick={() => {
					setDir("left");
					setSelected(clampToSlides(selected - 1));
				}}>prev</button>
				<button disabled={selected === slides.length - 1} onClick={() => {
					setDir("right");
					setSelected(clampToSlides(selected + 1));
				}}>next</button>
			</div>
			<TransitionGroup className={`list ${dir}`}>
				{slides.filter((s) => s.id === selected).map((slide) => {
					return (
						<CSSTransition classNames="example" in={selected === slide.id} key={slide.id} timeout={300} enter exit>
							<div style={{ width: 200 }}>
								<div style={{ margin: "4px", border: "1px solid #ccc", background: "#f0f0f0"}}>
									{new Array(slide.times).fill(null).map(() => <p>{slide.title}</p>)}
								</div>
							</div>
						</CSSTransition>
					);
				})}
			</TransitionGroup>
		</div>
	);
};
