import React from 'react';

const NovedadItem = (props) => {
    const {tittle, subtittle, imagen, body}= props;

    return(
        <div className="novedades">
            <h1>{title}</h1>
            <h2>{subtittle}</h2>
            <img src={imagen}/>
            <div dangerouslySetInnerHTML={{__html: body}}/>
            <hr />
        </div>
    );
}

export default NovedadItem;