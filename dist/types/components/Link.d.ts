import React from "react";
export declare function LinkWithPlus({ title }: {
    title: string;
}): import("react/jsx-runtime").JSX.Element;
export declare function LinkWithDownArrow({ title }: {
    title: string;
}): import("react/jsx-runtime").JSX.Element;
export declare function LinkWithArrow({ title }: {
    title: string;
}): import("react/jsx-runtime").JSX.Element;
export interface InternalLinkProps {
    href?: string;
    children?: React.ReactNode;
    title?: string | {
        value: string;
    };
    className?: string;
    onClick?: () => void;
}
export declare function InternalLink(props: InternalLinkProps): import("react/jsx-runtime").JSX.Element;
export interface ExternalLinkProps {
    href?: string;
    target?: string;
    children?: React.ReactNode;
    title?: string;
    className?: string;
}
export declare function ExternalLink(props: ExternalLinkProps): import("react/jsx-runtime").JSX.Element;
export interface LinkProps {
    href?: string;
    title?: string | {
        value: string;
        sheetUrl?: string;
    };
    className?: string;
    children?: React.ReactNode;
}
export declare function Link(props: LinkProps): import("react/jsx-runtime").JSX.Element;
