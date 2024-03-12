import Image from 'next/image'

const Header = () => {

    return (

        <div className="bg-white h-16 flex items-center justify-between p-6 border border-b-1">
            <Image
                src="/logo.png"
                width={40}
                height={40}
                alt="logo nha pho"
                className='cursor-pointer'
            />

            <div>
                <div className='flex items-center gap-4'>
                    <Image
                        src="/header/clock.svg"
                        width={40}
                        height={40}
                        alt="logo nha pho"
                        className='cursor-pointer'
                    />
                    <Image
                        src="/header/Component 2.svg"
                        width={40}
                        height={40}
                        alt="logo nha pho"
                        className='cursor-pointer'
                    />
                    <Image
                        src="/header/messenger.svg"
                        width={40}
                        height={40}
                        alt="logo nha pho"
                        className='cursor-pointer'
                    />
                    <Image
                        src="/header/notify.svg"
                        width={40}
                        height={40}
                        alt="logo nha pho"
                        className='cursor-pointer'
                    />
                    <Image
                        src="/header/avatar.svg"
                        width={40}
                        height={40}
                        alt="logo nha pho"
                        className='cursor-pointer'
                    />
                </div>
            </div>

        </div>
    )
}

export default Header;