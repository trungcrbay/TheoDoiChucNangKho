
import Image from 'next/image'

interface IAvatar {
    src : string;
    width:number;
    height:number;
    alt:string;
    className:string;
}

const Avatar = (props : IAvatar) => {
    return (
        <Image 
        alt={props.alt}
        width={props.width}
        height={props.height}
        src={props.src}
        className={`${props.className} `}
        loading='lazy'
        />
    )
}

export default Avatar