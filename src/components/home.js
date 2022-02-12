import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export default function Home() {
  const persons = useSelector((state) => state.persons);
  const dispatch = useDispatch();

  const handleEdit = (person) => {
    dispatch({
      type: 'GET_EDIT',
      payload: person,
    });
  };

  const handleDelete = (person) => {
    dispatch({
      type: 'DELETE',
      payload: person,
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 my-5 text-right">
          <Link to="/add" className="btn btn-outline-dark">
            Add person
          </Link>
        </div>
        <div className="col-md-6 mx-auto">
          <h1>Person list </h1>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Number</th>
              </tr>
            </thead>
            <tbody>
              {persons
                ? persons.map((person, index) => (
                    <tr key={index}>
                      <td>{person.name}</td>
                      <td>{person.email}</td>
                      <td>{person.number}</td>
                      <Link
                        to={`/edit/${person.id}`}
                        onClick={() => handleEdit(person)}
                        className="btn btn-primary bg-primary"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(person)}
                        className="btn btn-danger bg-danger"
                      >
                        Delete
                      </button>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
