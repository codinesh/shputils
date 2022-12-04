'use client'
import { SupabaseClient } from '@supabase/supabase-js'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Panel from '../../../../src/components/Panel'

interface IInventory {
  id: string
  name: string
  available_quantity: number
  description?: string
  category_id: number
  created_at: Date
  picture_url?: string
  updated_at?: Date
}

const Page = () => {
  const [inventory, setInventory] = useState<IInventory[]>([])
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [item, setSelectedItem] = useState<IInventory>()
  useEffect(() => {
    let client = new SupabaseClient(
      process.env.NEXT_PUBLIC_SUPABASE_API!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON!,
      {
        auth: {
          persistSession: true,
        },
      }
    )

    let inventoryQuery = client.from('inventory').select()
    inventoryQuery.then((x) => {
      if (x.data) {
        setInventory(x.data)
      }
    })
  }, [])

  return (
    <div className='flex flex-col w-full '>
      <h3 className='text-2xl mb-2'>Inventory</h3>
      <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
          <div className='overflow-hidden'>
            <table className='min-w-full text-nowrap align-middle '>
              <thead className='bg-white border-b text-lg font-bold'>
                <tr className='text-lg font-bold'>
                  <th
                    scope='col'
                    className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>
                    Item
                  </th>
                  <th
                    scope='col'
                    className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>
                    Available quantity
                  </th>
                  <th
                    scope='col'
                    className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>
                    Assigned on
                  </th>
                </tr>
              </thead>
              <tbody>
                {inventory.map((item) => {
                  return (
                    <tr
                      onDoubleClick={() => {
                        setSelectedItem(item)
                        setIsOpen(true)
                      }}
                      key={item.id}
                      className='bg-white  border-b transition duration-300 ease-in-out hover:bg-gray-100'>
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                        <div className='flex items-center'>
                          <Image
                            className='object-cover  border rounded-md'
                            width={60}
                            height={60}
                            src={item.picture_url ?? '/thumbnail.jpg'}
                            alt={'Image'}
                          />
                          <span className='text-md ml-2'>{item.name}</span>
                        </div>
                      </td>
                      <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                        {item.available_quantity}
                      </td>

                      <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                        {new Date(item.created_at)?.toLocaleDateString()}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Panel open={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  )
}

export default Page
