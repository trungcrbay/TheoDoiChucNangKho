
import Image from 'next/image'

interface IEmptyImage {
    className: string;
    width: number;
    height: number;
}

const EmptyImage = (props: IEmptyImage) => {
    return (

        <Image
            width={props.width}
            height={props.height}
            alt='Empty image'
            src={'/empty-image.png'}
            className={props.className}
            loading='lazy'
        />
    )
}

export default EmptyImage