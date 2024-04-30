
const Table = ({title,cols,values, onDelete}) => {

    
    return (
        <div className="container">
        <h2 className="mt-4 mb-4 text-dark">{title}</h2>
        <div className="border">
            <table className="table">
                <thead>
                    
                    <tr className="table-light">
                           {
                            Object.keys(cols).map((key,index) => (
                                <th key={index}>{key}</th>
                            ))
                           }
                           <th>Eliminar</th>
                           <th>Actualizar</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {
                        values.map((value,index) => (
                            <tr key={index++}>
                                {Object.keys(value).map((key,index) => (
                                    
                                    <td key={index}>{value[key]}</td>
                                ))}
                                <td><button onClick={() => onDelete(index)} className="btn"><i className="bi bi-trash3-fill"></i></button></td>
                                <td> <button className="btn"><i className="bi bi-pencil-square"></i></button> </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>

    </div>
    )
}
export default Table