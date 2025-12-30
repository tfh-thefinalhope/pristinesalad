import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";


export const dynamic = 'force-static';

const dataFilePath = path.join(process.cwd(), "data", "content.json");

export async function GET() {
    try {
        // Read data from file
        const fileContents = fs.readFileSync(dataFilePath, "utf8");
        const data = JSON.parse(fileContents);
        return NextResponse.json(data);
    } catch (error) {
        console.error("Error reading content:", error);
        return NextResponse.json({ error: "Failed to read content" }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Validate body structure briefly (optional)
        if (!body || typeof body !== 'object') {
            return NextResponse.json({ error: "Invalid data" }, { status: 400 });
        }

        // Write back to file
        fs.writeFileSync(dataFilePath, JSON.stringify(body, null, 2), "utf8");

        return NextResponse.json({ success: true, message: "Content updated successfully" });
    } catch (error) {
        console.error("Error writing content:", error);
        return NextResponse.json({ error: "Failed to save content" }, { status: 500 });
    }
}
