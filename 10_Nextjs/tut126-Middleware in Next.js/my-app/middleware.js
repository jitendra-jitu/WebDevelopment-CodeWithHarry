// import { NextResponse } from 'next/server'
 
// // This function can be marked `async` if using `await` inside
// export function middleware(request) {

//     // You can use the `request` object to perform server-side logic
//     return NextResponse.json({welcome:"middleware checking correctly.."})

//     //you can also use the `request` object to redirect to another page
//     return NextResponse.redirect(new URL('/', request.url))
// }
 
// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }




import { NextResponse } from 'next/server'
 
export function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.rewrite(new URL('/', request.url))
  }
 
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.rewrite(new URL('/', request.url))
  }
}