import {Form, Formik} from 'formik'

const Foorm = ({fields, handleCreate, fetch, action, saveAction, showAction}) => {
    console.log(action)
    return (
        <Formik
            initialValues={
                fields
            }
            onSubmit={async (values) => {
                try {
                    switch (action) {
                        case 'Guardar':
                            handleCreate(values)
                            console.log("hola")

                            break;
                        case 'Consultar':
                            fetch()
                            break;

                    }

                } catch (error) {
                    console.log(error)
                }
            }}
        >
            {({ handleChange, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                    {
                        Object.keys(fields).map((ele,key) => (
                            <div key={key}>
                                <label className='form-label'>{ele}</label>
                                <input className='form-control' type="text" name={ele} onChange={handleChange} placeholder={ele} />
                            </div>
                        ))
                    }
                    <div className='grid text-center'>
                        <button className='m-3 btn btn-light btn-outline-primary' type='submit' onClick={() => saveAction()}>Guardar</button>
                        <button className='m-3 btn btn-light btn-outline-primary' type='submit' onClick={() => showAction()}>Consultar</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default Foorm