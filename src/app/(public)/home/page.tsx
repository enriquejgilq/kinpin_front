"use client"
import React from 'react'
import Link from "next/link"
import { Button } from '@mui/material'

function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1 items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary">Bienvenido</h1>
            <p className="mt-2 text-lg text-muted-foreground">Inicia sesión o regístrate para continuar</p>
          </div>
          <div className="space-y-4 ">
            <Link href="/login" className="block w-full">
              <Button variant="contained" size='large' className="w-full"   >
                Iniciar Sesión
              </Button>
            </Link>
            <Link href="/register" className="block w-full">
              <Button variant="outlined" className="w-full">
                Registrarse
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home