import React, { Fragment } from 'react';

const User = ({user}) => {
    //extraer variables
    const { name, username, phone, website } = user;

    return (
        <Fragment>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className="card">
                    <div className="card-body">
                        <h4>{name}</h4>
                        <h4>{username} </h4>
                        <p>{phone} </p>
                        <p>{website} </p>
                    </div>
                </div>
            </div>
        </Fragment>
      );
    }

export default User;