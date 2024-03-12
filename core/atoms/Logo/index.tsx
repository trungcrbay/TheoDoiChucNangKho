
import Link from 'next/link'
import Image from 'next/image'

interface ILogo {
    className: string;
    width: number;
    height: number;
}

const Logo = (props: ILogo) => {
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

export default Logo