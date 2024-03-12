
import Link from 'next/link'

interface ILink {
    className: string;
    href: string;
    children: React.ReactNode | string;
}

const LinkComponent = (props: ILink) => {
    return (
        <Link href={props.href} className={`${props.className} `}>
            {props.children}
        </Link>
    )
}

export default LinkComponent