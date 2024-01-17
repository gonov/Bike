import axios from 'axios';
import React from 'react';

export default function SignUpPage() {
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/signup', Object.fromEntries(new FormData(e.target)));
      if (response.status === 200) window.location = '/';
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <form onSubmit={submitHandler} className="container">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Name
          <input name="name" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
          <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
          <input name="password" type="password" className="form-control" id="exampleInputPassword1" />
        </label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}
