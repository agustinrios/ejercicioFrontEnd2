import React, { Fragment } from 'react';
import User from './User';

const Usuario = ({usuario}) => {
    
    return (
        <Fragment>
            <div className="row">
                {usuario.map(user => (
                    <User 
                        key={user.url}
                        user={user}
                    />
                ))}
            </div>
        </Fragment>
      );
    }

export default Usuario;