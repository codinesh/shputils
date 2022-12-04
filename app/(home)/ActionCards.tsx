import {
  BuildingStorefrontIcon,
  CalculatorIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'

export const ActionCards = () => {
  return (
    <section className='container '>
      <div className='flex flex-wrap'>
        <div className='xl:w-1/3 md:w-1/2 p-4'>
          <Link href='/apps/inventory'>
            <div className=' border-2 border-dashed border-gray-500 hover:border-red-500 p-6 rounded-lg group'>
              <div className='w-10 h-10 inline-flex items-center justify-center rounded-full group-hover:bg-red-200 bg-gray-200 text-red-500 mb-4'>
                <BuildingStorefrontIcon className='w-6 h-6' />
              </div>
              <h2 className='text-lg text-gray-900 font-medium title-font mb-2'>
                Inventory
              </h2>
              <p className='leading-relaxed text-base'>
                Track the inventory assignment, available quantity, procurement.
              </p>
            </div>
          </Link>
        </div>
        <div className='xl:w-1/3 md:w-1/2 p-4'>
          <Link href='/apps/water'>
            <div className='border-2 border-dashed border-gray-500 hover:border-red-500 p-6 rounded-lg group'>
              <div className='w-10 h-10 inline-flex items-center justify-center rounded-full group-hover:bg-red-200 bg-gray-200 text-red-500 mb-4'>
                <CalculatorIcon className='w-6 h-6' />
              </div>
              <h2 className='text-lg text-gray-900 font-medium title-font mb-2'>
                Water volume calculator
              </h2>
              <p className='leading-relaxed text-base'>
                Monitor the water level, inflow, and utilization.
              </p>
            </div>
          </Link>
        </div>
        <div className='xl:w-1/3 md:w-1/2 p-4'>
          <Link href='/'>
            <div className='border-2 border-dashed border-gray-500 hover:border-red-500 p-6 rounded-lg group'>
              <div className='w-10 h-10 inline-flex items-center justify-center rounded-full group-hover:bg-red-200 bg-gray-200 text-red-500 mb-4'>
                <UserIcon className='w-6 h-6' />
              </div>
              <h2 className='text-lg text-gray-900 font-medium title-font mb-2'>
                Leave management
              </h2>
              <p className='leading-relaxed text-base'>
                Manage leaves of office-boys and vendors.
              </p>
            </div>
          </Link>
        </div>
        <div className='xl:w-1/3 md:w-1/2 p-4'>
          <Link href='/'>
            <div className='border-2 border-dashed border-gray-500 hover:border-red-500 p-6 rounded-lg group'>
              <div className='w-10 h-10 inline-flex items-center justify-center rounded-full group-hover:bg-red-200 bg-gray-200 text-red-500 mb-4'>
                <UserIcon className='w-6 h-6' />
              </div>
              <h2 className='text-lg text-gray-900 font-medium title-font mb-2'>
                Dashboards
              </h2>
              <p className='leading-relaxed text-base'>
                Analyze and track the metrics here.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
