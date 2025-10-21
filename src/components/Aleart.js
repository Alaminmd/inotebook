
const Aleart = ({ type = 'success', message, onClose }) => {
    if (!message) return null;
    return (
        <div className={`alert alert-${type} alert-dismissible fade show d-flex`} role="alert" style={{height: "90%"}}>
            {message}
            <button type="button" className="btn-close" onClick={onClose}></button>
        </div>
    )
}

export default Aleart