import { useQuery } from 'react-query'
import axios from 'axios'

import { useAppSelector } from '../../../store/store'
import { selectAuth } from '../../../store/slices/authSlice'
import { Address } from '../../../types'
import { createHeaders } from '../../../utils/helpers'

export const useAddresses = () => {
  const { accessToken } = useAppSelector(selectAuth)

  return useQuery<Address[], { message: string }>('addresses', () =>
    axios({
      url: `/backend/addresses`,
      method: 'GET',
      headers: createHeaders('json', accessToken!),
      withCredentials: true,
    }).then((res) => res.data.shipping_addresses)
  )
}
