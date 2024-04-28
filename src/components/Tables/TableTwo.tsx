import { Product } from '../../types/product';
import RedBull from '../../images/red-bull.png';
import RedBullSF from '../../images/red-bull-sf.jpg';
import { useState } from 'react';

const TableTwo = () => {
  const [productData, setProductData] = useState<Product[]>([
    {
      image: RedBull,
      name: 'Red Bull',
      quantity: 6,
      dateIn: '4-27-24',
      dateOut: '4-28-24',
    },
    {
      image: RedBullSF,
      name: 'Red Bull Sugar Free',
      quantity: 7,
      dateIn: '4-26-24',
      dateOut: 'X',
    },
    {
      image: RedBull,
      name: 'Red Bull',
      quantity: 2,
      dateIn: '4-25-24',
      dateOut: '4-28-24',
    },
    {
      image: RedBullSF,
      name: 'Red Bull Sugar Free',
      quantity: 1,
      dateIn: '4-28-24',
      dateOut: 'X',
    },
  ]);

  return (
    <div className="rounded-xl border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">

      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Product Name</p>
        </div>
        <div className="col-span-1 hidden items-center sm:flex">
          <p className="font-medium">Quantity</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Date In</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Date Out</p>
        </div>
      </div>

      {productData.map((product, key) => (
        <div
          className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-3 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="h-12.5 w-15 rounded-md">
                <img src={product.image} alt="Product" />
              </div>
              <p className="text-sm text-black dark:text-white">
                {product.name}
              </p>
            </div>
          </div>
          <div className="col-span-1 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              {product.quantity}
            </p>
          </div>
          <div className="col-span-2 flex items-center">
            <p className="text-sm text-black dark:text-white">
              ${product.dateIn}
            </p>
          </div>
          <div className="col-span-2 flex items-center">
            <p className="text-sm text-black dark:text-white">{product.dateOut}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableTwo;
