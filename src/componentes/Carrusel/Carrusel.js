import './Carrusel.css';

function Carrusel (){
    return(
    <div  className="carrusel ">
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner" style={{ maxHeight: '450px' }}>
            <div className="carousel-item active" style={{ maxHeight: '450px' }}>
                <img src="/img/banner1.png" className="d-block w-100 img-fluid" alt="Banner 1" style={{ maxHeight: '400px' }} />
            </div>
            <div className="carousel-item" style={{ maxHeight: '450px' }}>
                <img src="/img/banner2.png" className="d-block w-100 img-fluid" alt="Banner 2" style={{ maxHeight: '400px' }} />
            </div>
            <div className="carousel-item" style={{ maxHeight: '450px' }}>
                <img src="/img/banner3.png" className="d-block w-100 img-fluid" alt="Banner 3" style={{ maxHeight: '400px' }} />
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
        <br></br>
    </ div>
    


    );
}

export default Carrusel;