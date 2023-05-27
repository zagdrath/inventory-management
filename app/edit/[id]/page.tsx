/*
 * Copyright (C) 2023 Codex Microsystems. Some rights reserved. This work is
 * licensed under the terms of the MIT license which can be found in the
 * root directory of this project.
 */

import Back from "../../Back";
import type { Metadata } from "next";
import prisma from "../../../lib/prisma";

export const metadata: Metadata = {
    title: "Edit Entry"
};

export default async function Page({ params }: any) {
    async function getEntries() {
        "use server";
        return await prisma.entry.findUnique({
            where: {
                id: Number(params.id)
            },
            select: {
                manufacturer: true,
                model: true,
                description: true,
                category: true,
                quantity: true,
                image: true
            }
        })
    }

    async function update(formData: FormData) {
        "use server";
        await prisma.entry.update({
            where: {
                id: Number(params.id)
            },
            data: {
                manufacturer: formData.get("manufacturer") as string,
                model: formData.get("model") as string,
                description: formData.get("description") as string,
                category: formData.get("category") as string,
                quantity: formData.get("quantity") as string,
                image: formData.get("image") as string
            }
        })
    }

    const entry = await getEntries();

    return (
        <div>
            <form action={update}>
                <h2>Edit Entry</h2>
                <table>
                    <tbody>
                        <tr>
                            <td><label htmlFor="manufacturer">Manufacturer:</label><br /><br /></td>
                            <td>
                                <input
                                    type="text"
                                    name="manufacturer"
                                    defaultValue={entry.manufacturer}
                                    required
                                /><br /><br />
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="model">Model:</label><br /><br /></td>
                            <td>
                                <input
                                    type="text"
                                    name="model"
                                    defaultValue={entry.model}
                                    required
                                /><br /><br />
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="description">Description:</label><br /><br /></td>
                            <td>
                                <input
                                    type="text"
                                    name="description"
                                    defaultValue={entry.description}
                                    required
                                /><br /><br />
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="category">Category:</label><br /><br /></td>
                            <td>
                                <input
                                    type="text"
                                    name="category"
                                    defaultValue={entry.category}
                                    required
                                /><br /><br />
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="quantity">Quantity:</label><br /><br /></td>
                            <td>
                                <input
                                    type="text"
                                    name="quantity"
                                    defaultValue={entry.quantity}
                                    required
                                /><br /><br />
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="image">Image:</label><br /><br /></td>
                            <td>
                                <input
                                    type="text"
                                    name="image"
                                    defaultValue={entry.image}
                                    required
                                /><br /><br />
                            </td>
                        </tr>
                        <tr>
                            <td><Back /></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}