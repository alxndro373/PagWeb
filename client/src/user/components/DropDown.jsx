import i1 from '../assets/busIcon.png'

export const DropDown = ({ title, items, onChange}) => {

    const onSelectedChange = (e) => {
        onChange(e.target.value)
    }

    return (
        <div className='fw-bold' style={{ fontSize: "20px", background: "white", marginTop: "9%" }}>
            <label>{title}</label>
            <select id={title} onChange={onSelectedChange} style={{ width: "90%", borderRadius: "5px", border: "none" }}>
                {
                    items.map((item,key) => (
                        <option key={key} value={item.estado}>{item.estado}</option>
                    ))
                }
            </select>
            <img src={i1} />
        </div>
        
    )
}