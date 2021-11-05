import React from 'react';
import featured from '../../../images/vaccineBg.jpg'


const FeaturedService = () => {
    return (
        <section className="features-service pb-0 pb-md-5 my-5">
            
            <div className="container mb-5">
            
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img className="img-fluid" src={featured} alt=""/>
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>Early vaccination is important to prevent diseases</h1>
                        <p className="text-secondary my-5">
                        Many vaccines are recommended early in life to protect young children from dangerous infectious diseases. In order to reduce the number of shots a child receives in a doctor’s visit, some vaccines are offered as combination vaccines. A combination vaccine is two or more different vaccines that have been combined into a single shot. Combination vaccines have been in use in the United States since the mid-1940s. Examples of combination vaccines are: DTap (diphtheria-tetanus-pertussis), trivalent IPV (three strains of inactivated polio vaccine), MMR (measles-mumps-rubella), DTap-Hib, and Hib-Hep B.
                        </p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default FeaturedService;