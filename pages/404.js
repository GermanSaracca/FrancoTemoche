import React from 'react'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFoundPage = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 4000)
  }, [])

  return (
    <div>
      <h1>No se encontro la pagina</h1>
      <p>
        Volver a la <Link href="/">Homepage</Link>
      </p>
      <style jsx>{`
        div {
          background: pink;
          display: grid;
          place-items: center;
          min-height: 100vh;
        }
      `}</style>
    </div>
  )
}

export default NotFoundPage
