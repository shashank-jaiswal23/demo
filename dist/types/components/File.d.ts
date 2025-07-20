export interface FileProps {
    className?: string;
    displayVideoPlayer?: boolean;
    data?: {
        id?: number;
        attributes?: {
            url?: string;
            mime?: string;
            width?: number;
            height?: number;
            [key: string]: any;
        };
    };
    type?: string;
}
export declare function File({ className, displayVideoPlayer, data, type }: FileProps): import("react/jsx-runtime").JSX.Element | null;
