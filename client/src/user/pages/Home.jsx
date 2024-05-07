import Nav from '../components/Navbar.jsx'
import p1 from '../assets/travel2.jpg'
import p2 from '../assets/travel3.jpg'
import p3 from '../assets/collage.jpeg'
import fondo from '../assets/backTravel.jpeg'
export const Home = () => {

    return (
        <>
            <Nav />
            <div className='vh-100' style={{fontFamily: 'Oswald, sans-serif'}}>
                <div className="row " style={{width: "100%"}}>
                    <div className="col-md-6 d-flex justify-content-center" style={{marginTop: "9%"}}>
                        <div style={{position: "relative"}}>
                            <img src={fondo} alt="" className="img-fluid" style={{position: "relative", left: "-7%"}}/>
                            <div style={{}}>
                                <img src={p3} alt="" className="img-fluid" style={{position: "absolute", top: "15%", width: "420px", height: "280px", opacity:"0.5"}}/>
                                <img src={p2} alt="" className="img-fluid" style={{position: "absolute", top: "18%", left: "36%", width: "290px", height: "180px", transform:"rotate(-9deg)"}}/>
                                <img src={p1} alt="" className="img-fluid" style={{position: "absolute", top: "50%", left: "30%", width: "290px", height: "180px"}}/>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-start align-items-end" style={{marginTop: "5%"}}>
                        <div style={{marginRight: "15%"}}>
                            <h2 style={{fontStyle: "normal", fontSize: "25px"}}>Siempre hay un nuevo destino por descubrir</h2>
                            <h2 style={{fontStyle: "normal", fontSize: "25px", textAlign: "center"}}>¡Elige el tuyo!</h2>
                            <h2 style={{fontStyle: "normal", fontSize: "25px", textAlign: "center" }}>Nosotros te llevamos</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}