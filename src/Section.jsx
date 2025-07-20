import classnames from "classnames";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import useAppState  from "./useAppState"




export default function Section(props) {
	const [state, update] = useAppState();
	// const [ref, inView, entry] = useInView();

	const { margin, spacing, children, className, id } = props

	// useEffect(() => {
	// 	if (inView && id) {
	// 		update({
	// 			activeSection: id
	// 		})
	// 	}
	// }, [inView])

	return (
		<section id={id} className={"mx-auto relative"}>
			<div>{children}</div>
			<span className="checker absolute" />

			<style jsx>{`
				span {
					top: 100vh;
					width: 10px;
					height: 10px;
				}
			`}</style>
		</section>
	)
}
