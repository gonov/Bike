import React from 'react';
import axios from 'axios';

export default function AddPage() {
    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/add', Object.fromEntries(new FormData(e.target)))
            if (response.status === 200);
              alert(`Маршрут ${response.data.title} был успешно добавлен!`);
              setTimeout(() => {
                window.location = '/profile';
              }, 500);
            } catch (error) {
                alert(error.response.data.message);
            }
        
      };
      return (
    
        <form onSubmit={submitHandler} className="container">
          <div className="mb-3">
            <label htmlFor="titleId" className="form-label" > Название маршрута
              <input name="title" type="text" className="form-control" id="titleId" />
            </label >
          </div>
          <div className="mb-3">
            <label htmlFor="cityId" className="form-label">Город
            <input name="city" type="text" className="form-control" id="cityId" />
            </label>  
          </div>
          <div className="mb-3">
            <label htmlFor="startId" className="form-label"> Старт 
            <input name="start" type="text" id="startId" />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="finishId" className="form-label"> Финиш
            <input name="finish" type="text" id="finishId" />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="imgId" className="form-label"> Изображение
            <input name="img" type="text" id="img" />
            </label>
          <div className="invalid-feedback">
              Image has to start with http
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Добавить</button>
        </form>
      );
    }
    
