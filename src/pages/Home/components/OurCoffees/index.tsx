import { useState } from 'react'
import { CoffeeCard } from './CoffeeCard'
import { OurCoffesContainer, OurCoffesContent } from './styles'
import { mockCoffees } from './mock'
import { ICoffee } from '../../../../interfaces/coffee'

export const OurCoffees = () => {
  const [coffees] = useState<ICoffee[]>(mockCoffees)

  return (
    <OurCoffesContainer>
      <OurCoffesContent>
        <h2>Nossos cafés</h2>

        <ul>
          {!!coffees &&
            coffees.map((coffee) => (
              <CoffeeCard key={coffee.id} coffee={coffee} />
            ))}
        </ul>
      </OurCoffesContent>
    </OurCoffesContainer>
  )
}
