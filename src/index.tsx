import { createEffect } from "solid-js";
import { render } from "solid-js/web";

console.log("hi");

render(() => {
    let ref: HTMLDivElement | undefined = undefined;

    createEffect(() => {
        if (ref) {
            console.log("dinky ass ref")
        }
    });

    return (
        <div
            ref={ref}
        >
            hi
        </div>
    );
}, document.getElementById("main") as HTMLDivElement);