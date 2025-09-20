// app/api/ping/route.ts
import { NextResponse } from "next/server";

export type PingResponse = {
  ok: true;
  message: string;
  timestamp: string;
};

export async function GET(): Promise<NextResponse<PingResponse>> {
  const body: PingResponse = {
    ok: true,
    message: 123,              // ❌ Type 'number' is not assignable to type 'string'
    timestamp: new Date().toISOString(),
  };
  return NextResponse.json(body);
}