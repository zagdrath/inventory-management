/*
 * Copyright (C) 2023 Codex Microsystems. Some rights reserved. This work is
 * licensed under the terms of the MIT license which can be found in the
 * root directory of this project.
 */

import "./globals.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                {children}
                <hr />
                <p>Copyright &copy; 2023 Codex Microsystems. Some rights reserved.</p>
            </body>
        </html>
    );
}