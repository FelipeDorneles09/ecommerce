'use client'

import React, { useEffect, useMemo, useState } from 'react'

import classes from './index.module.scss'

const Promotion = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Define o targetDate apenas uma vez quando o componente é montado
  const targetDate = useMemo(() => {
    const date = new Date()
    date.setDate(date.getDate() + 3)
    return date
  }, [])

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const currentTime = new Date()
      const timeDifference = Math.max(Number(targetDate) - Number(currentTime), 0)

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

      setTime({ days, hours, minutes, seconds })

      if (timeDifference === 0) {
        clearInterval(timerInterval)
        // Você pode adicionar código aqui para tratar o que acontece quando a data alvo é atingida.
      }
    }, 1000)

    return () => {
      clearInterval(timerInterval) // Limpar o intervalo quando o componente for desmontado.
    }
  }, [targetDate]) // targetDate é uma dependência estática e não mudará

  return (
    <section className={classes.promotion}>
      <div className={classes.textBox}>
        <h3 className={classes.title}>Promoções do mês</h3>
        <p>
          Prepare-se para uma experiência de compras como nunca antes com nossas Ofertas do Mês! Cada
          compra vem com vantagens e ofertas exclusivas, tornando este mês uma celebração de escolhas
          inteligentes e ofertas incríveis. Não perca! 🎁🛒
        </p>

        <ul className={classes.stats}>
          <StatBox label="Days" value={time.days} />
          <StatBox label="Hours" value={time.hours} />
          <StatBox label="Minutes" value={time.minutes} />
          <StatBox label="Seconds" value={time.seconds} />
        </ul>
      </div>
    </section>
  )
}

const StatBox = ({ label, value }: { label: string; value: number }) => (
  <li className={classes.statBox}>
    <h4>{value}</h4>
    <p>{label}</p>
  </li>
)

export default Promotion
