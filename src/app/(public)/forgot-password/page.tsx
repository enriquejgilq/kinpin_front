"use client"

import Link from "next/link"
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { TextField, Typography } from '@mui/material'
import { Button } from '@mui/material'


function ForgotPassword() {
  return (
    <div className="relative min-h-screen   p-4 flex items-center justify-center">
      <div className="relative w-full max-w-md">
        <div className="backdrop-blur-lg bg-white/30 border border-white/50 rounded-2xl shadow-xl p-8">
          <div className="absolute top-4 left-4">
            <Link href="/login">
              <Button className="h-8 w-8 rounded-full">
                <KeyboardArrowLeftIcon className="h-4 w-4" />
                <span className="sr-only">Volver</span>
              </Button>
            </Link>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold  ">Recuperar Contraseña</h1>
            <p className="text-sm   mt-2">
              Ingresa tu correo electrónico para recibir un enlace de recuperación
            </p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <Typography  >
                Correo electrónico
              </Typography>
              <TextField
                id="email"
                type="email"
                fullWidth
                placeholder="nombre@ejemplo.com"
                className="backdrop-blur-sm bg-white/40 border-white/50 focus:border-white focus:bg-white/60 transition-all"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r   hover:from-indigo-600 hover:to-purple-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Enviar Enlace
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span  >¿Recordaste tu contraseña?</span>{" "}
            <Link href="/login" className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
              Volver al inicio de sesión
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword