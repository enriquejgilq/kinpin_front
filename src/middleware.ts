import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  console.log("🔍 Middleware ejecutándose en:", req.nextUrl.pathname); // 🔍 Debug

  const token = req.cookies.get("token")?.value;
  const isAuth = Boolean(token);

   const publicRoutes = ["/login", "/register", "/forgot-password"];

   const protectedRoutes = ["/dashboard"];

  const { pathname } = req.nextUrl;

  // Si el usuario está autenticado y va a una ruta pública, redirigir a dashboard
  if (isAuth && publicRoutes.includes(pathname)) {
    console.log("🔄 Usuario autenticado, redirigiendo a /dashboard");
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // Si el usuario NO está autenticado e intenta entrar a una ruta privada, redirigir a login
  if (!isAuth && protectedRoutes.some((route) => pathname.startsWith(route))) {
    console.log("🚫 Usuario no autenticado, redirigiendo a /login");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/register", "/forgot-password"],
};
