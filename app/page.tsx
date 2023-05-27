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
    const res = prisma.entry.findMany({

    });
    return res;
}

async function getCount() {
    "use server";
    return (
        prisma.entry.count()
    );
}

function Entry({ entry }: any) {
    const { id, manufacturer, model, description, category, quantity, image } = entry || {};
    return (
        <tr>
            <td>
                <Link href={image}>
                    <Image
                        src={image}
                        width={50}
                        height={50}
                        alt="image"
                    />
                </Link>
            </td>
            <td>{manufacturer}</td>
            <td>{model}</td>
            <td>{description}</td>
            <td>{category}</td>
            <td>{quantity}</td>
            <td><Link href={`/edit/${id}`}>Edit</Link></td>
            <td><Link href={`/delete/${id}`}>Delete</Link></td>
        </tr>
    );
}

export default async function Page() {
    const entries = await getEntries();
    return (
        <div>
            <h2>Inventory</h2>
            <Link href="/add">Add Entry</Link>
            <table className="main-table">
                <tbody>
                    <tr>
                        <td align="left">
                            <form action="">
                                Show&nbsp;
                                <select name="show-entries" id="show-entries">
                                    <option value="10">10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                </select>
                                &nbsp;entries
                            </form>
                        </td>
                        <td align="right">
                            <form action="">
                                <select name="sort" id="sort">
                                    <option value="manufacturer">Manufacturer</option>
                                    <option value="model">Model</option>
                                    <option value="description">Description</option>
                                    <option value="category">Category</option>
                                    <option value="quantity">Quantity</option>
                                </select>&nbsp;
                                <input type="text" />&nbsp;
                                <button>Search</button>
                            </form>
                        </td>
                    </tr>
                </tbody>
            </table><br />
            <table className="main-table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Manufacturer</th>
                        <th>Model</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Quantity</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {entries?.map((entry) => {
                        return <Entry key={entry.id} entry={entry} />
                    })}
                </tbody>
            </table>
        </div>
    );
}