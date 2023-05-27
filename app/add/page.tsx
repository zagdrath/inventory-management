/*
 * Copyright (C) 2023 Codex Microsystems. Some rights reserved. This work is
 * licensed under the terms of the MIT license which can be found in the
 * root directory of this project.
 */

"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { useRouter } from 'next/navigation';
import { PrismaClient } from "@prisma/client"

export const metadata: Metadata = {
    title: "Add Entry"
};

export default function Page() {
    const [manufacturer, setManufacturer] = useState("");
    const [model, setModel] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [image, setImage] = useState("");

    const router = useRouter();

    const create = async () => {
        const prisma = new PrismaClient();

        await prisma.entry.create({
            data: {
                manufacturer,
                model,
                description,
                category,
                quantity,
                image
            }
        });

        setManufacturer("");
        setModel("");
        setDescription("");
        setCategory("");
        setQuantity(0);
        setImage("");

        router.refresh();
    }

    return (
        <form onSubmit={create}>
            <h2>Add Entry</h2>
            <label htmlFor="manufacturer">Manufacturer:</label><br />
            <input
                type="text"
                name="manufacturer"
                value={manufacturer}
                onChange={(e) => setManufacturer(e.target.value)}
            /><br /><br />
            <label htmlFor="model">Model:</label><br />
            <input
                type="text"
                name="model"
                value={model}
                onChange={(e) => setModel(e.target.value)}
            /><br /><br />
            <label htmlFor="description">Description:</label><br />
            <input
                type="text"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            /><br /><br />
            <label htmlFor="category">Category:</label><br />
            <input
                type="text"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            /><br /><br />
            <label htmlFor="quantity">Quantity:</label><br />
            <input
                type="number"
                name="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.valueAsNumber)}
            /><br /><br />
            {/* <label htmlFor="quantity">Image:</label><br />
            <input
                type="file"
                name="image"
                value={image}
            /><br /><br /> */}
            <button type="submit">Add Entry</button>
        </form>
    );
}