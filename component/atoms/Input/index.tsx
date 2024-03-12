
type ButtonType = 'button' | 'submit' | 'reset' | undefined;
interface IInput {
    type?: ButtonType;
    className:string;
}

const Logo = (props : IInput) => {
    return (
        <input
        type={props.type}
        className={`${props.className} bg-gray-50 outline-green-600 border border-gray-300 rounded-lg w-full block`}
        />
    )
}

export default Logo