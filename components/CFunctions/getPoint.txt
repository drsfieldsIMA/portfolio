/** @format */

import { ReactElement, ReactNode } from "react";

export default function getPoint(
	myTarget: ReactElement,
	myOutput: ReactElement
) {
	const target = myTarget.current;

	const output = myOutput.current;

	const copystr = target;
	console.log(copystr);
	/* let stringWithoutLineBreaks = copystr.replace(/[\r\n]+/gm, ""); //remove those line breaks
	console.log(stringWithoutLineBreaks);
	let strings = stringWithoutLineBreaks.split(" ");
	console.log(strings);
	const stringElements = strings.length;
	console.log(stringElements);
	document.body.onload = addElement; */

	function addElement() {
		// create a new div element
		let newDiv = document.createElement("p");
		newDiv.classList.add("test_0");
		// and give it some content
		let newContent = document.createTextNode(strings[0]);

		// add the text node to the newly created div
		newDiv.appendChild(newContent);

		// add the newly created element and its content into the DOM
		let currentDiv = document.getElementById("target");
		currentDiv.after(newDiv);
		currentDiv.classList.add("d-none");
		for (let i = 1; i < 4; i = i + 1) {
			console.log(i);
			newDiv = document.createElement("p");
			console.log("newDiv=", newDiv);
			let newString = "test_" + i;
			console.log("newstring=", newString);
			newDiv.classList.add(newString);

			newContent = document.createTextNode(strings[i]);
			console.log("newContent=", newContent);
			let textNode = newDiv.appendChild(newContent);
			console.log("textNode=", textNode);
			let j = i - 1;
			console.log("j=", j);
			let currentDiv = document.querySelector(".test_" + j);
			console.log("currentDiv=", currentDiv);
			document.querySelector(".test_" + j).after(newDiv);
		}
	}
}
