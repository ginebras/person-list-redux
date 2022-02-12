import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark py-2">
      <Link to="/" className="navbar-brand ml-5">
        React redux contact list
      </Link>
    </nav>
  );
}
