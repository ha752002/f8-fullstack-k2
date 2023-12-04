import {Metadata} from "next";
import React from "react";
import {Locale} from "@/i18n.config";
import {Providers} from "@/app/provider";
import "./global.css"
export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout(props : {children: React.ReactNode}) {
    return (
        <html suppressHydrationWarning={true}>
        <body>
        <Providers {...props}/></body>
        </html>
    )
}