import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();

    return (
        <div className="container text-center mt-5">
            <div className="alert alert-danger p-4 shadow-sm rounded">
                <h1 className="display-4">Oops!!!</h1>
                <p className="lead">Something went wrong!!</p>
                <hr />
                <h5 className="mb-0">
                    {err.status}: {err.statusText}
                </h5>
            </div>
        </div>
    );
};

export default Error;
