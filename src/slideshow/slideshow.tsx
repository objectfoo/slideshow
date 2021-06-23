import { useMemo, useState, createRef } from "react";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import "./slideshow.css";

export type SlideShowData = {
	id: string;
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
	const clampToSlides = clamp(0, data.length - 1);
	const leftDisabled = selected  === 0;
	const rightDisabled = selected === data.length - 1;

	return (
		<div>
			<div>
				<button disabled={leftDisabled} onClick={() => {
					setDir("left");
					setSelected(clampToSlides(selected - 1));
				}}>prev</button>
				<button disabled={rightDisabled} onClick={() => {
					setDir("right");
					setSelected(clampToSlides(selected + 1));
				}}>next</button>
			</div>
			<TransitionGroup className={`list ${dir}`}>
				{data.filter((_, idx) => idx === selected).map((slide) => {
					const nodeRef = createRef<HTMLDivElement>();
					return (
						<CSSTransition nodeRef={nodeRef} classNames="example" in={true} key={slide.id} timeout={300} enter exit>
							<div style={{ width: 200 }} ref={nodeRef}>
								<div style={{ margin: "4px", border: "1px solid #ccc", background: "#f0f0f0"}}>
									{repeat(slide.times, (i) => <p key={`${slide.title}-${i}`}>{slide.title}</p>)}
								</div>
							</div>
						</CSSTransition>
					);
				})}
			</TransitionGroup>
		</div>
	);
};

const repeat = (times: number, fn: (idx: number) => JSX.Element) => (
	new Array(times).fill(null).map((_, idx) => fn(idx))
);
