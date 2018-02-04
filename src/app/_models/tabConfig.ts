class Tab {
    name: string;
    route: string;
}
export class TabConfig {
    selectedIndex: number;
    tabNav: Array<Tab>;
    loading?: boolean;
}
