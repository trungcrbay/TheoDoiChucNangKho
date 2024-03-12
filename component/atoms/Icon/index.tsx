
interface IIcon {
    path:string;
}

const Icon = (props: IIcon) => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d={props.path} fill="#0E181C" fill-opacity="0.8" />
        </svg>

    )
}

export default Icon