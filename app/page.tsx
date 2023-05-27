/*
 * Copyright (C) 2023 Codex Microsystems. Some rights reserved. This work is
 * licensed under the terms of the MIT license which can be found in the
 * root directory of this project.
 */

import Link from "next/link";
import Image from "next/image";
import prisma from "../lib/prisma";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Inventory"
};

async function getEntries() {
    const res = prisma.entry.findMany();
    return res;
}

function Entry({ entry }: any) {
    const { manufacturer, model, description, category, quantity, image } = entry || {};
    return (
        <tr>
            <td>
                {/* <Link href={image}>
                    <Image
                        src={image}
                        width={50}
                        height={50}
                        alt="image"
                    />
                </Link> */}
            </td>
            <td>{manufacturer}</td>
            <td>{model}</td>
            <td>{description}</td>
            <td>{category}</td>
            <td>{quantity}</td>
        </tr>
    );
}

export default async function Page() {
    const entries = await getEntries();
    return (
        <div>
            <h2>Inventory</h2>
            <Link href="/add">Add Entry</Link>
            <table>
                <tbody>
                    <tr>
                        <th></th>
                        <th>Manufacturer</th>
                        <th>Model</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Quantity</th>
                    </tr>
                    {entries?.map((entry) => {
                        return <Entry key={entry.id} entry={entry} />
                    })}
                </tbody>
            </table>
        </div>
    );
}