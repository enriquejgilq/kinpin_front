"use client"
import { useState } from "react"
import Link from "next/link"
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import TextField from '@mui/material/TextField';

import React from 'react'
import { Button, Typography } from "@mui/material"

function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="relative min-h-screen  p-4 flex items-center justify-center">
       <div className="absolute top-20 left-20 w-64 h-64  rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-20 w-72 h-72  rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-80 h-80   rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative w-full max-w-md">
        <div className="backdrop-blur-lg bg-white/30 border border-white/50 rounded-2xl shadow-xl p-8">
          <div className="absolute top-4 left-4">
            <Link href="/">
              <Button   className="h-8 w-8 rounded-full">
                <KeyboardArrowLeftIcon className="h-4 w-4" />
                <span className="sr-only">Volver</span>
              </Button>
            </Link>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Crear Cuenta</h1>
            <p className="text-sm  mt-2">Completa tus datos para registrarte</p>
          </div>

          <form className="space-y-5">
            <div className="space-y-2">
              <Typography  >
                Nombre completo
              </Typography>
              <TextField
                id="name"
                type="text" 
                placeholder="Tu nombre"
                size="medium"
                fullWidth
                className="backdrop-blur-sm"
              />
            </div>

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

            <div className="space-y-2">
              <Typography  >
                Contraseña
              </Typography>
              <div className="relative">
                <TextField
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  fullWidth
                  className="backdrop-blur-sm bg-white/40 border-white/50 focus:border-white focus:bg-white/60 transition-all pr-10"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2  hover:text-gray-700"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <VisibilityOffIcon className="h-4 w-4" /> : <RemoveRedEyeIcon className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <Typography  >
                Confirmar contraseña
              </Typography>
              <div className="relative">
                <TextField
                  id="confirm-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  fullWidth
                  className="backdrop-blur-sm bg-white/40 border-white/50 focus:border-white focus:bg-white/60 transition-all pr-10"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-color1 to-color5 hover:from-color2 hover:to-color4 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"

             >
              Crear Cuenta
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-black">¿Ya tienes una cuenta?</span>{" "}
            <Link href="/login" className="hover:text-indigo-800 font-medium transition-colors">
              Inicia sesión
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage