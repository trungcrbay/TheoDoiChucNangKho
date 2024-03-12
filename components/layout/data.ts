import { MenuProps } from "antd";
type MenuItem = Required<MenuProps>['items'][number];
function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuProps['items'] = [

    getItem('Trang chủ', '/'),
    getItem('Kho tài nguyên', '/warehouse'),
    getItem('Khách cần mua gấp', '/feeds/urgently'),

    getItem('Tin hoạt động', 'sub1', null, [
        getItem('Thông báo vụ chốt', '5'),
        getItem('Công ty', '6'),
        getItem('Phòng', '7'),
        getItem('Nhóm', '8'),
    ]),

    getItem('Quy định và hướng dẫn', '/chat'),

    getItem('Danh sách công ty', '10'),

    getItem('Thư viện nhà phố', 'sub2', null, [
        getItem('Thư viện kiến thức', '11'),
        getItem('Chia sẻ kỹ năng', '12'),
        getItem('Thư viện Trưởng phòng', '13'),
        getItem('Thư viện Đầu chủ', '14'),
        getItem('Thư viện Trợ lý', '15'),
    ]),

    getItem('Quản lý kho hàng', 'sub3', null, [
        getItem('Kho cá nhân', '16'),
        getItem('Kho tin chính chủ', '17'),
        getItem('Kho hàng tự do', '18'),
        getItem('Lịch sử Đầu khách đặt lịch', '19'),
        getItem('Lịch sử đầu khách báo cáo', '20'),
    ]),

    getItem('Tài khoản cá nhân', 'sub4', null, [
        getItem('QL khách - Tự khớp khách', '21'),
        getItem('Lịch sử đặt lịch', '22'),
        getItem('Lịch sử báo cáo', '23'),
        getItem('Bộ sưu tập', '24'),
        getItem('Trang cá nhân', '25'),
    ]),
    getItem('Đăng xuất', '26'),
    getItem('Trang quản trị', '27'),
];

export default items;