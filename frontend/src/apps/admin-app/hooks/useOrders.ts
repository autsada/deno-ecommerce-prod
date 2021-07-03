import { useQuery } from 'react-query'
import axios from 'axios'

import { useAppSelector } from '../../../store/store'
import { selectAuth } from '../../../store/slices/authSlice'
import { OrderDetail } from '../../../types'
import { createHeaders } from '../../../utils/helpers'

export const useOrders = () => {
  const { accessToken } = useAppSelector(selectAuth)

  return useQuery<OrderDetail[], { message: string }>('admin-orders', () =>
    axios({
      url: `/backend/admin/orders`,
      method: 'GET',
      headers: createHeaders('json', accessToken!),
      withCredentials: true,
    }).then((res) => res.data.orders)
  )
}
