interface IDropdownItem {
    value: string;
    locale: string;
    icon: string;
}
interface ICodeItems {
    label: string;
    locale: string;
}
interface IVSCodeWidgetData {
    widgetName: string;
    infoTagName: string;
    items: ICodeItems[];
}
