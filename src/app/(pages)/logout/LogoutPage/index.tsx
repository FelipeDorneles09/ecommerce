'use client'

import React, { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'

import { Settings } from '../../../../payload/payload-types'
import { useAuth } from '../../../_providers/Auth'

export const LogoutPage: React.FC<{
  settings: Settings
}> = props => {
  const { settings } = props
  const { productsPage } = settings || {}
  const { logout } = useAuth()
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const performLogout = async () => {
      try {
        await logout()
        setSuccess('Você saiu com sucesso.')
      } catch (_) {
        setError('You are already logged out.')
      }
    }

    performLogout()
  }, [logout])

  return (
    <Fragment>
      {(error || success) && (
        <div>
          <h1>{error || success}</h1>
          <p>
            {'O que você que fazer em seguida?'}
            {typeof productsPage === 'object' && productsPage?.slug && (
              <Fragment>
                {' '}
                <Link href={`/${productsPage.slug}`}>Clique aqui</Link>
                {` para ver os produtos.`}
              </Fragment>
            )}
            {` Para fazer login novamente, `}
            <Link href="/login">clique aqui</Link>
            {'.'}
          </p>
        </div>
      )}
    </Fragment>
  )
}
