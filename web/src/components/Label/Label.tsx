import "./Label.css";

function Label(props : any) {
    const { children } = props
    return (
        <label className="label">{children}</label>
    )
}

Label.defaultProps = {
    content: <></>,
};

export default Label