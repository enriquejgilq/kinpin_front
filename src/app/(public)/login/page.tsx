"use client"

import { useState } from "react"
import Link from "next/link"

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { TextField, Typography } from '@mui/material'
import { Button } from '@mui/material'


export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="relative min-h-screen p-4 flex items-center justify-center">
      <div className="relative w-full max-w-md">
        <div className="backdrop-blur-lg bg-white/30 border border-white/50 rounded-2xl shadow-xl p-8">
          <div className="absolute top-4 left-4">
            <Link href="/">
              <Button className="h-8 w-8 rounded-full">
                <KeyboardArrowLeftIcon className="h-4 w-4" />
                <span className="sr-only">Volver</span>
              </Button>
            </Link>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold">Iniciar Sesión</h1>
            <p className="text-sm mt-2">Ingresa tus credenciales para continuar</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <Typography>Correo electrónico</Typography>
              <div className="relative">
                <TextField
                  id="email"
                  type="email"
                  fullWidth
                  placeholder="nombre@ejemplo.com"
                  sx={{
                    backgroundColor: 'transparent',
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'transparent',
                      '&:hover fieldset': {
                        borderColor: '#ccc',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#1976d2',
                      },
                    },
                    '& input': {
                      backgroundColor: 'transparent',
                      userSelect: 'text',
                      '&::selection': {
                        backgroundColor: 'transparent',
                      },
                    },
                  }}
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Typography>Contraseña</Typography>
                <Link
                  href="/forgot-password"
                  className="text-xs text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <div className="relative">
                <TextField
                  id="password"
                  fullWidth
                  type={showPassword ? "text" : "password"}
                 // placeholder="••••••••"
                  className="backdrop-blur-sm bg-white/40 border-white/50 focus:border-white focus:bg-white/60 transition-all pr-10"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 hover:text-gray-700"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <RemoveRedEyeIcon className="h-4 w-4" />
                  ) : (
                    <VisibilityOffIcon className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Iniciar Sesión
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span>¿No tienes una cuenta?</span>{" "}
            <Link
              href="/register"
              className="text-black-600 hover:text-blue-800 font-medium transition-colors"
            >
              Regístrate
            </Link>
          </div>
        </div>
      </div>
    </div>




  )
}
