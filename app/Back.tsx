/*
 * Copyright (C) 2023 Codex Microsystems. Some rights reserved. This work is
 * licensed under the terms of the MIT license which can be found in the
 * root directory of this project.
 */

"use client";

import { useRouter } from "next/navigation";

export default function Back() {
    const router = useRouter();
    return (
        <button type="submit" onClick={() => router.push("/")}>Add Entry</button>
    );
}