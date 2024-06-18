"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

export function Diary() {
  const [activeLink, setActiveLink] = useState("calendar")
  const [showModal, setShowModal] = useState(false)
  const [selectedWorker, setSelectedWorker] = useState("")
  const [selectedVehicle, setSelectedVehicle] = useState("")
  const [isPlowing, setIsPlowing] = useState(false)
  const [isSpraying, setIsSpraying] = useState(false)
  const [isFertilizing, setIsFertilizing] = useState(false)
  const [selectedCrop, setSelectedCrop] = useState("")
  const [selectedDate, setSelectedDate] = useState(null)
  const handleSubmit = () => {
    console.log({
      worker: selectedWorker,
      vehicle: selectedVehicle,
      isPlowing,
      isSpraying,
      isFertilizing,
      crop: selectedCrop,
      date: selectedDate,
    })
    setShowModal(false)
  }
  const handleDateSelect = (date) => {
    setSelectedDate(date)
    setShowModal(true)
  }
  return (
    <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex flex-col gap-2">
          <div className="flex h-[60px] items-center px-6">
            <Link href="#" className="flex items-center gap-2 font-semibold" prefetch={false}>
              <Package2Icon className="h-6 w-6" />
              <span className="">EduTromu</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                href="/dashboard/inicio"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${activeLink === "home"
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
                href="/dashboard/users"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${activeLink === "users"
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
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${activeLink === "lands"
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
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${activeLink === "calendar"
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
                href="#"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${activeLink === "settings"
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
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Link href="#" className="lg:hidden" prefetch={false}>
            <Package2Icon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          <div className="flex-1">
            <h1 className="font-semibold text-lg">Calendario</h1>
          </div>
          <div className="flex flex-1 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <Button variant="outline" className="flex items-center gap-2" onClick={() => setShowModal(true)}>
              <PlusIcon className="h-4 w-4" />
              Agregar Trabajo
            </Button>
            {showModal && (
              <Dialog open={showModal} onOpenChange={setShowModal}>
                <DialogContent className="sm:max-w-[525px]">
                  <DialogHeader>
                    <DialogTitle>Agregar Trabajo</DialogTitle>
                    <DialogDescription>Ingrese los detalles del trabajo a agregar.</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="flex flex-row gap-4 items-center">
                      <Label htmlFor="worker" className="text-left w-1/2">
                        Trabajador
                      </Label>
                      <Select
                        id="worker"
                        value={selectedWorker}
                        onValueChange={setSelectedWorker}
                        className="col-span-2 w-2/3"
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Seleccionar trabajador" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="worker1">Trabajador 1</SelectItem>
                          <SelectItem value="worker2">Trabajador 2</SelectItem>
                          <SelectItem value="worker3">Trabajador 3</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex flex-row gap-4 items-center">
                      <Label htmlFor="vehicle" className="text-left w-1/2">
                        Vehículo
                      </Label>
                      <Select
                        id="vehicle"
                        value={selectedVehicle}
                        onValueChange={setSelectedVehicle}
                        className="col-span-2 w-2/3"
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Seleccionar vehículo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tractor1">Tractor 1</SelectItem>
                          <SelectItem value="tractor2">Tractor 2</SelectItem>
                          <SelectItem value="truck1">Camión 1</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex flex-row gap-4 items-center">
                      <Label htmlFor="type" className="text-left w-1/2">
                        Tipo de Trabajo
                      </Label>
                      <div className="col-span-2 flex items-center gap-4 w-2/3">
                        <div className="flex items-center gap-2">
                          <Checkbox id="plowing" checked={isPlowing} onCheckedChange={setIsPlowing} />
                          <Label htmlFor="plowing">Arado</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <Checkbox id="spraying" checked={isSpraying} onCheckedChange={setIsSpraying} />
                          <Label htmlFor="spraying">Fumigación</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <Checkbox id="fertilizing" checked={isFertilizing} onCheckedChange={setIsFertilizing} />
                          <Label htmlFor="fertilizing">Fertilización</Label>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4 items-center">
                      <Label htmlFor="crop" className="text-left w-1/2">
                        Cultivo
                      </Label>
                      <Select
                        id="crop"
                        value={selectedCrop}
                        onValueChange={setSelectedCrop}
                        className="col-span-2 w-2/3"
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Seleccionar cultivo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="maiz">Maíz</SelectItem>
                          <SelectItem value="soja">Soja</SelectItem>
                          <SelectItem value="trigo">Trigo</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex flex-row gap-4 items-center">
                      <Label htmlFor="date" className="text-left w-1/2">
                        Fecha
                      </Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="col-span-2 flex items-center justify-between w-full">
                            {selectedDate ? format(selectedDate, "dd/MM/yyyy") : "Seleccionar fecha"}
                            <ChevronDownIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="p-0 max-w-[276px]">
                          <Calendar mode="single" value={selectedDate} onValueChange={handleDateSelect} />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit" onClick={handleSubmit}>
                      Guardar
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            )}
            <form className="ml-auto flex-1 sm:flex-initial">
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  type="search"
                  placeholder="Buscar trabajos..."
                  className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] bg-white"
                />
              </div>
            </form>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <img src="/placeholder.svg" width="32" height="32" className="rounded-full" alt="Avatar" />
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
          <div className="flex w-full gap-4">
            <Card className="w-1/3">
              <CardHeader>
                <CardTitle>Calendario de Trabajo</CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="month"
                  initialFocus
                  onSelect={handleDateSelect}
                  className="p-0 [&_td]:w-10 [&_td]:h-10 [&_th]:w-10 [&_[name=day]]:w-10 [&_[name=day]]:h-10 [&>div]:space-x-0 [&>div]:gap-6"
                />
              </CardContent>
            </Card>
            <div className="flex-1 w-2/3">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">ID</TableHead>
                  <TableHead>Trabajo</TableHead>
                  <TableHead>Fecha</TableHead>
                  <TableHead>Estado</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="bg-green-100">
                  <TableCell className="font-medium">1</TableCell>
                  <TableCell>Revisión de tierras</TableCell>
                  <TableCell>18 Jun 2024</TableCell>
                  <TableCell className="bg-green-500 text-white px-2 py-1 rounded">Completo</TableCell>
                </TableRow>
                <TableRow className="bg-orange-100">
                  <TableCell className="font-medium">2</TableCell>
                  <TableCell>Plantación</TableCell>
                  <TableCell>20 Jun 2024</TableCell>
                  <TableCell className="bg-orange-500 text-white px-2 py-1 rounded">Pendiente</TableCell>
                </TableRow>
                <TableRow className="bg-yellow-100">
                  <TableCell className="font-medium">3</TableCell>
                  <TableCell>Riego</TableCell>
                  <TableCell>22 Jun 2024</TableCell>
                  <TableCell className="bg-yellow-500 text-white px-2 py-1 rounded">En progreso</TableCell>
                </TableRow>
                <TableRow className="bg-green-100">
                  <TableCell className="font-medium">4</TableCell>
                  <TableCell>Cosecha</TableCell>
                  <TableCell>25 Jun 2024</TableCell>
                  <TableCell className="bg-green-500 text-white px-2 py-1 rounded">Completo</TableCell>
                </TableRow>
                <TableRow className="bg-orange-100">
                  <TableCell className="font-medium">5</TableCell>
                  <TableCell>Fertilización</TableCell>
                  <TableCell>27 Jun 2024</TableCell>
                  <TableCell className="bg-orange-500 text-white px-2 py-1 rounded">Pendiente</TableCell>
                </TableRow>
                <TableRow className="bg-yellow-100">
                  <TableCell className="font-medium">6</TableCell>
                  <TableCell>Poda</TableCell>
                  <TableCell>30 Jun 2024</TableCell>
                  <TableCell className="bg-yellow-500 text-white px-2 py-1 rounded">En progreso</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          </div>
        </main>
      </div>
    </div>
  )
}

function CalendarDaysIcon(props) {
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
    </svg>
  )
}


function ChevronDownIcon(props) {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}


function HomeIcon(props) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function Package2Icon(props) {
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
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}


function PackageIcon(props) {
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
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}


function PlusIcon(props) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function SettingsIcon(props) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function UsersIcon(props) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}