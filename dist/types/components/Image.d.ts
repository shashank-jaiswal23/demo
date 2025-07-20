export interface ImageProps {
    alt?: string;
    url?: string;
    className?: string;
    height?: number;
    width?: number;
    lazy?: 'eager' | 'lazy';
    caption?: string;
}
export declare function Image(props: ImageProps): import("react/jsx-runtime").JSX.Element | null;
