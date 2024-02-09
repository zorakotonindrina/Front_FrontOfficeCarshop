import { Link } from 'react-router-dom'
import carImage from '../assets/image/f2.jpg';
import React, { useState, useEffect } from 'react';

function Recherche() {
	const headerStyle = {
		color: '#6C757D',  // Dark gray color, adjust as needed
        fontSize: '1.2em', // Adjust the font size
        paddingBottom: '5px', // Spacing between text and underline
        marginBottom: '15px', // Add some bottom margin for spacing
    };

	const titleStyle = {
        color: '#6C757D',  // Purple color, adjust as needed
        fontSize: '2em',   // Adjust the font size
        marginBottom: '20px', // Add some bottom margin for spacing
        textAlign: 'center',  // Center the text
    };

	
  const [detail_annonce, setDetail_annonces] = useState([]);
const token = localStorage.getItem('token');
const handleFavori = async (e,id_annonce) => {
	console.log("miditraaa ",id_annonce);
    e.preventDefault();
    const apiUrl = `https://carshopbackend-production-477a.up.railway.app/carshop/Utilisateurs/favoris/${id_annonce}`;
    const requestOptions = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    };
	
    try {
      const response = await fetch(apiUrl, requestOptions);
		
      if (!response.ok) {
        throw new Error('La requête a échoué.');
      }
	  const data = await response.json();
      console.log(data.data)
    } catch (error) {
      console.error('Erreur lors de la requête à l\'API:', error);
    }
  };



  const [nom_marque, setNom_marque] = useState('');
  const handlerechercheMarque = async (e) => {
    e.preventDefault();
    const apiUrl = 'https://carshopbackend-production-477a.up.railway.app/carshop/Detail_annonces/rechercherParMarque?marque=' + nom_marque;
    const requestOptions = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    };
	
    try {
      const response = await fetch(apiUrl, requestOptions);
		
      if (!response.ok) {
        throw new Error('La requête a échoué.');
      }
      const data = await response.json();
      console.log(data.data)
      setDetail_annonces(data.data);
    } catch (error) {
      console.error('Erreur lors de la requête à l\'API:', error);
    }
  };
  
///

const [nom_modele, setNom_modele] = useState('');
const handlerechercheModele = async (e) => {
  e.preventDefault();
  const apiUrl = 'https://carshopbackend-production-477a.up.railway.app/carshop/Detail_annonces/rechercherParModele?modele=' + nom_modele;
  const requestOptions = {
	method: 'GET',
	headers: {
	  'Authorization': `Bearer ${token}`,
	  'Content-Type': 'application/json',
	},
  };
  
  try {
	const response = await fetch(apiUrl, requestOptions);
	  
	if (!response.ok) {
	  throw new Error('La requête a échoué.');
	}
	const data = await response.json();
	console.log(data.data)
	setDetail_annonces(data.data);
  } catch (error) {
	console.error('Erreur lors de la requête à l\'API:', error);
  }
};

const [nom_type, setNom_type] = useState('');
const handlerechercheType = async (e) => {
  e.preventDefault();
  const apiUrl = 'https://carshopbackend-production-477a.up.railway.app/carshop/Detail_annonces/rechercherParCategorie?Categorie=' + nom_type;
  const requestOptions = {
	method: 'GET',
	headers: {
	  'Authorization': `Bearer ${token}`,
	  'Content-Type': 'application/json',
	},
  };
  
  try {
	const response = await fetch(apiUrl, requestOptions);
	  
	if (!response.ok) {
	  throw new Error('La requête a échoué.');
	}
	const data = await response.json();
	console.log(data.data)
	setDetail_annonces(data.data);
  } catch (error) {
	console.error('Erreur lors de la requête à l\'API:', error);
  }
};
  return (
    <div>
        
		<div className="container"  style={{marginTop: 150 + 'px'}}>
			
		</div>		

		<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="model-search-content">
							<h2 style={titleStyle}>Recherche multicritere</h2>
							<div className="row">
								<div className="col-md-offset-1 col-md-2 col-sm-12">	
									<h4 style={headerStyle}>Description</h4>
									<input className="form-control" type='text' placeholder='Description'></input>{/* /.select*/}
									<hr/>

									<h4 style={headerStyle}>Model</h4>
									<input className="form-control" type='text' placeholder='Model'></input>

								</div>
								<div className="col-md-offset-1 col-md-2 col-sm-12">
									<h4 style={headerStyle}>Marqe </h4>
										<input className="form-control" type='text' placeholder='Marque '></input>{/* /.select*/}

									<hr/>

									<h4 style={headerStyle}>Type</h4>
										<input className="form-control" type='text' placeholder='Type'></input>
								</div>
								<div className="col-md-offset-1 col-md-2 col-sm-12">
									
										<h4 style={headerStyle}>Date</h4>
										<div className="row">
											<div className="col-md-6">
												<input className="form-control" type='date' />
											</div>
											<div className="col-md-6">
												<input className="form-control" type='date' />
											</div>
										</div>

										<hr/>

										<h4 style={headerStyle}>prix</h4>
										<div className="row">
											<div className="col-md-6">
												<input className="form-control" type='number' />
											</div>
											<div className="col-md-6">
												<input className="form-control" type='number' />
											</div>
										</div>
								</div>
								
								<div className="col-md-2 col-sm-12">
										<button className="welcome-btn model-search-btn" onclick="window.location.href='#'">
											Rechercher
										</button>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			




			<section id="featured-cars" className="featured-cars">
                <div className="container">
                    <div className="section-header">
                    </div>{/*/.section-header*/}
                    <div className="featured-cars-content">
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-sm-6" >
                                <div className="single-featured-cars">
                                    <div className="featured-img-box" >
                                        <div className="featured-model-info" >
										<h4 style={{ color: '#6C757D', marginBottom: '10px', textAlign: 'center' }}>Marque</h4>
										<input className="form-control" type='text'  value={nom_marque}
                                              onChange={(e) => setNom_marque(e.target.value)}
											   placeholder="Marque..."/>
										<button className="welcome-btn model-search-btn" onClick={(e)=> handlerechercheMarque(e)} >
											Rechercher
										</button>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>

							<div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="single-featured-cars">
                                    <div className="featured-img-box">
                                        <div className="featured-model-info">
										<h4 style={{ color: '#6C757D', marginBottom: '10px', textAlign: 'center' }}>Modele</h4>
										<input className="form-control" type='text'  value={nom_modele}
                                              onChange={(e) => setNom_modele(e.target.value)}
											   placeholder="Modele..."/>
										<button className="welcome-btn model-search-btn" onClick={(e)=> handlerechercheModele(e)} >
											Rechercher
										</button>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>

							<div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="single-featured-cars">
                                    <div className="featured-img-box">
                                        <div className="featured-model-info">
										<h4 style={{ color: '#6C757D', marginBottom: '10px', textAlign: 'center' }} >Categorie</h4>
										<input className="form-control" type='text'  value={nom_type}
                                              onChange={(e) => setNom_type(e.target.value)}
											   placeholder="Type..."/>
										<button className="welcome-btn model-search-btn" onClick={(e)=> handlerechercheType(e)} >
											Rechercher
										</button>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>


							<div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="single-featured-cars">
                                    <div className="featured-img-box">
                                        <div className="featured-model-info">
										<h4 style={{ color: '#6C757D', marginBottom: '10px', textAlign: 'center' }}>Prix</h4>
										<input className="form-control" type='number' placeholder="Prix 1..." />
										<br/>
										<input className="form-control" type='number' placeholder="Prix 2..." />
										<button className="welcome-btn model-search-btn" onclick="window.location.href='#'">
											Rechercher
										</button>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>{/*/.container*/}
    
            </section>{/*/.featured-cars*/}


			<section id="featured-cars" className="featured-cars">
			<div className="container">
				<div className="section-header">
					<p>checkout <span>the</span> featured cars</p>
					<h2>Annonce</h2>
				</div>{/*/.section-header*/}
				<div className="featured-cars-content">
					<div className="row">
					{detail_annonce.map((detail_annonce, index) => (
						<div className="col-lg-3 col-md-4 col-sm-6">
							<div className="single-featured-cars">
								<div className="featured-img-box">
									<div className="featured-cars-img">
									<img src={carImage} alt="Car" />
									</div>
									<div className="featured-model-info">
										<p>
										{detail_annonce.matriculation}
											<span className="featured-mi-span"> {detail_annonce.nom} {detail_annonce.prenom}</span> 
											<span className="featured-hp-span"> {detail_annonce.date_annonce}</span>
											{detail_annonce.annee}
										</p>
									</div>
								</div>
								<div className="featured-cars-txt">
									<h2> {detail_annonce.marque} {detail_annonce.modele} {detail_annonce.categorie}</h2>
									<h3>Prix : {detail_annonce.prix}</h3>
									<p>
									{detail_annonce.descriptions}
									</p>
									<button className="welcome-btn new-cars-btn" onClick={(e)=> handleFavori(e, detail_annonce.id_annonce)}   style={{ marginRight: '10px' }}>
											J'aime bien
											</button>
									<button className="welcome-btn new-cars-btn" onClick="window.location.href='index.html'">
										<Link to={`/details/${detail_annonce.id_annonce}`} className='details' ><span>Voir details</span></Link>
									</button>
								</div>
							</div>
						</div>
						
					))}	
						
						
						
					</div>
					
				</div>
			</div>{/*/.container*/}

		</section>{/*/.featured-cars*/}

			

    </div>
    
  )
}

export default Recherche