import React from 'react'

export const Breakfast = () => {
  return (
    <div className='cards-container'>
      <div className="card">
        <div className="card-title">
          <h2>Desayuno #1</h2>
          <div className="card-food-name">
          <h3>Huevos con Salchichas y Espinacas</h3>
            <div className="card-image">
              <img src="#" alt="" />
            </div>
          </div>
        </div>
        <div className="card-content">
            <div className="card-content-quantity">
              <p>1-tbsp</p>
              <p>2-pzs</p>
              <p>1-pzs</p>
              <p>1-pzs</p>
              <p>1-tza</p>
            </div>
            <div className="card-content-ingredients">
              <p>Aceite de oliva/aguacate</p>
              <p>Huevos</p>
              <p>Salchica</p>
              <p>Chile Jalapeño</p>
              <p>Espinacas</p>
            </div>
        </div>
        <div className="btn-see-instructions">
        <button>
          <span className="material-icons">
            outdoor_grill
          </span>
          Ver instrucciones
          </button>
        </div>
      </div>

      <div className="card">
        <div className="card-title">
          <h2>Desayuno #1</h2>
          <div className="card-food-name">
          <h3>Huevos con Salchichas y Espinacas</h3>
            <div className="card-image">
              <img src="#" alt="" />
            </div>
          </div>
        </div>
        <div className="card-content">
            <div className="card-content-quantity">
              <p>1-tbsp</p>
              <p>2-pzs</p>
              <p>1-pzs</p>
              <p>1-pzs</p>
              <p>1-tza</p>
            </div>
            <div className="card-content-ingredients">
              <p>Aceite de oliva/aguacate</p>
              <p>Huevos</p>
              <p>Salchica</p>
              <p>Chile Jalapeño</p>
              <p>Espinacas</p>
            </div>
        </div>
        <div className="btn-see-instructions">
          <button>
          <span className="material-icons">
            outdoor_grill
          </span>
          Ver instrucciones
          </button>
        </div>
      </div>
    </div>
  )
}

