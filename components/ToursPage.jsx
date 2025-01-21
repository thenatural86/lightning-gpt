'use client'

import { getAllTours } from '@/utils/action'
import ToursList from './ToursList'
import { useQuery } from '@tanstack/react-query'

const ToursPage = () => {
  const { data, isPending } = useQuery({
    queryKey: ['tours'],
    queryFn: () => getAllTours(),
  })
  return (
    <>
      {isPending ? (
        <span className='loading'></span>
      ) : (
        <ToursList data={data} />
      )}
    </>
  )
}

export default ToursPage
