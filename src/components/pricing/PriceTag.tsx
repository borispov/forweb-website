import React, { ReactElement,ReactNode} from 'react';

import { IPriceType } from './pricingData';
function PriceTagElement({ children }:{ children: ReactNode} ): ReactElement {
  return (
    <>
      <p className="font-work text-lg tracking-wider">
        {children}
      </p>
    </>
  )
};

export default function PriceTag({ prefix = '', recurring = false, value, startingAt = false }: IPriceType) {

  // Prefix is optional.
  return (
    <PriceTagElement>
      {
        `${prefix} ${startingAt && `החל מ- ` || ''}${value}₪ ${recurring && `/חודש` || ''}`
      }
    </PriceTagElement>
  )
}