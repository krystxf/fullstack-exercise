import NextLink, { type LinkProps as NextLinkProps } from "next/link";

type Props = NextLinkProps & {
    children: React.ReactNode;
    className?: string;
};

export function Link(props: Props) {
    const { children, className = "", ...rest } = props;

    return (
        <NextLink
            className={`${className} text-blue-500 hover:underline`}
            {...rest}
        >
            {children}
        </NextLink>
    );
}
