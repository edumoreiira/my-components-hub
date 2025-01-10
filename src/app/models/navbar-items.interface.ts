export interface NavbarSections {
    label: string;
    collapsed: boolean;
    items: NavbarItem[];
}

export interface NavbarItem {
    name: string;
    icon: string;
    route: string;
}