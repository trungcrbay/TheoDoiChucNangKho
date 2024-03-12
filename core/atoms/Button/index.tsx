
type ButtonType = 'button' | 'submit' | 'reset' | undefined;
interface IButton {
    children: React.ReactNode;
    onClick?: () => void;
    className: string;
    type?: ButtonType;
    title: string;
    disabled?: boolean;
}

const Button = (props: IButton) => {
    return (
        <button
            onClick={props?.onClick}
            className={`${props.className} px-3 py-2 w-full bg-primaryColor rounded-lg hover:bg-hoverPrimaryColor font-medium text-white`}
            type={props?.type}
            title={props.title}
            disabled={props?.disabled}
        >
            {props.children}
        </button>
    )
}

export default Button