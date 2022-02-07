import "./Modal.css";

function Modal(props: any) {
    const { children, display, closeModal } = props
    if(display){
        return (
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <span className="close" onClick={closeModal}>&times;</span>
                    <p>
                        {children}
                    </p>
                </div>
            </div>
        )
    }
    return <></>
}

Modal.defaultProps = {
    content: <></>,
    display: false
};

export default Modal