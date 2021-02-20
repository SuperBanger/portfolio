export const themes: IDropdownItem[] = [
    {
        value: 'light',
        locale: 't-light',
        icon: 'light-theme'
    },
    {
        value: 'dark',
        locale: 't-dark',
        icon: 'dark-theme'
    },
    {
        value: 'highcontrast',
        locale: 't-highcontrast',
        icon: 'highcontrast-theme'
    }
];

export const languages: IDropdownItem[] = [
    {
        value: 'en',
        locale: 't-en',
        icon: 'en-flag'
    },
    {
        value: 'ru',
        locale: 't-ru',
        icon: 'ru-flag'
    },
    {
        value: 'pl',
        locale: 't-pl',
        icon: 'pl-flag'
    }
];
export const aboutMeWidgetData: IVSCodeWidgetData = {
    widgetName: 't-about',
    infoTagName: 'about-me',
    items: [
        {
            label: 'name',
            locale: 't-name'
        },
        {
            label: 'surname',
            locale: 't-surname'
        },
        {
            label: 'date-of-birth',
            locale: 't-date-of-birth'
        },
        {
            label: 'job-title',
            locale: 't-job-title'
        },
        {
            label: 'city',
            locale: 't-city'
        }
    ],
    photo: {
        tabName: 't-my-photo',
        className: 'my-img'
    }
};

export const educationWidgetData: IVSCodeWidgetData = {
    widgetName: 't-education',
    infoTagName: 'education',
    items: [
        {
            label: 'university',
            locale: 't-university'
        },
        {
            label: 'faculty',
            locale: 't-faculty'
        },
        {
            label: 'degree',
            locale: 't-degree'
        },
        {
            label: 'specialty',
            locale: 't-specialty'
        },
        {
            label: 'qualification',
            locale: 't-qualification'
        },
        {
            label: 'years',
            locale: 't-years'
        }
    ]
};
