import React from 'react';
import { Link } from 'react-router-dom';

const REgister = () => {
    return (
        <div>
            <h1>Please register kore felo</h1>
            <form>
                <input type="email" />
                <br />
                <input type="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <Link to="/login">Already Register?</Link>
        </div>
    );
};

export default REgister;