
import Link from 'next/link'
import Image from 'next/image'

interface IRating {
    className: string;
    width: number;
    height: number;
}

const Rating = (props: IRating) => {
    return (
        <Link href={'/'}>
            <figure>
                <Image
                    width={props.width}
                    height={props.height}
                    alt='Logo image'
                    src={'/logo.png'}
                    className={props.className}
                />
            </figure>
        </Link>
    )
}

export default Rating