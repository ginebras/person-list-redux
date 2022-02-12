import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export default function EditPerson() {
  const personState = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [editPerson, setPerson] = useState({
    id: 0,
    name: '',
    email: '',
    number: 0,
  });

  const { id } = useParams();
  const { name, email, number } = editPerson;

  useEffect(() => {
    if (personState.editPerson) setPerson(personState.editPerson);
  }, []);

  const handleChange = (e) => {
    setPerson({
      ...editPerson,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    dispatch({
      type: 'UPDATE_PERSON',
      payload: editPerson,
    });

    setTimeout(() => {
      navigate('/');
    }, [1000]);
  };

  return (
    <div className="container">
      <h1 className="display-3 text-center">Edit person {id}</h1>
      {editPerson ? (
        <>
          <div className="row">
            <div className="col-md-6 p-5 mx-auto shadow">
              <form onSubmit={handleUpdate}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    placeholder="name"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    id="name"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    id="email"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="number">Number</label>
                  <input
                    type="number"
                    placeholder="Number"
                    name="number"
                    value={number}
                    onChange={handleChange}
                    id="number"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <Link to="/" className="btn btn-danger mr-3">
                    Cancel
                  </Link>
                  <button className="btn btn-block btn-dark">Add person</button>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
