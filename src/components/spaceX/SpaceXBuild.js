export  default function SpaceBuild(props){
    let{item:space} = props;
    return(<div className='launcher'>
        <div>{space.mission_name}</div>
        <div>{space.launch_year}</div>
        <img src={space.links.mission_patch_small} alt=""/>
    </div>)
}