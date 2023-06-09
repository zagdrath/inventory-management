/*
 * Copyright (C) 2023 Codex Microsystems. Some rights reserved. This work is
 * licensed under the terms of the MIT license which can be found in the
 * root directory of this project.
 */

import Back from "../Back";
import type { Metadata } from "next";
import prisma from "../../lib/prisma";

export const metadata: Metadata = {
    title: "Add Entry"
};

export default function Page() {
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
                <table>
                    <tbody>
                        <tr>
                            <td><label htmlFor="manufacturer">Manufacturer:</label><br /><br /></td>
                            <td>
                                <input
                                    type="text"
                                    name="manufacturer"
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