import * as React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
        <Link to="/test">Test</Link> | {' '}
        <Link to="/skills">Skills</Link> | {' '}
        <Link to="/train">Train</Link> | {' '}
        <Link to="/invoices">Invoices</Link> | {' '}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}
