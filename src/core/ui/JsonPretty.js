/**
 * It takes in a JSON object, stringifies it, and then returns a prettified version of it
 * @param props - This is the object that contains all the properties passed to the component.
 * @returns {JSX.Element} - A React component that takes in a prop called children and returns a pre-formatted string of the children prop.
 */
export const JsonPretty = props => {
    const prettyData = JSON.stringify(props.children, null, 2);
    return <pre> {prettyData} </pre>;
};
