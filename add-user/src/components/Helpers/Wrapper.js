//Dirty trick.
//This component does nothing other than pass along the children elements.
//The requirement for JSX is that there be only one root element and this works.
const Wrapper = props => props.children;
export default Wrapper;