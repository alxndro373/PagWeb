
const Table = ({title,cols,values, onDelete}) => {

    
    return (
        <div className="container">
        <h2 className="mt-4 mb-4 text-primary">{title}</h2>
        <div className="border border-primary">
            <table className="table table-primary">
                <thead>
                    
                    <tr className="table-light">
                           {
                            Object.keys(cols).map((key,index) => (
                                <th key={index}>{key}</th>
                            ))
                           }
                    </tr>
                    
                </thead>
                <tbody>
                    {
                        values.map((value,index) => (
                            <tr key={index++}>
                                {Object.keys(value).map((key,index) => (
                                    
                                    <td key={index}>{value[key]}</td>
                                ))}
                                <td><button onClick={() => onDelete(index)} className="btn btn-outline-danger">Eliminar</button></td>
                                <td><button className="btn btn-outline-success">Editar</button></td>
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