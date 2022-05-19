import Link from "next/link"
import React, { FunctionComponent, ReactElement } from "react";
import { useRouter } from "next/router";
import _default from "next/dist/client/router";
import { prependOnceListener } from "process";


type LinkProps = {
    href: string,
    children: ReactElement
    activeClass: string
} 

const ActiveLink: React.FunctionComponent<LinkProps> = ({children, ...props}) => {
    const { pathname } = useRouter()
    let className = children.props.className || ""
    let _defualtClass = `${className} text-indigo-400 ${props.activeClass} `
if (pathname === prependOnceListener.href) {
    className
} else {
    className = _defaultClass;
}

return (
    <Link {...props}>
        react.cloneElement(children, {class})
    </Link>
)
}

export default ActiveLink;