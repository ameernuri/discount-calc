'use client'

import { useEffect, useState } from 'react'

const Home = () => {
  const [discountType, setDiscountType] = useState<'%' | '$'>('%')
  const [discountVal, setDiscountVal] = useState<number>(0)
  const [priceType, setPriceType] = useState<'before' | 'after'>('before')
  const [priceBefore, setPriceBefore] = useState<number>(0)
  const [priceAfter, setPriceAfter] = useState<number>(0)
  const [discount, setDiscount] = useState<number>(0)

  useEffect(() => {
    if (discountType === '%') {
      if (priceType === 'before') {
        setDiscountVal((priceAfter * discount) / 100)
      } else {
        setDiscountVal((priceBefore * discount) / 100)
      }
    } else {
      setDiscountVal(discount)
    }
  }, [discountType, discount, priceType, priceBefore, priceAfter])

  return (
    <div>
      <h1 className='px-10 py-5 bg-lime-600 text-xl bold italic'>
        Discount Calculator!
      </h1>
      <div className='grid gap-2'>
        <div className='grid grid-cols-2 gap-4'>
          <div className='grid grid-col items-center justify-center'>
            <div className='grid grid-col gap-5 items-center justify-center p-10'>
              <div>
                <button
                  className={`hover:bg-lime-700 text-white font-bold py-2 px-4 rounded mx-2 ${
                    priceType === 'before' ? 'bg-lime-500' : 'bg-lime-900'
                  }`}
                  onClick={() => {
                    setPriceType('before')
                  }}
                >
                  Calculate Before
                </button>
                <button
                  className={`hover:bg-lime-700 text-white font-bold py-2 px-4 rounded mx-2 ${
                    priceType === 'after' ? 'bg-lime-500' : 'bg-lime-900'
                  }`}
                  onClick={() => {
                    setPriceType('after')
                  }}
                >
                  Calculate After
                </button>
              </div>
              <div className={`${priceType === 'before' ? 'hidden' : ''}`}>
                <label className='text-xl'>Price Before Discount</label>
                <div className={`grid w-80 h-10`}>
                  <input
                    className='border-2 border-gray-500 text-lime-900'
                    type='number'
                    id='priceBefore'
                    name='priceBefore'
                    onChange={(ev) => {
                      setPriceBefore(+ev.target.value || 0)
                    }}
                  />
                </div>
              </div>

              <div className={`${priceType === 'after' ? 'hidden' : ''}`}>
                <label className='text-xl'>Price After Discount</label>
                <div className={`grid w-80 h-10`}>
                  <input
                    className='border-2 border-gray-500 text-lime-900'
                    type='number'
                    id='priceAfter'
                    name='priceAfter'
                    onChange={(ev) => {
                      setPriceAfter(+ev.target.value || 0)
                    }}
                  />
                </div>
              </div>
              <div>
                <h1 className={`text-xl text-lime-300`}>
                  Price {priceType === 'after' ? 'After' : 'Before'} Discount: $
                  {priceType === 'after'
                    ? priceBefore - discountVal
                    : priceAfter + discountVal}
                </h1>
              </div>

              <div>
                <label className='text-xl'>Discount ({discountType})</label>
                <div className=' grid gap-2 grid-flow-col w-80 h-10'>
                  <input
                    className='border-2 border-gray-500 text-lime-900'
                    type='number'
                    id='discount'
                    name='discount'
                    onChange={(ev) => {
                      setDiscount(+ev.target.value || 0)
                    }}
                  />
                  <button
                    className={`hover:bg-lime-700 text-white font-bold py-2 px-4 rounded ${
                      discountType === '%' ? 'bg-lime-500' : 'bg-lime-900'
                    }`}
                    onClick={() => {
                      setDiscountType('%')
                    }}
                  >
                    %
                  </button>
                  <button
                    className={`hover:bg-lime-700 text-white font-bold py-2 px-4 rounded ${
                      discountType === '$' ? 'bg-lime-500' : 'bg-lime-900'
                    } `}
                    onClick={() => {
                      setDiscountType('$')
                    }}
                  >
                    $
                  </button>
                </div>
              </div>

              <div>
                <h1 className={`text-xl text-lime-300`}>
                  You are saving ${discountVal}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
