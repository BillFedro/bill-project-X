import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = await request.json();
    const { username, password, expiresInMins } = body;

    const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password,
            expiresInMins,
        }),
        credentials: 'include'
    });

    const data = await response.json();
    if (!response.ok) {
        return NextResponse.json(data, { status: response.status });
    }

    return NextResponse.json(data);
}