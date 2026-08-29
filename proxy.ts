import { NextResponse, type NextRequest } from 'next/server';

const SITES_HOSTNAME = 'brendoh.brendohxd.chatgpt.site';

export function proxy(request: NextRequest) {
  const hostname = request.headers.get('host')?.split(':')[0].toLowerCase();

  if (hostname !== SITES_HOSTNAME) {
    return NextResponse.next();
  }

  const destination = new URL(request.url);
  destination.protocol = 'https:';
  destination.hostname = 'brendoh.com';
  destination.port = '';

  return NextResponse.redirect(destination, 308);
}

export const config = {
  matcher: '/:path*',
};
