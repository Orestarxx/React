import React, {useEffect, useState} from 'react';
import {getAxiousAlbums} from "../../axios.service/axious.service";
import {AlbumBuild} from "../AlbumsBuild/AlbumBuild";

const Album = () => {
    let [albums,setAlbums] = useState([])

    useEffect(() =>{
        getAxiousAlbums().then(value => setAlbums(value.data))
    },[])
    return (
        <div>
          <div>{albums.map(album =><AlbumBuild album={album}/>)}</div>
        </div>
    );
};

export {Album} ;