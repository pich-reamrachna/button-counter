import { turso } from "$lib/server/db";
import { json } from "@sveltejs/kit";

// fetch current count value
export async function GET() {
    try {
        const result = await turso.execute(`
        SELECT count
        FROM counter
        where id = 1
        `);

    const row = result.rows?.[0];
    if (!row) {
        return json({ error: "Counter not found"}, { status: 404 });
    }

    return json({ count: Number(row.count) });
    } 
    catch (err) {
        console.error(err);
        return json({ error: "Failed to fetch count" }, { status: 500 });
    }
}

// Add +1 to the count with id "1" when button is clicked
export async function POST() {
    try {
        const result = await turso.execute(`
        UPDATE counter
        SET count = count + 1
        WHERE id = 1
        RETURNING count
            `);
    const newCount = result.rows[0].count // return new count in the first row (index 0)
    return json ({ count: newCount}) 
    }
    catch (err) {
        console.error(err)
        return json({ error: "Failed to update"}, {status: 500})
    }
}