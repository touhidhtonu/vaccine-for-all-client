import React from 'react';
import { Link } from 'react-router-dom';


const HeaderMain = () => {
    return (
        <main style={{ height: '300px' }} className="row d-flex align-items-center">
            <div className="col-md-4 col-md-12 ">
                
                <h1 style={{ color: 'black', textAlign:'center'}}>Get Your Vaccines Here</h1>
                {/* <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p> */}
                
            <div className= "text-center">
            <Link to="/getVaccine" className='btn btn-outline-success' >GET VACCINE</Link>
            </div>    
                
                
            
            </div>
           
        </main>
    );
};

export default HeaderMain;