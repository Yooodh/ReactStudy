import World from "./World";
import styles from "./Hello.module.css";

// // const Hello = function () {
// const Hello = () => {
//     <p>Hello</p>
// };

// export default Hello;

export default function Hello() {
    return (
        <div>
            <h1 style={{
                    color : '#f00',
                    borderRight : '2px solid #000',
                    marginBottom : '30px',
                    opacity : 1,
            }}>Hello</h1>
            <div className={styles.box} >Hello</div>
        </div>
    );
}