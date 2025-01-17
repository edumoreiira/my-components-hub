export interface SidebarSections {
    label: string;
    collapsed: boolean;
    items: SidebarItem[];
}

export interface SidebarItem {
    name: string;
    icon: string;
    route: string;
}