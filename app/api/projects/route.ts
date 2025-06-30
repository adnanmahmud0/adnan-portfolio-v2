import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      title,
      description,
      techStack,
      repoLink,
      liveLink,
      features,
      imageUrl
    } = body;

    if (!title || !description) {
      return NextResponse.json({ message: 'Title and description are required' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db();
    const result = await db.collection('projects').insertOne({
      title,
      description,
      techStack,
      repoLink,
      liveLink,
      features,
      imageUrl,
      createdAt: new Date()
    });

    return NextResponse.json({ message: 'Project added successfully', insertedId: result.insertedId }, { status: 201 });
  } catch (error) {
    console.error('Error adding project:', error);
    return NextResponse.json({ message: 'Failed to add project' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();
    const projects = await db.collection('projects').find().sort({ createdAt: -1 }).toArray();

    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json({ message: 'Failed to fetch projects' }, { status: 500 });
  }
}
