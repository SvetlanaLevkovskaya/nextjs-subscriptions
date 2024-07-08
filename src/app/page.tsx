import { NavLayout } from '@/components/NavLayout/NavLayout'
import { SubscriptionCard } from '@/components/SubscriptionCard/SubscriptionCard'

import { additionalOptions, mainPackages } from '@/data'

export default function Home() {
  return (
    <NavLayout>
      <section className="my-6">
        <h2 className="text-2xl font-semibold text-center mb-4">Основные пакеты</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mainPackages.map((pkg, index) => (
            <SubscriptionCard
              key={index}
              title={pkg.title}
              description={pkg.description}
              price={pkg.price}
              buttonText={pkg.buttonText}
            />
          ))}
        </div>
      </section>

      <section className="my-6">
        <h2 className="text-2xl font-semibold text-center mb-4">Дополнительные опции</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalOptions.map((option, index) => (
            <SubscriptionCard
              key={index}
              title={option.title}
              description={option.description}
              price={option.price}
              buttonText={option.buttonText}
            />
          ))}
        </div>
      </section>
    </NavLayout>
  )
}
