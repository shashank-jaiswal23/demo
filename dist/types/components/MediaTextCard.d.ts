export interface MediaTextCardProps {
    media?: {
        data?: {
            id?: number;
            attributes?: {
                url?: string;
                mime?: string;
                width?: number;
                height?: number;
                formats?: any;
                [key: string]: any;
            };
        };
    };
    title?: string | {
        value: string;
        sheetUrl?: string;
    };
    text?: string | {
        value: string;
        sheetUrl?: string;
    };
    link?: {
        Title: string;
        URL: string;
    };
    layout?: 'Left' | 'Right';
    size?: 'Small' | 'Medium' | 'Large' | 'Full' | 'Padding';
    margin?: 'None' | 'Regular' | 'Large';
    displaySeperator?: boolean;
    navSlug?: string;
    colorTheme?: 'Default' | 'Grey' | 'Black' | 'Blur';
    className?: string;
}
export declare function MediaTextCard(props: MediaTextCardProps): import("react/jsx-runtime").JSX.Element;
