import React, { lazy, Suspense } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
const UserRegister = lazy(() => import('../components/UserRegister'));
const ListComponent = lazy(() => import('../components/ListComponent'));
const LoaderComponent = lazy(() => import('../components/LoaderComponent'));
export default (
    <Suspense fallback={<LoaderComponent />}>
        <Routes>
            <Route exact path="/" element={<ListComponent />} />
            <Route path="/about" element={<UserRegister />} />           
            <Route path="*" element={<NoMatch />} />
        </Routes>
    </Suspense>
);
function NoMatch() {
    let location = useLocation();
    return (
        <div className="text-center">
            <article>
                <h1 className="text-danger">No match <code>{location.pathname}</code></h1>
                <h4 className="text-danger">Please check your Route Configuration</h4>               
                <h2 className="mt-5">
                    <Link className="nav-link" to="/">Back to Home</Link>
                </h2>
            </article>
        </div>
    );
}