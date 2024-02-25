import { Client } from '@notionhq/client';
import { NextRequest, NextResponse } from 'next/server';

const notionSecret = process.env.DB_SECRET;
const galleryDb = process.env.DB_GALLERY_ID;

const notion = new Client({ auth: notionSecret });

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(req: NextRequest, res: NextResponse) {
  if (!notionSecret || !galleryDb) {
    return NextResponse.json(
      { error: { code: 406, message: 'Credentials not found' }, success: false },
      { status: 406 },
    );
  }
  try {
    const query = await notion.databases.query({
      database_id: galleryDb,
      filter: {
        property: 'deployment_status',
        status: {
          equals: 'Live',
        },
      },
      sorts: [
        {
          property: 'Name',
          direction: 'ascending',
        },
      ],
    });
    const data = query.results;
    return NextResponse.json({ data, success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: { code: 500, message: 'Internal Server Error' }, success: false, data: { error } },
      { status: 500 },
    );
  }
}

export const dynamic = 'force-dynamic';
