import React, {useEffect, useState} from 'react';

import {albumsService} from "../../service/albums.service";
import {AlbumsBuild} from "./AlbumsBuild";
import css from './albumsStyle.module.css'

const Albums = () => {
    const [albums, setAlbums] = useState([])
    useEffect(() => {
        albumsService.getAll().then(({data}) => setAlbums(data))
    }, [])
    return (
        <div>
            <div className={css.holder}>{albums.map(album => <AlbumsBuild album={album} key={album.id}/>)}</div>
        </div>
    );
};

export {Albums} ;