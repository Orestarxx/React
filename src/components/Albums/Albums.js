import React, {useEffect, useState} from 'react';
import {albumsService} from "../../service/albums.service";
import {AlbumsBuild} from "./AlbumsBuild";

const Albums = () => {
    const [albums,setAlbums] = useState([])
    useEffect(() =>{
        albumsService.getAll().then(({data}) =>setAlbums(data))
    },[])
    return (
        <div>
      <div>{albums.map(album =><AlbumsBuild album={album} key={album.id}/>)}</div>
        </div>
    );
};

export {Albums} ;