interface IDropdownItem {
    value: string;
    locale: string;
    icon: string;
}
interface ICodeItems {
    label: string;
    locale: string;
}
interface IHtmlCodeData {
    infoTagName: string;
    items: ICodeItems[];
}
interface IPhotoData {
    tabName: string;
    className: string;
}
interface IVSCodeWidgetData {
    widgetName: string;
    infoTagName: string;
    items: ICodeItems[];
    photo?: IPhotoData;
}
