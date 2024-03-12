
type InputType = 'button' | 'submit' | 'reset' | undefined;
interface ICheckBox {
    type?: InputType;
    className:string;
}

const Logo = (props : ICheckBox) => {
    return (
        <input
        type={'checkbox'}
        className={`${props.className} bg-gray-50 outline-green-600 border border-gray-300 rounded-lg w-full block`}
        />
    )
}

export default Logo