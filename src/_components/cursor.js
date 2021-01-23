import useMousePosition from '../hooks/useMousePosition';
import '../style/main.scss';

const Cursor = () => {
    const { x, y } = useMousePosition();
    return (
        <div>

        <div style={{left: x, top: y}} className="circle"></div>
     
        </div>

    )
}
export default Cursor;