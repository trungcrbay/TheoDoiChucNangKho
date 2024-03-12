'use client'
import React from 'react';
import { ConfigProvider, Menu } from 'antd';
import { useRouter } from 'next/navigation'
import items from './data';


const SideBar = () => {
    const router = useRouter();

    return (
        <>
            <ConfigProvider
                theme={{
                    components: {
                        Menu: { 
                            itemActiveBg: 'rgba(0,0,0,0.6) !important',
                            itemSelectedBg:'rgba(0,0,0,0.06) !important',
                            itemSelectedColor:'#000 !important'
                        },
                    },
                }}
            >
                <Menu
                    onClick={(items) => router.push(items.key)}
                    style={{ width: 250, height: '100vh' }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    id='srollbar-sidebar'
                    items={items}
                    className='p-2 font-medium overscroll-contain scrollbar overflow-y-auto '

                />
            </ConfigProvider>

        </>

    );
}

export default SideBar;