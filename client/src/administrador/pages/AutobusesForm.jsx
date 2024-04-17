import {Form, Formik} from 'formik'
import {createAutobusRequest, updateAutobusRequest, deleteAutobusRequest} from '../../api/autobuses.api.js'


export const AutobusesForm = () => {
    let action = ""
    return (
        <div className='container'>
            <h1 className='text-primary  mt-4 mb-4'>Administrar Autobuses</h1>
            <div className='border border-primary' style={{backgroundColor: "#cfe2ff"}} >
                <Formik
                    initialValues={
                        {
                            idcamion : null,
                            placa : "",
                            numAsientos: 0,
                            
                        }
                    }
                    onSubmit={async (values) => {
                        try {
                            switch(action){
                                case 'Guardar':
                                    await createAutobusRequest(values)
                                break;
                                case 'Actualizar':
                                    const {idcamion, ...res} = values
                                    await updateAutobusRequest(idcamion, res)
                                break;
                                case 'Eliminar':
                                    await deleteAutobusRequest(values.idcamion)
                                break;
                                
                            }
                        
                        } catch (error) {
                            console.log(error)
                        }
                    }}
                >
                {({handleChange, handleSubmit}) => (
                    <Form onSubmit={handleSubmit}>
                    <label className='form-label'>ID</label>
                    <input className='form-control' type="text" name='idcamion' onChange={handleChange} placeholder="ID de Autobus"/>
                    <label className='form-label'>Placa</label>
                    <input className='form-control' type="text" name='placa' onChange={handleChange} placeholder="Placa"/>
                    <label className='form-label'>Número de Asientos</label>
                    <input className='form-control' type="text" name='numAsientos' onChange={handleChange} placeholder="Número de Asientos"/>
                    <div className='grid text-center'>
                        <button className='m-3 btn btn-light btn-outline-primary ' type='submit' onClick={() => action = 'Guardar'}>Guardar</button>
                        <button className='m-3 btn btn-light btn-outline-primary ' type='submit'>Buscar</button>
                        <button className='m-3 btn btn-light btn-outline-primary ' type='submit' onClick={() => action = 'Actualizar'}>Actualizar</button>
                        <button className='m-3 btn btn-light btn-outline-primary ' type='submit' onClick={() => action = 'Eliminar'}>Eliminar</button>
                    </div>
                </Form>
                )}
                </Formik>
            </div>
        </div>
    )
}