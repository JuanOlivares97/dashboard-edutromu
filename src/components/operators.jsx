import { useState } from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function Operators() {
  const [activeLink, setActiveLink] = useState("users")
  return (
    (<div
      className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
      <div className="border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex flex-col gap-2">
          <div className="flex h-[60px] items-center px-6">
            <Link
              href="#"
              className="flex items-center gap-2 font-semibold"
              prefetch={false}>
              <Package2Icon className="h-6 w-6" />
              <span className="">Tractor Monitoring</span>
            </Link>
          </div>
          <div className="flex-1">
          <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                href="/dashboard/inicio"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                  activeLink === "home"
                    ? "bg-[#1E6D9E]/100 text-gray-50 dark:bg-[#1E6D9E]/100 dark:text-gray-50"
                    : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                }`}
                onClick={() => setActiveLink("home")}
                prefetch={false}
              >
                <HomeIcon className="h-4 w-4" />
                Inicio
              </Link>
              <Link
                href="/dashboard/operator"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                  activeLink === "users"
                    ? "bg-[#1E6D9E]/100 text-gray-50 dark:bg-[#1E6D9E]/100 dark:text-gray-50"
                    : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                }`}
                onClick={() => setActiveLink("users")}
                prefetch={false}
              >
                <UsersIcon className="h-4 w-4" />
                Operadores
              </Link>
              <Link
                href="/dashboard/lands"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                  activeLink === "lands"
                    ? "bg-[#1E6D9E]/100 text-gray-50 dark:bg-[#1E6D9E]/100 dark:text-gray-50"
                    : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                }`}
                onClick={() => setActiveLink("lands")}
                prefetch={false}
              >
                <PackageIcon className="h-4 w-4" />
                Tierras
              </Link>
              <Link
                href="/dashboard/calendar"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                  activeLink === "calendar"
                    ? "bg-[#1E6D9E]/100 text-gray-50 dark:bg-[#1E6D9E]/100 dark:text-gray-50"
                    : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                }`}
                onClick={() => setActiveLink("calendar")}
                prefetch={false}
              >
                <CalendarDaysIcon className="h-4 w-4" />
                Calendario
              </Link>
              <Link
                href="/dashboard/mapa"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                  activeLink === "maps"
                    ? "bg-[#1E6D9E]/100 text-gray-50 dark:bg-[#1E6D9E]/100 dark:text-gray-50"
                    : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                }`}
                onClick={() => setActiveLink("lands")}
                prefetch={false}
              >
                <GoogleMapsIcon className="h-4 w-4" />
                Mapa
              </Link>
              <Link
                href="#"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                  activeLink === "settings"
                    ? "bg-[#1E6D9E]/100 text-gray-50 dark:bg-[#1E6D9E]/100 dark:text-gray-50"
                    : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                }`}
                onClick={() => setActiveLink("settings")}
                prefetch={false}
              >
                <SettingsIcon className="h-4 w-4" />
                Configuración
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header
          className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Link href="#" className="lg:hidden" prefetch={false}>
            <Package2Icon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          <div className="flex-1">
            <h1 className="font-semibold text-lg">Operadores</h1>
          </div>
          <div className="flex flex-1 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <form className="ml-auto flex-1 sm:flex-initial">
              <div className="relative">
                <SearchIcon
                  className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  type="search"
                  placeholder="Buscar operadores..."
                  className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] bg-white" />
              </div>
            </form>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <img
                    src="/placeholder-user.jpg"
                    width="32"
                    height="32"
                    className="rounded-full"
                    alt="Avatar" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Configuración</DropdownMenuItem>
                <DropdownMenuItem>Soporte</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Cerrar sesión</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Operador 1</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Nombre:</span>
                    <span>Juan Pérez</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Edad:</span>
                    <span>35 años</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Antigüedad:</span>
                    <span>5 años</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Horas Trabajadas:</span>
                    <span>1200 horas</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Kilometros Recorridos:</span>
                    <span>12000 km</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Operador 2</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Nombre:</span>
                    <span>María Gómez</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Edad:</span>
                    <span>28 años</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Antigüedad:</span>
                    <span>3 años</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Horas Trabajadas:</span>
                    <span>900 horas</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Kilometros Recorridos:</span>
                    <span>8500 km</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Operador 3</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Nombre:</span>
                    <span>Pedro Rodríguez</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Edad:</span>
                    <span>42 años</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Antigüedad:</span>
                    <span>8 años</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Horas Trabajadas:</span>
                    <span>1500 horas</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Kilometros Recorridos:</span>
                    <span>15000 km</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>)
  );
}

function CalendarDaysIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>)
  );
}


function HomeIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>)
  );
}


function Package2Icon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>)
  );
}


function PackageIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m7.5 4.27 9 5.15" />
      <path
        d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>)
  );
}


function SearchIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>)
  );
}


function SettingsIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>)
  );
}
function GoogleMapsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 5-9 13-9 13s-9-8-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>)
  );
}
