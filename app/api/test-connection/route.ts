import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();

    // Ping the database
    await db.admin().ping();

    return NextResponse.json({ message: 'Database Connected' }, { status: 200 });
  } catch (error) {
    console.error('MongoDB connection error:', error);
    return NextResponse.json({ message: 'Database Connection Failed' }, { status: 500 });
  }
}
