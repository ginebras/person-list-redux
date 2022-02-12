import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function AddPerson() {
  const personState = useSelector((state) => state);
  const dispatch = useDispatch();

  const [person, setPerson] = useState({
    id: 0,
    name: '',
    email: '',
    number: 0,
  });

  const { name, email, number } = person;

  const handleChange = (e) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    person.id = personState.persons.length + 1;

    dispatch({
      type: 'ADD',
      payload: person,
    });
  };

  return (
    <div className="container">
      <h1 className="display-3 text-center">Add person</h1>
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="name"
                value={name}
                onChange={handleChange}
                name="name"
                id="name"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleChange}
                name="email"
                id="email"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="number">Number</label>
              <input
                type="number"
                placeholder="Number"
                value={number}
                onChange={handleChange}
                name="number"
                id="number"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <button className="btn btn-block btn-dark">Add person</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
