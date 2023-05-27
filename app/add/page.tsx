/*
 * Copyright (C) 2023 Codex Microsystems. Some rights reserved. This work is
 * licensed under the terms of the MIT license which can be found in the
 * root directory of this project.
 */

import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import prisma from "../../lib/prisma";

export const metadata: Metadata = {
    title: "Add Entry"
};

export default async function Page() {
    async function create(formData: FormData) {
        "use server";
        await prisma.entry.create({
            data: {
                manufacturer: formData.get("manufacturer") as string,
                model: formData.get("model") as string,
                description: formData.get("description") as string,
                category: formData.get("category") as string,
                quantity: formData.get("quantity") as string,
                image: formData.get("image") as string
            }
        });
    }

    return (
        <div>
            <form action={create}>
                <h2>Add Entry</h2>
                <label htmlFor="manufacturer">Manufacturer:</label><br />
                <input
                    type="text"
                    name="manufacturer"
                /><br /><br />
                <label htmlFor="model">Model:</label><br />
                <input
                    type="text"
                    name="model"
                /><br /><br />
                <label htmlFor="description">Description:</label><br />
                <input
                    type="text"
                    name="description"
                /><br /><br />
                <label htmlFor="category">Category:</label><br />
                <input
                    type="text"
                    name="category"
                /><br /><br />
                <label htmlFor="quantity">Quantity:</label><br />
                <input
                    type="text"
                    name="quantity"
                /><br /><br />
                <label htmlFor="quantity">Image:</label><br />
                <input
                    type="text"
                    name="image"
                /><br /><br />
                <button type="submit">Add Entry</button>
            </form>
            <br />
            <Link href={"/"}>
                <Image
                    src={"/back.gif"}
                    height={32}
                    width={36}
                    alt="back"
                />
            </Link>
        </div>
    );
}