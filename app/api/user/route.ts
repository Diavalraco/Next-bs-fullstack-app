import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export function GET(req:NextResponse){
    return NextResponse.json({
        email:"aarush@gmail.com",
        name: "Aarush"
    })
}
export async function POST(req: NextRequest) {
    const body = await req.json();

    const user = await client.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    });

    console.log(user.id);

    return NextResponse.json({ message: "Signed up" });
}