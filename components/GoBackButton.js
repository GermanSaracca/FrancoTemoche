import React from 'react'
import { useRouter } from 'next/router'

const GoBackButton = () => {
  const router = useRouter()
  const pathname = router.pathname

  if (pathname === '/') {
    return null
  }

  return (
    <button className="go-back-btn" onClick={() => router.back()}>
      Go Back
    </button>
  )
}

export default GoBackButton
