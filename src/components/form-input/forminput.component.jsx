import "./forminput.styles.scss";

const Forminput = ({label, ...otherprops}) => {
    return(
        <div className="group">
            <input className="form-input" {...otherprops}/>
            {
            label ? <label className={`${otherprops.value.length ? "shink ": ""} form-input-label`}>{label}</label>: null
            }
        </div>
       
    )
}

export default Forminput; 