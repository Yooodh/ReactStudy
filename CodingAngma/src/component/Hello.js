// // const Hello = function () {
// const Hello = () => {
//     <p>Hello</p>
// };

import World from "./World";

// export default Hello;

export default function Hello() {
    return (
        <div>
            <h1>Hello</h1>
            <World />
            <World />
        </div>
    );
}