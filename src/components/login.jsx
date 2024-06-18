'use client'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Login() {
  return (
    <div className="mx-auto max-w-md space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-blue-500">Iniciar sesión</h1>
        <p className="text-gray-500 dark:text-gray-400">Ingresa tus credenciales para acceder a Edutromu.</p>
      </div>
      <Card
        className="bg-white border border-slate-200 border-blue-300 shadow-md dark:border-slate-800">
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-blue-500">
              Correo electrónico
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              className="border border-blue-300 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-blue-500">
              Contraseña
            </Label>
            <Input
              id="password"
              type="password"
              required
              className="border border-blue-300 focus:ring-blue-500 focus:border-blue-500" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white"><Link href="/dashboard/inicio">Iniciar sesión</Link></Button>
        </CardFooter>
      </Card>
      <div className="text-center text-sm text-gray-500 dark:text-gray-400">
        <Link
          href="#"
          className="underline underline-offset-4 hover:text-blue-600 dark:hover:text-blue-400"
          prefetch={false}>
          ¿Olvidaste tu contraseña?
        </Link>
      </div>
    </div>
  );
}
